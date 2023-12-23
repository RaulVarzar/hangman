import { useState, useEffect } from "react";
import { filterByDifficulty } from "./utils/filterWords.js";

import StartGame from "./components/StartGame.jsx";
import Game from "./components/Game.jsx";
import Header from './components/Header.jsx'
import Layout from "./components/Layout.jsx";

import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, FadeInOut} from "./components/Animations.jsx"


function App() {
  const [word, setWord] = useState('')
  const [difficulty, setDifficulty] = useState('')
  // const [isdark, setIsdark] = useState(
  //   JSON.parse(localStorage.getItem('isdark'))
  // );
  
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
              <FadeInOut key={word} delay={0.4} duration={0.5}>
                  <Header/>
              </FadeInOut>
           }
          <motion.div 
            layout 
            className="pb-4 mx-auto overflow-hidden h-fit sm:shadow-md rounded-xl sm:bg-base-200 md:my-8 md:mb-8"
            >
                  {!word ?
                        <motion.div
                          key={word}
                          initial={{ opacity: 0, y:'-100%' }}
                          animate={{ opacity: 1, y:0 }}
                          exit={{ opacity: 0, y:'-100%'}}
                          transition={{ delay: 0, duration:0.3 }}
                        >
                            <StartGame onStartGame={handleStartGame}/>
                        </motion.div>
                        :  
                          <motion.div
                          key={word}
                          initial={{ opacity: 0, y:'100%'}}
                          animate={{ opacity: 1, y:0}}
                          exit={{ opacity: 0, y:"100%"}}
                          transition={{ delay: 0, duration:0.3 }}
                        >
                          <Game difficulty={difficulty} word={word} restartGame={handleRestartGame}/>
                      </motion.div>
                      }
            </motion.div> 
      </Layout>
  );
}

export default App;
