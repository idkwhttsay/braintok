import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env);

const openAIClient = new OpenAI({
    apiKey: "OPENAI_API_KEY",
});

const systemPrompt =
    "You will be given a list of links. Each link contains JSON file. In each JSON file there a 'url' field that contains a class/course material from university. Your task is to return a one short sentence question about any of these materials.";

export default async function getSubtask(files: string[]) {
    const chatCompletion = await openAIClient.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: systemPrompt },
            {
                role: "user",
                content: `${files.toString()}`,
            },
        ],
    });

    return chatCompletion.choices[0].message.content;
}
