"use client"

import arrow from "../../img/arrow.png";
import gradient from "../../img/gradient.png";
import Image from "next/image";

export default function Landing() {
    return (
        <div className="flex-grow flex flex-col">
            <div className="my-auto">
                <div className="text-5xl text-center font-bold">
                    Swipe to start grinding
                </div>
                <Image className="mx-auto mt-10" width={65} alt="arrow" src={arrow} />
            </div>
            <Image className="absolute bottom-0 z-[-999] w-full h-[200px] opacity-60"
                   alt=""
                 width={window.innerWidth}
                 src={gradient}/>
        </div>
    )
}