"""
lets practice using pytorch!
"""
# detect human faces in images using cv2, pytorch and yolov5 model, passing the result image with bounding boxes to the frontend

import cv2
import torch
import numpy as np
from PIL import Image
from pathlib import Path
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# load the model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True, source='GitHub') # already downloaded from GitHub, load the model from local model

# set the model to inference mode
model.eval()

# set the device to cpu
device = torch.device('cpu')

# define the function to detect faces
def detect_faces(img):
    """
    Detect faces in an image using yolov5 model, return bouding boxes positions
    """
    
    pass

# define the function to draw bounding boxes on the image
def draw_boxes(img, boxes_list):
    """
    Draw bounding boxes on the image, return new image with bounding boxes
    """
    
    pass


def process_image(img):
    """
    Process the image to detect faces and draw bounding boxes on the image
    """
    boxes_list = detect_faces(img)
    img_with_boxes = draw_boxes(img, boxes_list)
    
    return img_with_boxes


