from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html') 

@app.route('/post_data', methods=['POST'])
def receive_data():
    data = request.get_json()
    print(data)
    # process data as needed
    response_data = {'message': 'Data received successfully!'}
    return response_data

if __name__ == '__main__':
    app.run(debug=True)
