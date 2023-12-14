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
    def detect_faces(self, img_list):
        """
        Detect faces in an image using yolov5 model, return bouding boxes positions
        """
        results = model(img_list)

        return results

    # define the function to draw bounding boxes on the image
    def draw_boxes(self, results, imgs, names, return_local=True):
        """
        Draw bounding boxes on the image, return new image with bounding boxes
        """
        # Process results list
        images_result_np_list = []
        for result, img, name in zip(results, imgs, names):
            boxes = result.data  # Boxes object for bbox outputs
            masks = result.masks  # Masks object for segmentation masks outputs
            keypoints = result.keypoints  # Keypoints object for pose outputs
            probs = result.probs  # Probs object for classification outputs

            annotator = Annotator(img)

            for box in boxes:
                b = box.xyxy[0]  # (top, left, bottom, right) format coordinate
                c = box.cls
                annotator.box_label(b, model.names[int(c)])

            img = annotator.result()
            name = name.replace('.jpg', '')
            if return_local:
                cv2.imwrite('box_img/{}_boxes.jpg'.format(name), img)

            images_result_np_list.append(img)

        return images_result_np_list

    def process_single_image(self, img_dir, return_local, img_np=None, name=None):
        """
        Process the image to detect faces and draw bounding boxes on the image
        use img_np and its according name if you want to pass np array with single pic
        """
        if img_np is not None:
            img = img_np
            name = name
        else:
            name = img_dir.split('/')[-1]
            img = cv2.imread(img_dir)
        boxes_list = self.detect_faces([img])
        images_result_np_list = self.draw_boxes(boxes_list, [img], [name], return_local)

        return boxes_list, images_result_np_list

    def process_multiple_image(self, img_dir, return_local, img_np_list=None, names=None):
        """
        use img_np_list and their according names if you want to pass np arrays with multiple pics
        """
        if img_np_list:
            imgs = img_np_list
            names = names
        else:
            imgs = [cv2.imread(img_dir + '/' + file) for file in os.listdir(img_dir)]
            names = [file for file in os.listdir(img_dir)]
        boxes_list = self.detect_faces(imgs)
        self.draw_boxes(boxes_list, imgs, names, return_local)

        return boxes_list


if __name__ == '__main__':
    detector = Detector()
    img_dir = 'img'
    # detector.process_single_image(img_dir)
    detector.process_multiple_image(img_dir, return_local=True)
