import { motion } from "framer";

export function QuickFact(props: {setIndex: (index: number) => void}) {
    return <motion.div
        initial={{ y: 500 }}
        transition={{ duration: 0.2 }}
        animate={{ y: 0 }}
        exit={{ y: 500 }}
        onMouseDown={() => props.setIndex(3)}
        className="h-[100vh] w-full bg-cyan-500 absolute top-0
        from-[#5ce1e6] to-[rgba(0,0,0,.6)] bg-gradient-to-b from-90%"
    >
        <div className="text-center mt-[10rem] text-5xl font-bold">
            Quick fact!
        </div>

        <div className="text-center mt-[10rem] text-5xl px-5">
            90% of information is forgotten within 7 days
        </div>

    </motion.div>
}