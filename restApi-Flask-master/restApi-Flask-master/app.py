from os import name
from flask import Flask, json
from flask_pymongo import PyMongo
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask import jsonify,request
from werkzeug.security import generate_password_hash, check_password_hash



#initialise a flask app
app = Flask(__name__)

# set a secret key
app.secret_key = "wakanda"

# configure mongo URI
app.config["MONGO_URI"] = "mongodb://localhost:27017/flaskRestApi"

#connect database with pymongo library
mongo = PyMongo(app)




#create a route POST
@app.route('/add', methods=['POST'])
def add_user():
    _json = request.json
    _name = _json["name"]
    _email = _json["email"]    
    _password = _json["pwd"]    

    if _name and _email and _password and request.method == "POST":
        _hashed_password = generate_password_hash(_password)
        id = mongo.db.user.insert({"name":_name, "email":_email, "pwd":_hashed_password})
        resp = jsonify("The user has been added successfully", _name, _email, _hashed_password)
        resp.status_code = 200
        return resp
    else:
        return not_found()

# Get request route
@app.route('/get-users')
def users():
    users = mongo.db.user.find()
    resp = dumps(users)
    return resp

# GET specific user
@app.route('/user/<id>')
def user(id):
    user = mongo.db.user.find_one({'_id':ObjectId(id)})
    resp = dumps(user)
    return resp

#Delete a user
@app.route('/delete/<id>', methods=['DELETE'])
def delete_user(id):
    mongo.db.user.delete_one({'_id':ObjectId(id)})
    resp = jsonify("User deleted successfully")
    resp.status_code = 200
    return resp

#UPDATE user
@app.route('/update/<id>', methods=['PUT'])
def update_user(id):
    _id = id
    _json = request.json
    _name = _json['name']
    _email = _json['email']
    _password = _json['pwd']

    if _name and _email and _password and _id and request.method == 'PUT':
        _hashed_password = generate_password_hash(_password)
        mongo.db.user.update_one({'_id': ObjectId(_id['$oid']) if '$oid' in _id else ObjectId(_id)}, {'$set': {'name':_name, 'email':_email, 'pwd':_hashed_password}})
        resp = jsonify("user updated successfully")
        resp.status_code = 200
        return resp
    else:
        return not_found()

#Error handler
@app.errorhandler(404)
def not_found(error=None):
    message ={
        "status":404,
        "message":"This request not Found" + request.url
    }
    resp = jsonify(message)
    resp.status_code = 404
    return resp


#Run server
if __name__ == "__main__":
    app.run(debug=True)


