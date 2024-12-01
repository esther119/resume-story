from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/experience', methods=['POST'])
def get_experience(experience: str):
    return experience

if __name__ == '__main__':
    app.run(debug=True)
