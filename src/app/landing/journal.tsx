import { motion } from "framer-motion";
import Image from "next/image";
import arrow from "@/img/arrow.png";
import gradient from "@/img/gradient.png";
import { useEffect, useState } from "react";

export function Journal(props: {setIndex: (index: number) => void}) {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setLoaded(true);
    }, []);

    return <motion.div
        onClick={() => loaded && props.setIndex(2)}
        initial={{ y: 500 }}
        transition={{duration: 0.2}}
        animate={{ y: 0 }}
        exit={{y: 500}}
        className="z-[9999] bg-[#030303] absolute h-[100vh] top-0 w-full flex flex-col"
    >
        <div className="text-center text-5xl font-bold mt-[5rem] px-5">Take a break for journaling</div>
        <div className="flex flex-col mx-auto mt-[5rem]">
            <input onMouseDown={event => event.stopPropagation()} className="z-[99999] mx-auto py-2 px-4 bg-[#383838] color-[#7f7f7f] border-2 text-xl border-none rounded-xl"
                   placeholder="Reflect on what you learned..." />
        </div>
        <div className="my-auto">
            <div
                unselectable="on"
                className="select-none text-2xl text-center"
            >
                Swipe to continue
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
            className="absolute bottom-0 z-[-999] w-full h-[200px] opacity-30 pointer-events-none"
            alt=""
            draggable={false}
            unselectable={"on"}
            width={window.innerWidth}
            src={gradient}
        />
    </motion.div>
}