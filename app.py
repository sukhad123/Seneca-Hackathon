from flask import Flask, request, jsonify

app = Flask(__name__)
print("Hi")
@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.json  # Assuming data is sent as JSON
    print(data)
    print("Hi")
    return jsonify({'message': 'Data received successfully'})

if __name__ == '__main__':
    app.run(debug=True)
 