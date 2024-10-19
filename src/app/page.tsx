import {Raleway} from "next/font/google";
import {TokenForm} from "@/app/components/token_form";
import { redirect } from 'next/navigation';

const raleway = Raleway({subsets: ["latin"]});

export interface Message {
    message: string;
}

export default async function Home() {
    async function call(_prevState: Message, data: FormData): Promise<Message> {
        "use server"
        console.log(data.get("canvas"));
        const error = {
            message: ""
        };
        if(!error.message)
            redirect("/landing");

        return error;
    }

  return (
    <main className={raleway.className + " flex flex-col w-full h-[100vh]"}>
        <div className="flex flex-col mx-auto flex-grow justify-center">
            <TokenForm call={call}/>
        </div>
    </main>
  );
}
