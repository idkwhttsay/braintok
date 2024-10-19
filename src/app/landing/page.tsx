"use client";

import arrow from "../../img/arrow.png";
import gradient from "../../img/gradient.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Time } from "@/app/landing/time";
import { motion } from "framer";
import { Journal } from "@/app/landing/journal";
import { QuickFact } from "@/app/landing/quick_fact";

export default function Landing() {
    const [clicked1, setClicked1] = useState(false);
    const [index, setIndex] = useState(0);
    const slides = [<Time setIndex={setIndex} key="1" seconds={8}/>,
        <Journal setIndex={setIndex} key="2"/>,
    <QuickFact key="3"/>];

    return clicked1 ? (
        slides[index]
    ) : (
        <motion.div
            initial={{y: 0}}
            exit={{y:"100vh"}}
            onMouseDown={() => setClicked1(true)}
            className="flex-grow flex flex-col"
        >
            <div className="my-auto">
                <div
                    unselectable="on"
                    className="select-none text-5xl text-center font-bold"
                >
                    Swipe to start grinding
                </div>
                <Image
                    draggable={false}
                    unselectable={"on"}
                    className="mx-auto mt-10"
                    width={65}
                    alt="arrow"
                    src={arrow}
                />
            </div>
            <Image
                className="absolute bottom-0 z-[-999] w-full h-[200px] opacity-60 pointer-events-none"
                alt=""
                draggable={false}
                unselectable={"on"}
                width={window.innerWidth}
                src={gradient}
            />
        </motion.div>
    );
}
