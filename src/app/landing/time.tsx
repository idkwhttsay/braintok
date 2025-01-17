"use client"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer';
import { useEffect, useState } from "react";
// import CanvasClass from "@/api/canvas.class";
// import getSubtask from "@/api/openAI/openAI-API";
// import CanvasClass from "@/api/canvas.class";
// import getSubtask from "../../api/openAI/openAI-API";
const questions = [
    "What topics are covered in day 4 nested quantifiers?",
    "What key concepts are covered in the introduction to proofs material?",
    "What are the main topics covered in day1 propositional logic?",
    "What are the concepts covered in the day 2: puzzles and propositions?",
    "What concepts are covered in day-3-predicates-and-quantifiers?",
    "What key concepts are covered in introduction to proofs?"
];
const randomIndex = Math.trunc(Math.random() * questions.length);

export function Time(props: {seconds: number, setIndex: (index: number) => void}) {
    const [expectedDate] = useState(Date.now()/1000+props.seconds);
    const [secondsLeft, setSecondsLeft] = useState(props.seconds);
    // const [subtask, setSubtask] = useState<string | null>("");
    const percentage = secondsLeft / props.seconds * 100;

    // async function hello() {
    //     "use server"
    //     const canvas = new CanvasClass("2096~VBaXaAvP39aGWhVV2xuUnTzn8wxATf98PZz7rmWQFf278B4V3a2nCW7fJkDDxURh");
    //     const files = await canvas.getAllFiles();
    //     const result: string | null = await getSubtask(files);
    //     setSubtask(result);
    //     console.log(subtask);
    // }
    // hello();

    useEffect(() => {
        decreaseClock();
    }, []);

    function decreaseClock() {
        if(secondsLeft <= 0)
            return;
        setTimeout(() => {
            setSecondsLeft(Math.max(Math.round(expectedDate - Date.now()/1000),0));
            decreaseClock();
        }, 1000);
    }

    return <motion.div onMouseDown={() => props.setIndex(1)}
        initial={{y: 500}}
        animate={{y: 0}}
        exit={{y: 500}}
        className="absolute top-0 flex flex-col bg-[#ff5757] h-full w-full items-center justify-center
        from-[#ff5757] to-[rgba(56,56,56,.6)] bg-gradient-to-b from-90%">
        <h1 className="text-2xl text-center absolute top-[15%] font-bold">
            {questions[randomIndex]}
        </h1>
        <h1 className="absolute text-9xl font-bold" style={{textShadow: "5px 5px 5px 5px black"}}>
            {
                secondsLeft
            }
        </h1>
        <div className="flex w-[300px] h-[300px]">
            <CircularProgressbar
                background={false}
                styles={buildStyles({
                    pathColor: "white",
                    trailColor: "#ff5757",
                    strokeLinecap: "butt"
                })} value={percentage} />
        </div>
    </motion.div>
}