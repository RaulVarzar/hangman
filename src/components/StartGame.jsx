import { useState } from "react"
import { MoveInOut } from "./Animations"
import { AnimatePresence,motion } from "framer-motion"


export default function StartGame({onStartGame}) {

    const [difficulty, setDifficulty] = useState('')

    function handleRadioChange(e) {
        setDifficulty(e.target.value)
    }

    return(
        
        <motion.div className="flex flex-col p-8">
            <p className="pt-6 text-xl font-bold tracking-wider text-center uppercase text-accent-content">Set your difficulty</p>
            <div className="w-7/12 mx-auto my-3 divider"></div>
            <div className="flex flex-row justify-between px-16 mx-auto mb-8 max-w-fit">
                <div className="mx-4 form-control ">
                    <label className="flex flex-col transition duration-300 cursor-pointer label group ">
                        <span className="text-xl font-semibold transition duration-300 label-text group-hover:scale-105 group-hover:text-stone-600">Beginner</span> 
                        <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-500 group-hover:scale-105">4-6 letters</span>
                        <input 
                            type="radio" 
                            value='beginner' 
                            onChange={handleRadioChange} 
                            checked={difficulty === 'beginner'} 
                            className="mt-2 transition duration-300 group-hover:border-secondary radio checked:bg-secondary"
                        />                   
                    </label>
                </div>
                <div className="mx-4 form-control">
                    <label className="flex flex-col cursor-pointer label group">
                        <span className="text-xl font-semibold transition duration-300 label-text group-hover:text-stone-600 group-hover:scale-105">Intermediate</span> 
                        <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-500 group-hover:scale-105">7-9 letters</span>
                        <input 
                            type="radio" 
                            value='intermediate' 
                            onChange={handleRadioChange} 
                            checked={difficulty === 'intermediate'} 
                            className="mt-2 transition duration-300 group-hover:border-secondary radio checked:bg-secondary"
                        />
                    </label>
                </div>
                <div className="mx-4 form-control ">
                    <label className="flex flex-col cursor-pointer label group">
                        <span className="text-xl font-semibold transition duration-300 label-text group-hover:text-stone-600 group-hover:scale-105">Advanced</span> 
                        <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-500 group-hover:scale-105">10-13 letters</span>
                        <input 
                            type="radio" 
                            value='advanced' 
                            onChange={handleRadioChange} 
                            checked={difficulty === 'advanced'} 
                            className="mt-2 transition duration-300 group-hover:border-secondary radio checked:bg-secondary"
                        />                   
                    </label>
                </div>
            </div>
            <button 
                className={"px-10 mx-auto rounded-full btn btn-ghost btn-outline hover:btn-secondary hover:text-white  " + (!difficulty && ' btn-disabled opacity-50')} 
                onClick={() => onStartGame(difficulty)}>
                    START GAME
            </button>
        </motion.div>
    )
}