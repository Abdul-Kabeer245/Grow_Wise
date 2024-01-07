from flask import Flask, render_template

app = Flask('__name__', template_folder = 'Front-end', static_folder='Front-end', static_url_path='/Front-end/Assets')

@app.route('/')
def index():
    return render_template('index.html')
