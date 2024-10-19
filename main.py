
from config import API_KEY
from openai import OpenAI
from fileFormatConverter import convert_file
import requests

def load_homeworks(urls):
    for url in urls:    # Send a GET request to the URL
        with requests.get(url, stream=True) as response:
            response.raise_for_status()  # Raise an error for bad responses
            # Open a local file with write-binary mode
            with open(f'file_{urls.index(url)}', 'wb') as f:
                # Write the content of the response to the file in chunks
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            return f

# Example usage


def create_subtasks_for_homework():
    #inputFileName = input("enter input file name with extension (supported types: pdf, docx): ")
    #  outputFileName = input("enter output file name without extension:")

    inputFileName = "HW07.pdf"
    outputFileName = "demo"
    convert_file(inputFileName, outputFileName)
    client = OpenAI(api_key=API_KEY)

    with open(f'{outputFileName}.jsonl', 'r') as file:
        # file_response = client.files.create(
        #     file=file,
        #     purpose="fine-tune"
        # )
        # fine_tuned_model = client.fine_tuning.jobs.create(
        #     training_file=file_response.id,
        #     model="gpt-4o-mini-2024-07-18"
        # )
        homework = file.read()
        stream = client.chat.completions.create(
            model="gpt-4o-mini-2024-07-18",
            messages=[{"role": "user", "content": f"""
            This is my homework: {homework}
            If this homework consists of several separate problems, split them.
            For each problem give me problem number, problem name, and problem text"""}],
            stream=True,
        )
        for chunk in stream:
            if chunk.choices[0].delta.content is not None:
                print(chunk.choices[0].delta.content, end="")

main()