
"""
let's practice using pytorch!
"""
import glob
import os

# detect human faces in images using cv2, pytorch and yolov5 model, passing the result image with bounding boxes to the frontend
import matplotlib.pyplot as plt
import cv2
import torch
import numpy as np
from PIL import Image
from pathlib import Path
from flask_cors import CORS
import cv2
from ultralytics import YOLO
from ultralytics.utils.plotting import Annotator

# load the default model
model = YOLO("yolov8n.pt")

# set the device to cpu
device = torch.device('cpu')

class Detector():

    def __init__(self):
        pass

    # define the function to detect faces
    def detect_faces(self,img_list):
        """
        Detect faces in an image using yolov5 model, return bouding boxes positions
        """
        results = model(img_list)

        return results

    # define the function to draw bounding boxes on the image
    def draw_boxes(self, results, imgs, names):
        """
        Draw bounding boxes on the image, return new image with bounding boxes
        """
        # Process results list
        for result,img,name in zip(results, imgs, names):
            boxes = result.boxes  # Boxes object for bbox outputs
            masks = result.masks  # Masks object for segmentation masks outputs
            keypoints = result.keypoints  # Keypoints object for pose outputs
            probs = result.probs  # Probs object for classification outputs

            annotator = Annotator(img)

            for box in boxes:
                b = box.xyxy[0] # (top, left, bottom, right) format coordinate
                c = box.cls
                annotator.box_label(b, model.names[int(c)])

            img = annotator.result()
            name = name.replace('.jpg','')
            cv2.imwrite('box_img/{}_boxes.jpg'.format(name), img)

    def process_single_image(self, img_dir):
        """
        Process the image to detect faces and draw bounding boxes on the image
        """
        names = img_dir.split('/')[-1]
        img = cv2.imread(img_dir)
        boxes_list = self.detect_faces([img])
        self.draw_boxes(boxes_list, [img], [names])

        return boxes_list

    def process_multiple_image(self, img_dir):
        imgs = [cv2.imread(img_dir+'/'+file) for file in os.listdir(img_dir)]
        names = [file for file in os.listdir(img_dir)]
        boxes_list = self.detect_faces(imgs)
        self.draw_boxes(boxes_list, imgs, names)

        return boxes_list


if __name__ == '__main__':
    detector = Detector()
    img_dir = 'img'
    # detector.process_single_image(img_dir)
    detector.process_multiple_image(img_dir)