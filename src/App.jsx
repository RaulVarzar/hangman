import { useState } from "react";
import { filterByDifficulty } from "./utils/filterWords.js";

import StartGame from "./components/StartGame.jsx";
import Game from "./components/Game.jsx";
import Header from './components/Header.jsx'
import Layout from "./components/Layout.jsx";

import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, FadeInOut} from "./components/Animations.jsx"


function App() {
  console.log("APP RERENDERED")
  const [word, setWord] = useState('')
  const [difficulty, setDifficulty] = useState('')
  
  function handleStartGame(difficulty){
    const filteredWords = filterByDifficulty(difficulty)
    const i = Math.floor((Math.random() * (filteredWords.length)))
    setWord(filteredWords[i])
    setDifficulty(difficulty)
  }

  function handleRestartGame(){
    setWord('')
  }


  return (
    <Layout>
          {!word && 
              <FadeInOut delay={0} duration={0.3}>
                  <Header/>
               </FadeInOut>
           }
      
          <motion.div 
            layout 
            className="pb-4 mx-auto text-center w-12/12 sm:shadow-md rounded-xl sm:bg-base-200 md:my-8 md:mb-8"
            >
                  {!word ?
                    <AnimatePresence mode="wait">
                        <motion.div
                        key={word}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0, x:100}}
                          transition={{ delay: 0.3, duration:0.3 }}
                        >
                            <StartGame onStartGame={handleStartGame}/>
                        </motion.div>
                    </AnimatePresence>
                        :   
                        <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, x:100}}
                        transition={{ delay: 0.2, duration:1 }}
                      >
                        <Game difficulty={difficulty} word={word} restartGame={handleRestartGame}/>
                    </motion.div>
                      }
            </motion.div> 
      </Layout>
  );
}

export default App;
