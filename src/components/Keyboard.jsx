import { useState } from "react"

export default function Keyboard({ checkLetter, guessedLetters, wrongLetters }) {
    const letters = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ]

    const [selectedLetter, setSelectedLetter] = useState('')

    function handleSelect(letter) {
        if(selectedLetter !== letter){
            setSelectedLetter(letter)
        } else if (selectedLetter === letter){
            setSelectedLetter('')
        }
    }
    
    function submitLetter(letter){
        checkLetter(letter);
        setSelectedLetter('')
    }

    function setClasses(i){
        const classes = ["transition duration-[200ms] cursor-pointer rounded-lg hover:scale-125 hover:bg-opacity-100 kbd mx-0.5 "]
        if (selectedLetter===i) {
            classes.push(" bg-secondary")
        } else if (guessedLetters.includes(i)){
            classes.push(" opacity-20 text-white cursor-not-allowed btn-disabled bg-success")
        } else if(wrongLetters.includes(i)){
            classes.push(" opacity-20 text-white cursor-not-allowed btn-disabled bg-error")
        }
        else {
            classes.push(' hover:bg-base-100')
        }
        return classes;
    }

    return (
        <div className="flex flex-col items-center mx-auto my-1 mt-12 scale-90 -translate-x-2 sm:translate-x-0 md:scale-105 lg:scale-125 text-stone-600">
            <div className="flex justify-center gap-0 my-0 uppercase md:gap-1 md:my-1">
                {letters[0].map((i, index) => {
                    return (
                        <kbd 
                            key={index}
                            className={setClasses(i)} 
                            onClick={() => handleSelect(i)}
                        >
                            {i}
                        </kbd>
                    )
               })}
            </div> 
            <div className="flex justify-center w-full gap-1 my-1 uppercase">
                {letters[1].map((i, index) => 
                    <kbd 
                        key={index}
                        className={setClasses(i)}
                        onClick={() => handleSelect(i)}
                    >
                        {i}
                    </kbd>
                )}
            </div> 
            <div className="flex justify-center w-full gap-1 my-1 uppercase">
                {letters[2].map((i, index) => 
                    <kbd 
                        key={index}
                        className={setClasses(i)}
                        onClick={() => handleSelect(i)}
                    >
                        {i}
                    </kbd>
                )}
            </div>
            <button
                className={"mx-auto mt-4 uppercase px-4 transition duration-300 rounded-lg btn btn-secondary hover:scale-103 shadow-md text-stone-100 tracking-wider btn-sm " + (!selectedLetter && " btn-disabled opacity-40")}
                type="button"
                onClick={() => submitLetter(selectedLetter)}
            >
                Confirm
            </button>
        </div>
    )
}