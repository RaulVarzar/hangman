import {motion} from 'framer-motion'

const Figure = ({ wrongLetters }) => {
  const errors = wrongLetters

  return (
    <svg height="240" width="280" className="ml-16 sm:scale-125 figure-container">
      {/* <!-- Base --> */}
      <line x1="60" y1="30" x2="140" y2="30" />
      <line x1="60" y1="30" x2="60" y2="200" />
      <line x1="30" y1="200" x2="90" y2="200" />

      {/* <!-- Rope --> */}
      {errors > 0 &&
          <motion.line 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.6, delay:0.2}}
            x1="140" y1="30" x2="140" y2="50" 
          />
      }

      {/* <!-- Head --> */}
      {errors > 1 &&
        <motion.circle
          initial={{opacity:0}}
          animate={{opacity:1}}
          cx="140" cy="70" r="20" 
        />
      }

      {/* <!-- Body --> */}
      {errors > 2 &&
        <motion.line 
        initial={{opacity:0}}
        animate={{opacity:1}}
          transition={{duration:0.6, delay:0.2}} 
          x1="140" y1="90" x2="140" y2="150" 
        />
      }

      {/* <!-- Arms --> */}
      {errors > 3 &&
        <motion.line 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6, delay:0.2}}  
          x1="140" y1="120" x2="120" y2="100" 
        />
      }

      {errors > 4 &&
        <motion.line 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6, delay:0.2}}
          x1="140" y1="120" x2="160" y2="100" 
        />
      }

      {/* <!-- Legs --> */}
      {errors > 5 &&
        <motion.line 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6, delay:0.2}} 
          x1="140" y1="150" x2="120" y2="180" 
        />
      }
      {errors > 6 &&
        <motion.line 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.6, delay:0.2}}
          x1="140" y1="150" x2="160" y2="180"
         />
      }

      {/* <!-- Face --> */}
      {errors > 7 &&
        <>
          <motion.line
            initial={{opacity:0}}
            animate={{opacity:1}} 
            transition={{duration:0.2, delay:0}}
            x1="133" y1="77" x2="147" y2="65" 
          />
           <motion.line
              initial={{opacity:0}}
              animate={{opacity:1}} 
              transition={{duration:0.2, delay:0}}
              y1="65" x1="133" y2="77" x2="147" 
            />
        </>
      }
    </svg>
  )
}

export default Figure
