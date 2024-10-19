"use client";

import arrow from "../../img/arrow.png";
import gradient from "../../img/gradient.png";
import Image from "next/image";
import { useState } from "react";
import { Time } from "@/app/landing/time";

export default function Landing() {
    const [clicked1, setClicked1] = useState(false);

    return clicked1 ? (
        <Time />
    ) : (
        <div
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
        </div>
    );
}
