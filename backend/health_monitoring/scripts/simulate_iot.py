import requests
import time
import random

API_URL = "http://localhost:8000/api/metrics/"

def generate_data():
    return {
        "heart_rate": random.randint(60, 100),
        "systolic": random.randint(90, 140),
        "diastolic": random.randint(60, 90),
        "temperature": round(random.uniform(36.1, 37.9), 1)
    }

while True:
    try:
        data = generate_data()
        response = requests.post(API_URL, json=data)
        print(response.json())
        print(f"Sent data: {data} | Status: {response.status_code}")
    except Exception as e:
        print(f"Error: {e}")
    time.sleep(5)