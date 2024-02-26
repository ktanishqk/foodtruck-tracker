from math import sin, cos, sqrt, atan2, radians
# Approximate radius of earth in km
R = 6373.0

def dist(lat1: float, lon1:float, lat2:float, lon2:float) -> float:

    '''
    Calculates the distance between two points

    Parameters:
    - lat1 (float): Latitude of the first point in radians.
    - lon1 (float): Longitude of the first point in radians.
    - lat2 (float): Latitude of the second point in radians.
    - lon2 (float): Longitude of the second point in radians.

    Returns:
    - distance (float): The distance between the two points in units defined by the constant R.
    '''
    lat1 = radians(lat1)
    lon1 = radians(lon1)
    lat2 = radians(lat2)
    lon2 = radians(lon2)
    
    dlon = lon2 - lon1
    dlat = lat2 - lat1

    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c
    return distance