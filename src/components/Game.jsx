import { useState } from 'react'
import { MoveInOut } from './Animations'
import image from '../images/hang.png'
import Keyboard from './Keyboard'

export default function Game({word, difficulty, restartGame}) {
    const splitWord = word.split('')
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

    return(
            <div className='relative flex px-6 py-8 min-w-[1000px]'>
                    <div className="w-2/6 m-0 overflow-hidden ">
                            <img
                                src={image}
                                alt="hangman"
                                className="object-cover w-full h-full"
                            />
                    </div>

                        <div className="p-6 mx-auto">
                            <div className='absolute mb-6 top-4 right-6'>
                                <h6 className='text-sm text-right text-slate-400'>DIFFICULTY</h6>
                                <h6 className="mb-4 font-sans text-lg font-semibold leading-none uppercase text-slate-500">
                                    {difficulty}
                                </h6>
                            </div>
                            
                            <div className='relative h-16 mt-16 text-center '>
                                {splitWord.map((letter, index) => {
                                    const classes = ["w-12 h-12 mx-1 text-2xl uppercase rounded-md badge text-stone-100 "]
                                    if (!guessedLetters.includes(letter)) {
                                        classes.push(" bg-base-300")
                                    } else {
                                        classes.push(" badge-secondary")
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
                    {/* <button className="mt-4 btn hover:btn-error" onClick={restartGame}>RESTART</button> */}
            </div>
    )
}