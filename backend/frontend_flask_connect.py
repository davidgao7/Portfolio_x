import cv2
import numpy as np
from flask import Flask, request, render_template, jsonify, send_file
from detect import Detector
import pickle
from werkzeug.utils import secure_filename

detector = Detector()
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app = Flask(__name__)


def allowed_file(filename: str):
    return '.' in filename and filename.split('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/image_face_recognition', methods=['POST','GET'])
def detect_obj_interface():

    if request.method=='POST':
        # check if the post request has the file part
        img_bytes = request.data
        # Decode image from bytes
        image_array = np.frombuffer(img_bytes, np.uint8)
        image_np = cv2.imdecode(image_array, cv2.IMREAD_COLOR)

        if image_np is None:
            return jsonify({'error': 'Failed to read the image'}), 400

        _, images_result_np_list = detector.process_single_image(img_dir=None, return_local=False, img_np=image_np,
                                                                 name='result')
        for img_result in images_result_np_list:
            # Encode the processed image as JPEG
            _, processed_image_data = cv2.imencode(".jpg", img_result)

            # Return the processed image as bytes
            return jsonify({'message': 'Image processed successfully',
                            'image_data': processed_image_data.tobytes().decode('latin1')})

    else:
        print('get')
        return jsonify({'status': 0})


if __name__ == '__main__':
    app.run(debug=True)
