"use client"
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { motion } from 'framer';
// import { useState } from "react";

export function Time() {
    // const [secondsLeft, _setSecondsLeft] = useState(100);
    const percentage = 66;

    return <motion.div
        initial={{y: 500}}
        animate={{y: 0}}
        className="absolute top-0 z-[-999] flex flex-col bg-[#ff5757] h-full w-full items-center justify-center">
        <h1 className="absolute text-9xl font-bold drop-shadow-md shadow-black">
            {
                Math.trunc(100 / 60)
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