import { useState } from "react"
import {motion} from 'framer-motion'

export default function StartGame({onStartGame}) {

    const [difficulty, setDifficulty] = useState('')

    function handleRadioChange(e) {
        setDifficulty(e.target.value)
    }


    return(
        <motion.div>
        <div className="flex flex-col w-auto p-8">
            <p className="pt-6 text-xl font-bold tracking-wider text-center uppercase text-stone-600 ">Set your difficulty</p>
            <div className="w-7/12 mx-auto my-3 divider"></div>
            <div className="flex flex-col justify-between px-8 mx-auto mb-8 md:px-16 md:flex-row max-w-fit">
                <div className=" md:mx-4">
                    <label className="flex flex-row justify-between w-full transition duration-300 cursor-pointer md:gap-0 md:flex-col label group ">
                        <div className={"flex flex-col pr-8 text-left md:pr-0 md:text-center transition duration-300 " + (difficulty!=='beginner' && ' opacity-60')}>
                            <span className="text-xl font-semibold transition duration-300 label-text text-stone-500">Beginner</span> 
                            <span className="text-sm italic transition duration-300 text-stone-500 opacity-80">5-6 letters</span>
                        </div>
                        <input 
                            type="radio" 
                            value='beginner' 
                            onChange={handleRadioChange} 
                            checked={difficulty === 'beginner'} 
                            className="mt-2 transition duration-300 group-hover:border-secondary radio checked:bg-secondary"
                        />                   
                    </label>
                </div>
                <div className="md:mx-4 form-control">
                <label className="flex flex-row justify-between transition duration-300 cursor-pointer md:flex-col label group ">
                        <div className={"flex flex-col pr-8 text-left md:pr-0 md:text-center transition duration-300 " + (difficulty!=='intermediate' && ' opacity-60')}>
                            <span className="text-xl font-semibold transition duration-300 label-text text-stone-500 ">Intermediate</span> 
                            <span className="text-sm italic transition duration-300 text-stone-500 opacity-80">7-9 letters</span>
                        </div>
                        <input 
                            type="radio" 
                            value='intermediate' 
                            onChange={handleRadioChange} 
                            checked={difficulty === 'intermediate'} 
                            className="mt-2 transition duration-300 group-hover:border-secondary radio checked:bg-secondary"
                        />
                    </label>
                </div>
                <div className="md:mx-4 form-control ">
                <label className="flex flex-row transition duration-300 cursor-pointer md:flex-col label group ">
                    <div className={"flex flex-col pr-8 text-left md:text-center md:pr-0 transition duration-300 " + (difficulty!=='advanced' && ' opacity-60')}>
                        <span className="text-xl font-semibold transition duration-300 label-text text-stone-500 group-hover:text-stone-80 ">Advanced</span> 
                        <span className="text-sm italic transition duration-300 text-stone-500 opacity-80">10-13 letters</span>
                    </div>
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
                className={"px-10 mx-auto rounded-xl btn btn-ghost btn-outline hover:btn-secondary hover:text-white opacity-80 " + (!difficulty && ' btn-disabled opacity-30')} 
                onClick={() => onStartGame(difficulty)}>
                    START GAME
            </button>
        </div>
        </motion.div>
    )
}