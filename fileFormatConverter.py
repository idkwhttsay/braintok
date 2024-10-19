import pdfplumber
import json
import json
import docx


def convert_file(inputFileName, outputFileName):
    fileType = inputFileName.split('.')[1]
    if fileType == "pdf":
        with pdfplumber.open(f"{inputFileName}") as pdf_file:
            content = []
            for page in pdf_file.pages:
                text = page.extract_text()
                content.append(text)

    elif fileType == "docx":
        with open(f'{inputFileName}', "r") as docx_file:
            doc = docx.Document(docx_file)
            content = []
            for para in doc.paragraphs:
                content.append(para.text)

    with open(f'{outputFileName}.jsonl', "w") as jsonl_file:
        data = json.dumps(content)
        jsonl_file.write(data)
        print(f"PDF content saved to {outputFileName}.jsonl")


# inputFileName = input("enter input file name with extension (supported types: pdf, docx): ")
# outputFileName = input("enter output file name without extension:")
# convert_file(inputFileName, outputFileName)