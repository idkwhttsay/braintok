"use client";

import arrow from "../../img/arrow.png";
import gradient from "../../img/gradient.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Time } from "@/app/landing/time";
import { motion } from "framer";
import {useAnimate} from "framer-motion";

const slides = [<Time/>];
export default function Landing() {
    const [clicked1, setClicked1] = useState(false);
    const [scope, animate] = useAnimate();
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if(!clicked1)
            return;
        animate(scope.current, {y:"100vh"});
        setAnimated(true);
    }, [animate, scope, clicked1]);

    return clicked1 && animated ? (
        <Time
        />
    ) : (
        <motion.div
            initial={{y: 0}}
            ref={scope}
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
