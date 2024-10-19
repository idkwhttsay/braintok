from config import API_KEY
from openai import OpenAI
from fileFormatConverter import convert_file
client = OpenAI(api_key=API_KEY)


def main():
    inputFileName = input("enter input file name with extension (supported types: pdf, docx): ")
    outputFileName = input("enter output file name without extension:")
    convert_file(inputFileName, outputFileName)

    with open(f'{outputFileName}.jsonl', 'rb') as file:
        file_response = client.files.create(
            file=file,
            purpose="fine-tune"
        )
        stream = client.chat.completions.create(
            model="gpt-4o",
            messages=[{"role": "user", "content": "Give me an estimation how long this homework will take me"}],
            stream=True,
        )
        for chunk in stream:
            if chunk.choices[0].delta.content is not None:
                print(chunk.choices[0].delta.content, end="")

main()