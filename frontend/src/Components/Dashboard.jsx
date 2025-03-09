import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Charts from './Charts';

const Dashboard = () => {
  const [metrics, setMetrics] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage, setItemsPerPage] = useState(5); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/metrics/');
        setMetrics(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds
    fetchData();
    return () => clearInterval(interval);
  }, []);


  const filteredData = metrics.filter((metric) => {
    const metricDate = new Date(metric.timestamp);
    return (
      (!startDate || metricDate >= new Date(startDate)) &&
      (!endDate || metricDate <= new Date(endDate))
    );
  });


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="dashboard">
      <div className="filters">
        <input
          type="datetime-local"
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="Start Date"
        />
        <input
          type="datetime-local"
          onChange={(e) => setEndDate(e.target.value)}
          placeholder="End Date"
        />
      </div>
      <Charts data={filteredData} />
      <div className="metrics-list">
        {currentItems.map((metric) => (
          <div key={metric.id} className="metric-card">
            <p>Time: {new Date(metric.timestamp).toLocaleString()}</p>
            <p>Heart Rate: {metric.heart_rate} BPM</p>
            <p>Blood Pressure: {metric.systolic}/{metric.diastolic} mmHg</p>
            <p>Temperature: {metric.temperature} °C</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastItem >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;