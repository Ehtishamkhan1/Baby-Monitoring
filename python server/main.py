from fastapi import FastAPI, File, UploadFile
from services.AIService import AIService
from services.FileHandler import FileHandler
import shutil


app = FastAPI()
ai_service = AIService()
file_handler = FileHandler()




@app.post("/")
async def upload_audio(file: UploadFile = File(...)):
    savedFile = file_handler.handleUpload(file)
    result = ai_service.analyze_audio("files/" + savedFile.filename)
    return {"filename": savedFile.filename, "message": "Audio file saved successfully", "result" : result}


@app.get("/")
async def root():
    ai_service.hello()
    return {"message": "Hello World"}