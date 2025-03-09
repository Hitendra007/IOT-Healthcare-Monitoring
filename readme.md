![image](https://github.com/user-attachments/assets/79f54a64-4cf3-4a5f-b7a3-fcc753fb512e)
![image](https://github.com/user-attachments/assets/d525cf62-0ee8-46cc-9a4f-3165b25003da)
![image](https://github.com/user-attachments/assets/633a0368-c4db-47ad-9b1e-a45633d96fa4)


# IoT-Based Smart Healthcare Monitoring System

## Project Overview
This is IoT-based health monitoring system that collects health metrics (e.g., heart rate, blood pressure, temperature) from a simulated IoT device, stores the data in a PostgreSQL database, and displays it in a user-friendly dashboard using React.

---

## Features
1. **IoT Data Simulation**:
   - Simulates health metrics (heart rate, blood pressure, temperature).
   - Sends data to the backend in real-time.

2. **Backend (Django)**:
   - RESTful API for CRUD operations.
   - Stores data in a PostgreSQL database.

3. **Frontend (React)**:
   - Displays health metrics in a dashboard.
   - Real-time updates using periodic polling.
   - Interactive charts using Chart.js.

4. **Database (PostgreSQL)**:
   - Stores health metrics with timestamps.

---

## Architecture

### High-Level Architecture
```
IoT Device Simulation (Python)
          ↓
Django Backend (REST API)
          ↓
PostgreSQL Database
          ↓
React Frontend (Dashboard)
```

### Component Interactions
1. **IoT Device Simulation** generates mock health data and sends it to the **Django Backend**.
2. The **Django Backend** stores the data in the **PostgreSQL Database** and provides a RESTful API.
3. The **React Frontend** fetches data from the backend and displays it in a user-friendly dashboard.

---

## Setup Instructions

### Prerequisites
1. **Python 3.9+**: For backend development.
2. **Node.js**: For frontend development.
3. **PostgreSQL**: For database storage.
4. **Git**: For version control.

---

### Backend Setup

#### 1. Clone the Repository
```
git clone https://github.com/your-repo/iot-healthcare.git
cd iot-healthcare/backend
```

#### 2. Create a Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate 
```

#### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

#### 4. Set Up PostgreSQL
1. Create a database:
   ```bash
   CREATE DATABASE healthdb;
   CREATE USER myuser WITH PASSWORD 'mypassword';
   GRANT ALL PRIVILEGES ON DATABASE healthdb TO myuser;
   ```

2. Update `settings.py`:
> load from env file 
   ```python
   DATABASES = {
       'default': {
           'ENGINE': 'django.db.backends.postgresql',
           'NAME': '',
           'USER': '',
           'PASSWORD': '',
           'HOST': 'localhost',
           'PORT': '5432',
       }
   }
   ```

#### 5. Run Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

#### 6. Start the Backend Server
```bash
python manage.py runserver
```

#### 7. Simulate IoT Data
In a new terminal, run:
> simulate_iot.py simulates an iot device
> backend\health_monitoring\scripts\simulate_iot.py
```bash
python scripts/simulate_iot.py
```

---

### Frontend Setup

#### 1. Navigate to the Frontend Directory
```bash
cd ../frontend
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Start the Frontend Server
```bash
npm run dev
```

#### 4. Access the Dashboard
Open your browser and navigate to:
```
http://localhost:5173
```

---


## API Endpoints
> http://localhost:8000/api/metrics/
### Health Metrics
- **GET `/api/metrics/`**: Fetch all health metrics.
- **POST `/api/metrics/`**: Add a new health metric.
- **GET `/api/metrics/<id>/`**: Fetch a specific health metric.
- **PUT `/api/metrics/<id>/`**: Update a health metric.
- **DELETE `/api/metrics/<id>/`**: Delete a health metric.

---

## Real-Time Updates
The frontend fetches data from the backend every 5 seconds using periodic polling:
```javascript
const interval = setInterval(fetchData, 5000);
```

---




