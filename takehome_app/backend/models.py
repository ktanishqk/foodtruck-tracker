from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base


Base = declarative_base()

class FoodTruck(Base):
    __tablename__ = 'food_trucks'
    
    locationid = Column(Integer, primary_key=True)
    Applicant = Column(String)
    FacilityType = Column(String)
    cnn = Column(Integer)
    LocationDescription = Column(String)
    Address = Column(String)
    blocklot = Column(String)
    block = Column(Integer)
    lot = Column(Integer)
    permit = Column(String)
    Status = Column(String)
    FoodItems = Column(String)
    X = Column(Float)
    Y = Column(Float)
    Latitude = Column(Float)
    Longitude = Column(Float)
    Schedule = Column(String)
    dayshours = Column(String)
    NOISent = Column(Integer)
    Approved = Column(DateTime)
    Received = Column(DateTime)
    PriorPermit = Column(Integer)
    ExpirationDate = Column(DateTime)
    Location = Column(String)
    FirePreventionDistricts = Column(Integer)
    PoliceDistricts = Column(Integer)
    SupervisorDistricts = Column(Integer)
    ZipCodes = Column(Integer)
    Neighborhoods = Column(Integer)
