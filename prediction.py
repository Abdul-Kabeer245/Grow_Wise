import flask
import numpy as np
import sklearn
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
from tensorflow import keras
import pickle
import os

    # Load the saved deep learning model
loaded_model="../models/crop_rec_model.h5"
loaded_model=keras.models.load_model(loaded_model)
    # Load the saved MinMaxScaler
scaler_filename = "../models/scaler.pkl"
with open(scaler_filename, 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)
    
# Define the function to get the crop recommendation using the loaded model
def recommendation(N, P, K, temperature, humidity, ph, rainfall):
    # Scale the user input data using the loaded scaler
    user_input_data = np.array([[N, P, K, temperature, humidity, ph, rainfall]])
    scaled_user_input = scaler.transform(user_input_data)
    
    # Make predictions with the loaded model
    prediction = loaded_model.predict(scaled_user_input)
    crop_names = {
            0: "Rice",
            1: "Maize",
            2: "Jute",
            3: "Cotton",
            4: "Coconut",
            5: "Papaya",
            6: "Orange",
            7: "Apple",
            8: "Muskmelon",
            9: "atermelon",
            10: "Grapes",
            11: "Mango",
            12: "Banana",
            13: "Pomegranate",
            14: "Lentil",
            15: "Blackgram",
            16: "Mungbean",
            17: "Mothbeans",
            18: "Pigeonpeas",
            19: "Kidneybeans",
            20: "Chickpea",
            21: "Coffee",
            22: "peas",
            23: "cowpeas",
            24: "groundnuts",
            25: "beans",
            26: "Soyabeans",
            27: "wheat",
            28: 'tobacco'
        }
    
    crop_id = np.argmax(prediction)
    recommended_crop = crop_names[crop_id]
    return recommended_crop