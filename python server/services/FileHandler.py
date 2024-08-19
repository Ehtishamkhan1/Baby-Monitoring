import shutil

class FileHandler:
    def __init__(self):
        pass

    def handleUpload(self, file):
        file_location = f"files/{file.filename}"
    
        with open(file_location, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return file