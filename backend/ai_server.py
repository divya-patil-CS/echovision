from flask import Flask, request, jsonify
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
from gtts import gTTS
import os

app = Flask(__name__)

# LOAD BLIP MODEL
processor = BlipProcessor.from_pretrained(
    "Salesforce/blip-image-captioning-base"
)

model = BlipForConditionalGeneration.from_pretrained(
    "Salesforce/blip-image-captioning-base"
)

UPLOAD_FOLDER = "uploads"

# CREATE AUDIO
def generate_audio(text, language="en"):
    tts = gTTS(text=text, lang=language)

    audio_path = os.path.join(
        UPLOAD_FOLDER,
        "voice.mp3"
    )

    tts.save(audio_path)

    return audio_path


@app.route("/analyze", methods=["POST"])
def analyze_image():

    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded"
        })

    image_file = request.files["image"]

    image_path = os.path.join(
        UPLOAD_FOLDER,
        image_file.filename
    )

    image_file.save(image_path)

    # OPEN IMAGE
    raw_image = Image.open(image_path).convert("RGB")

    # AI PROCESS
    inputs = processor(
        raw_image,
        return_tensors="pt"
    )

    output = model.generate(**inputs)

    caption = processor.decode(
        output[0],
        skip_special_tokens=True
    )

    # LANGUAGE OPTION
    language = request.form.get("language", "en")

    # GENERATE AUDIO
    audio_path = generate_audio(caption, language)

    return jsonify({
        "caption": caption,
        "audio": audio_path,
        "image": image_path
    })


if __name__ == "__main__":
    app.run(port=8000)