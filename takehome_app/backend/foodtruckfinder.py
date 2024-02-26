from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from typing import Optional
from models import FoodTruck
import os
from dotenv import load_dotenv
from dist import dist

load_dotenv()
# Define the database connection string
DATABASE_URL = os.getenv('DATABASE_URL')
engine = create_engine(DATABASE_URL)

Session = sessionmaker(bind=engine)
session = Session()
class FoodtruckFinder:
    def __init__(self, user_lat: Optional[float]=37.785717, user_lon: Optional[float]=-122.401161, search_radius: Optional[float] = 5):
        self.user_lat = user_lat
        self.user_lon = user_lon
        self.search_radius = search_radius

    def set_location(self, user_lat: float, user_lon: float):
        self.user_lat = user_lat
        self.user_lon = user_lon

    def set_client_ip(self, client_ip: str):
        self.client_ip = client_ip

    def get_foodtrucks(self, radius):
        uniqueFoodTrucks = {}
        foodtrucks = session.query(FoodTruck).all()
        foodtrucks_in_radius = []
        print(self.user_lat, self.user_lon)
        for foodtruck in foodtrucks:
            if foodtruck.Applicant not in uniqueFoodTrucks:
                foodtruck = foodtruck.__dict__
                foodtruck.pop('_sa_instance_state', None)
                if foodtruck['Latitude'] == 0 or foodtruck['Longitude'] == 0:
                    continue
                uniqueFoodTrucks[foodtruck['Applicant']] = foodtruck
                distance_km = dist(self.user_lat, self.user_lon, foodtruck['Latitude'], foodtruck['Longitude'])
                print(distance_km)
                if distance_km <= radius:
                    print(foodtruck['Applicant'])
                    foodtrucks_in_radius.append(foodtruck)
                    
            if len(foodtrucks_in_radius) >= 10:
                break
        
        return foodtrucks_in_radius