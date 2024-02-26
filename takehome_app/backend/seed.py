import csv
from sqlalchemy import create_engine, inspect, MetaData, Table
from sqlalchemy.orm import sessionmaker
from models import FoodTruck
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()
# Define the database connection string
DATABASE_URL = os.getenv('DATABASE_URL')

engine = create_engine(DATABASE_URL)

Session = sessionmaker(bind=engine)

def seed_database():
    session = Session()
    session.query(FoodTruck).delete()
    session.commit()

    with open('/Users/tanishqkhurana/Desktop/UIUC/SPRING 2024/Emissary/takehome_app/food-truck-data.csv', 'r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:

            food_truck = FoodTruck(
                locationid=int(row['locationid']) if row['locationid'] else None,
                Applicant=row['Applicant'] if row['Applicant'] else None,
                FacilityType=row['FacilityType'] if row['FacilityType'] else None,
                cnn=int(row['cnn']) if row['cnn'] else None,
                LocationDescription=row['LocationDescription'] if row['LocationDescription'] else None,
                Address=row['Address'] if row['Address'] else None,
                blocklot=row['blocklot'] if row['blocklot'] else None,
                block=row['block'] if row['block'] else None,
                lot=row['lot'] if row['lot'] else None,
                permit=row['permit'] if row['permit'] else None,
                Status=row['Status'] if row['Status'] else None,
                FoodItems=row['FoodItems'] if row['FoodItems'] else None,
                X=float(row['X']) if row['X'] else None,
                Y=float(row['Y']) if row['Y'] else None,
                Latitude=float(row['Latitude']) if row['Latitude'] else None,
                Longitude=float(row['Longitude']) if row['Longitude'] else None,
                Schedule=row['Schedule'] if row['Schedule'] else None,
                dayshours=row['dayshours'] if row['dayshours'] else None,
                NOISent=int(row['NOISent']) if row['NOISent'] else None,
                Approved=datetime.strptime(row['Approved'], '%m/%d/%Y %I:%M:%S %p') if row['Approved'] else None,
                Received=datetime.strptime(row['Received'], "%Y%m%d") if row['Received'] else None,
                PriorPermit=int(row['PriorPermit']) if row['PriorPermit'] else None,
                ExpirationDate=datetime.strptime(row['ExpirationDate'], '%m/%d/%Y %I:%M:%S %p') if row['ExpirationDate'] else None,
                Location=row['Location'] if row['Location'] else None,
                FirePreventionDistricts=int(row['Fire Prevention Districts']) if row['Fire Prevention Districts'] else None,
                PoliceDistricts=int(row['Police Districts']) if row['Police Districts'] else None,
                SupervisorDistricts=int(row['Supervisor Districts']) if row['Supervisor Districts'] else None,
                ZipCodes=int(row['Zip Codes']) if row['Zip Codes'] else None,
                Neighborhoods=int(row['Neighborhoods (old)']) if row['Neighborhoods (old)'] else None
            )

            session.add(food_truck)
    print('commit')

    session.commit()
    print('inspect')
    inspector = inspect(engine)
    print('get')
    inspector.get_columns('food_trucks')

    print('close')
    session.close()

if __name__ == '__main__':
    seed_database()
