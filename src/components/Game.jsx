import { useState, useEffect } from 'react'
import Modal from './Modal'
import Keyboard from './Keyboard'
import Figure from './Figure.js'
import { motion } from 'framer-motion'
import { FadeIn } from './Animations.jsx'

export default function Game({word, restartGame}) {
    
    const splitWord = word.split('')

    const noDuplicateLetters = new Set(splitWord);
    
    const [gameStatus, setGameStatus] = useState('')
    const [guessedLetters, setGuessedLetters] = useState([word[0], word[word.length-1]])
    const [ wrongLetters, setWrongLetters] = useState([])

    const attemptsLeft = 8 - wrongLetters.length

    function handleCheckLetter(letter) {
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
            <div className='sm:relative flex md:pt-10 flex-col lg:flex-row md:px-6 lg:min-w-[960px] md:pb-6'>
            <div className='absolute top-0 mb-6 opacity-50 sm:top-6 right-6'>
                            <div className="text-white tooltip tooltip-error tooltip-left" data-tip="RESTART GAME">
                                <button className="px-2 pt-1 border-2 rounded-lg opacity-60 btn-outline btn btn-sm hover:btn-error hover:opacity-100 group" onClick={restartGame}>
                                    <i className="fa-solid group-hover:text-base-200 fa-lg fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    <div className="grid justify-center items-center pt-4 mt-0 md:mt-8 mx-auto overflow-hidden min-w-[300px] lg:pt-0">
                        <FadeIn delay={0.5} duration={1}>
                            <Figure wrongLetters={wrongLetters}/>
                        </FadeIn>
                    </div>

                    <div className="w-full p-0 mx-auto sm:p-6">
                            
                        <div className='relative w-full h-auto mt-1 text-center'>
                            {splitWord.map((letter, index) => {
                                const classes = ["w-auto h-auto md:w-12 md:h-12 mr-1 md:mx-1 text-2xl align-middle uppercase rounded-md badge text-stone-100 "]
                                if (!guessedLetters.includes(letter)) {
                                    classes.push(" bg-base-300 text-sm")
                                } else {
                                    classes.push(" badge-secondary font-bold")
                                }
                                return(
                                    <motion.div 
                                        initial={{opacity:0, y:'50%'}}
                                        animate={{opacity:1, y:0}}
                                        transition={{delay:(index+4)*0.1, duration:0.15}}
                                        key={index} 
                                        className={classes}
                                    >
                                    { guessedLetters.includes(letter) ? letter : '?'}  
                                    </motion.div>                             
                                )
                            })}
                        </div>

                        <FadeIn delay={1} duration={1}>
                            <div className="my-4 divider text-slate-500">{attemptsLeft} attempts left</div>
                            <Keyboard checkLetter={handleCheckLetter} guessedLetters={guessedLetters} wrongLetters={wrongLetters}/>    
                        </FadeIn>
                    </div>
             </div>

            <Modal status={gameStatus} onClose={restartGame} word={word}/>                   

        </>
    )
}