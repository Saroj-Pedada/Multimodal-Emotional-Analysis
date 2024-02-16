from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello')
def index():
    return 'Hello from Flask server!'

if __name__ == '__main__':
    app.run(port=8000)