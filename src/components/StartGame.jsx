import { useState } from "react"

export default function StartGame({onStartGame}) {

    const [difficulty, setDifficulty] = useState('')

    function handleRadioChange(e) {
        setDifficulty(e.target.value)
    }


    return(
        
        <div className="flex flex-col w-auto p-8">
            <p className="pt-6 text-xl font-bold tracking-wider text-center uppercase opacity-70 text-accent-content">Set your difficulty</p>
            <div className="w-7/12 mx-auto my-3 divider"></div>
            <div className="flex flex-col justify-between px-8 mx-auto mb-8 md:px-16 md:flex-row max-w-fit">
                <div className=" md:mx-4">
                    <label className="flex flex-row justify-between w-full transition duration-300 cursor-pointer md:gap-0 md:flex-col label group ">
                        <div className="flex flex-col pr-8 text-left md:pr-0 md:text-center">
                            <span className="text-xl font-semibold transition duration-300 label-text group-hover:scale-105 text-stone-700 group-hover:text-stone-800">Beginner</span> 
                            <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-700 group-hover:scale-105">4-6 letters</span>
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
                        <div className="flex flex-col pr-8 text-left md:pr-0 md:text-center">
                            <span className="text-xl font-semibold transition duration-300 label-text text-stone-700 group-hover:text-stone-800 group-hover:scale-105">Intermediate</span> 
                            <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-700 group-hover:scale-105">7-9 letters</span>
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
                    <div className="flex flex-col pr-8 text-left md:text-center md:pr-0">
                        <span className="text-xl font-semibold transition duration-300 label-text text-stone-700 group-hover:text-stone-80 group-hover:scale-105">Advanced</span> 
                        <span className="text-sm italic transition duration-300 text-stone-500 group-hover:text-stone-700 group-hover:scale-105">10-13 letters</span>
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
    )
}