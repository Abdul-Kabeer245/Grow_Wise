from flask import Flask, render_template, request
from prediction import load_and_classify
from flask_mysqldb import MySQL

app = Flask('__name__', template_folder = 'Front-end', static_folder='Front-end', static_url_path='/Front-end/Assets')

# database
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'grow_wise'
app.config['MYSQL_PASSWORD'] = 'Test.12345'
app.config['MYSQL_DB'] = 'grow_wise_db'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'
mysql = MySQL(app)

models_list={
    'apple':'apple_model',
    'banana': 'banana_model',
    'cherry': 'cherry_model',
    'cotton': 'cotton_model',
    'grape':'grape_model',
    'mango': 'mango_model',
    'maize': 'maize_model',
    'peach': 'peach_model',
    'potato':'potato_model',
    'pepper': 'pepper_model',
    'rice': 'rice_model',
    'soybean': 'soybean_model',
    'strawberry': 'strawberry_model',
    'tomato':'tomato_model',
    'wheat': 'wheat_model'
}
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/disease_identification', methods = ['GET', 'POST'])
def disease_identification():
    if request.method == 'POST':
        selected_plant = request.form.get('plants')
        uploaded_image = request.files['file-input']
        model_name = models_list.get(selected_plant)
        image_path = 'uploaded images/' + uploaded_image.filename
        uploaded_image.save(image_path) 
        if model_name:
            class_label = load_and_classify(model_name, image_path)
            if class_label != 'Healthy':
                cursor = mysql.connection.cursor()
                query = f"SELECT * FROM  diseaseidentification where plant_name = '{selected_plant}' and disease_name = '{class_label}'"
                cursor.execute(query)
                identification_data = cursor.fetchone()
        return render_template('identification result.html', identification_data = identification_data, result = class_label)

    return render_template('disease_identification.html')
