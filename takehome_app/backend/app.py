from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from foodtruckfinder import FoodtruckFinder
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
foodtruckfinder = FoodtruckFinder()
def _build_cors_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add("Access-Control-Allow-Methods", "*")
    response.headers.add("Access-Control-Allow-Headers", "*")
    return response

@app.route('/api/save-location', methods=['POST', 'OPTIONS'])
@cross_origin()
def save_location():
    try:
        if request.method == 'OPTIONS':
            return _build_cors_preflight_response()
        elif request.method == 'POST':
            data = request.json
            latitude = data.get('latitude')
            longitude = data.get('longitude')
            foodtruckfinder.set_location(latitude, longitude)
            response = make_response(jsonify({'message': 'Location saved successfully.'}), 200)
            return response
        else:
            return RuntimeError(f'dunno{request.method}')
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/foodtrucks', methods=['GET', 'OPTIONS'])
@cross_origin()
def get_food_trucks():
    try:
        if request.method == 'OPTIONS':
            return _build_cors_preflight_response()
        elif request.method == 'GET':
            radius = int(request.args.get('radius'))
            food_trucks = foodtruckfinder.get_foodtrucks(radius)
            response = make_response(jsonify({"food_trucks": food_trucks}), 200)
            return response
        else:
            return RuntimeError(f'dunno{request.method}')
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True, host = '0.0.0.0', port=5432)
