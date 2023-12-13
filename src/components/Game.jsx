import { useState, useEffect } from 'react'
import Modal from './Modal'
import image from '../images/hang.png'
import Keyboard from './Keyboard'
import Figure from './Figure.js'

export default function Game({word, restartGame}) {
    
    const splitWord = word.split('')

    const noDuplicateLetters = new Set(splitWord);
    
    const [gameStatus, setGameStatus] = useState('')
    const [guessedLetters, setGuessedLetters] = useState([word[0], word[word.length-1]])
    const [ wrongLetters, setWrongLetters] = useState([])

    const attemptsLeft = 8 - wrongLetters.length

    function checkLetter(letter) {
        if (splitWord.includes(letter)){
            setGuessedLetters((prevGuessedLetters) => [letter, ...prevGuessedLetters])
        }
        else {
            setWrongLetters((prevWrongLetters) => [letter, ...prevWrongLetters])
            if (attemptsLeft === 1) {
                setGameStatus('lost')
            }
        }
    }

    useEffect(() => {
        if (guessedLetters.length === noDuplicateLetters.size){
            setGameStatus('won')
        }
    }, [guessedLetters,noDuplicateLetters.size]);

    

    return(
        <>
            <div className='sm:relative flex flex-col lg:flex-row md:px-6 lg:min-w-[960px] md:pb-6'>
                    <div className="grid justify-center items-center pt-4 mt-8 mx-auto overflow-hidden min-w-[300px] lg:pt-0">
                            <Figure wrongLetters={wrongLetters.length}/>
                    </div>

                        <div className="w-full p-0 mx-auto sm:p-6">

                            <div className='absolute mb-6 opacity-50 top-4 right-4'>
                                <div className="tooltip tooltip-left" data-tip="RESTART GAME">
                                    <button className="p-2 border-2 opacity-60 btn-outline btn btn-sm hover:btn-error group" onClick={restartGame}>
                                        <i className="fa-solid group-hover:text-base-200 fa-lg fa-xmark"></i>
                                    </button>
                                </div>
                            </div>
                            
                            <div className='relative h-16 mt-16 text-center '>
                                {splitWord.map((letter, index) => {
                                    const classes = ["w-10 h-10 md:w-12 md:h-12 ml-1 md:mx-1 text-2xl  uppercase rounded-md badge text-stone-100 "]
                                    if (!guessedLetters.includes(letter)) {
                                        classes.push(" bg-base-300 ")
                                    } else {
                                        classes.push(" badge-secondary font-bold")
                                    }
                                    return(
                                    <div 
                                        key={index} 
                                        className={classes}
                                    >
                                        {guessedLetters.includes(letter) ? letter : '?'}
                                    </div>  )
                                    })}
                            </div>
                            <div className="my-4 divider text-slate-500">{attemptsLeft} attempts left</div>
                            <Keyboard 
                                checkLetter={checkLetter} 
                                guessedLetters={guessedLetters} 
                                wrongLetters={wrongLetters}
                            />    
                        </div>
            </div>

            <Modal status={gameStatus} onClose={restartGame} word={word}/>                   

        </>
    )
}