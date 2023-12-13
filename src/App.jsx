import { useState } from "react";
import { words } from './words.js'
import StartGame from "./components/StartGame.jsx";
import Game from "./components/Game.jsx";
import Header from './components/Header.jsx'
import { motion, AnimatePresence } from "framer-motion";
import Layout from "./components/Layout.jsx";
import {FadeIn, MoveInOut, FadeInOut, JumpIn} from "./components/Animations.jsx"

function App() {
  const [word, setWord] = useState('')
  const [difficulty, setDifficulty] = useState('')
  
  // filtering the input array based on the selected difficulty
  function filterArray(difficulty) {
    switch(difficulty) {
      case 'beginner':
        return words.filter((word) => word.length > 3 && word.length < 7);
      case 'intermediate':
        return words.filter((word) => word.length > 6 && word.length < 10);
      case 'advanced':
        return words.filter((word) => word.length > 9 && word.length < 14);
      default:
        return '';
    }
  }

  function handleStartGame(difficulty){
    const filteredWords = filterArray(difficulty)
    const i = Math.floor((Math.random() * (filteredWords.length)))
    setWord(filteredWords[i])
    setDifficulty(difficulty)
  }

  function handleRestartGame(){
    setWord('')
  }

  return (
    <Layout>
      {/* <AnimatePresence mode="wait"> */}
              {!word && 
                  <FadeInOut delay={0} duration={0.3}>
                      <Header/>
                  </FadeInOut>
              }
      {/* </AnimatePresence> */}
      
              <motion.div 
                layout
                transition={{layout:{duration:10}}}
                className="z-10 mx-auto overflow-hidden text-center rounded-xl bg-base-200 md:my-8 md:mb-8 lg:w-fit"
                >
                   <AnimatePresence mode="wait">
                      {!word ?
                       <motion.div 
                        key={word} 
                        initial={{ x: '100%'}}
                        animate={{ x:0, transition:{ duration:0.4, delay:0.2}}}
                        exit={{x: '-100%', transition:{duration:0.5}}}
                        >
                          <StartGame onStartGame={handleStartGame}/>
                          </motion.div>
                            :   
                            <motion.div 
                            key={word} 
                            initial={{ x: '100%'}}
                            animate={{ x:0, transition:{ duration:0.4, delay:0}}}
                            exit={{x: '-100%', transition:{duration:0.5}}}
                            > 
                          <Game difficulty={difficulty} word={word} restartGame={handleRestartGame}/>
                          </motion.div>
                        }</AnimatePresence>
                </motion.div>
      </Layout>
      
  );
}

export default App;
