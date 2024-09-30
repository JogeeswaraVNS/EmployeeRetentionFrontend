import tensorflow as tf
from transformers import AutoTokenizer,TFAutoModelForSequenceClassification
from flask import Flask,jsonify,request,Response
from flask_cors import CORS
import os
import re
import json
import pandas as pd

app=Flask(__name__)

CORS(app)

tokenizer_path = "./employee_retention_model_5epochs_99acc_97val_acc"
model_path = "./employee_retention_model_5epochs_99acc_97val_acc"

tokenizer = AutoTokenizer.from_pretrained(tokenizer_path, max_length=512, truncation=True)
model = TFAutoModelForSequenceClassification.from_pretrained(model_path)



UPLOAD_FOLDER = './uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

df_global = None


@app.route('/upload', methods=['POST'])
def upload_file():
    global df_global
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and file.filename.endswith('.csv'):
        filepath = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(filepath)

        try:
            df = pd.read_csv(filepath)


            if 'feedback' not in df.columns or 'person_name' not in df.columns:
                return jsonify({"error": "Required columns ('feedback', 'person_name') missing"}), 400

            # Preprocess feedback
            # df['feedback'] = df['feedback'].str.lower()
            # df['feedback'] = df['feedback'].apply(lambda x: re.sub('[^a-zA-Z0-9\s]', '', x))

            df_global = df

            os.remove(filepath)
            return jsonify({"message": "File uploaded successfully"}), 200

        except Exception as e:
            print(f"Error occurred: {e}")
            return jsonify({"error": "Processing error", "message": str(e)}), 500

    return jsonify({"error": "Invalid file type. Only CSV files are allowed."}), 400


@app.route('/stream', methods=['GET'])
def stream_results():
    global df_global
    if df_global is None:
        return jsonify({"error": "No file processed"}), 400
    
    uniqueclasses=[]

    def generate():
        for index, row in df_global.iterrows():
            inputs = tokenizer(row['feedback'], max_length=512, truncation=True, return_tensors="tf")
            logits = model(**inputs).logits
            predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
            EmployeeCategory = model.config.id2label[predicted_class_id]
            
            if predicted_class_id+1 not in uniqueclasses:
                uniqueclasses.append(predicted_class_id+1)

            result = {
                "classindex": predicted_class_id+1,
                "person_name": row['person_name'],
                "category": EmployeeCategory,
                "feedback": row['feedback'],
                "uniqueclasses": uniqueclasses
                
            }
            yield f"data: {json.dumps(result)}\n\n"


        yield f"data: {json.dumps({'message': 'complete'})}\n\n"

    return Response(generate(), content_type='text/event-stream')




@app.route('/predict',methods=['POST'])    
def predict_employee_category():
    FeedbackOnEmployee=request.json['FeedbackOnEmployee']
    inputs = tokenizer(FeedbackOnEmployee, max_length=512, truncation=True, return_tensors="tf")
    logits = model(**inputs).logits
    predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
    EmployeeCategory=model.config.id2label[predicted_class_id]
    d={}
    d['EmployeeCategory']=EmployeeCategory
    d['EmployeeCategoryIndex']=predicted_class_id+1
    print(d)
    return jsonify(d)


if __name__ == '__main__':
    app.run(debug=True)