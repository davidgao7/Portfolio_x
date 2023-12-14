from requests.api import post

with open('img/singleperson.jpg', 'rb') as img:
    result = post(
        'http://127.0.0.1:5000/image_face_recognition',
        data=img
    )
    print(result)