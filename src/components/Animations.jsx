import { motion, AnimatePresence } from "framer-motion"

export  function JumpIn({ children, duration, delay }){
    return(
        <motion.div
            initial={{  scale: 0.2, translateY:35, opacity:0 }}
            animate={{  scale: 1, translateY:0, opacity:1 }}
            transition={{type:'spring', duration: duration, delay:delay }}
            
        >
            {children}
        </motion.div>
    )
}

export  function FadeIn({ children, duration, delay }){
    return(
        <motion.div
            initial={{ opacity:0 }}
            animate={{  opacity:1 }}
            transition={{ duration: duration, delay:delay }}
        >
            {children}
        </motion.div>
    )
}

export  function FadeInOut({ children, duration, delay }){
    return(
        <motion.div
            initial={{ opacity:0 }}
            animate={{  opacity:1 }}
            transition={{ duration: duration, delay:delay }}
            exit={{ 
                opacity: 0,
                transition:{
                    duration:duration, 
                    delay:delay
                } 
            }}
        >
            {children}
        </motion.div>
    )
}

export  function MoveInOut({ children, duration, delay }){
    return(
    <AnimatePresence mode="wait" >
        <motion.div
            initial={{ x: "100%", opacity:0 }}
            animate={{  x: 0, opacity: 1 }}
            transition={{ duration: duration, delay:delay }}
            exit={{ 
                x: '100%',
                opacity: 0,
                transition:{delay:1, duration:1}
            }}
        >
            {children}
        </motion.div>
    </AnimatePresence>
    )
}

export  function FromTop({ children, duration, delay }){
    return(
        <motion.div
            initial={{ y: '-100%', opacity:0, scaleY:0 }}
            animate={{  y:0, opacity:1, scaleY:1 }}
            transition={{ duration: duration, delay:delay }}
        >
            {children}
        </motion.div>
    )
}

export  function FadeOut({ children, duration, delay }){
    return(
        <motion.div 
            exit={{ 
                opacity: 0,
                transition:{
                    duration:duration, 
                    delay:delay
                } 
            }}
        >
            {children}
        </motion.div>
    )
}

export  function ShrinkIn({ children, duration, delay }){
    return(
        <motion.div 
            initial={{scaleY:0}}
            animate={{scaleY:1}}
            transition={{duration:0.5, delay:0.1}}
            exit={{ 
                opacity: 0,
                scale:0, 
                transition:{
                    duration:duration, 
                    delay:delay
                } 
            }}
        >
            {children}
        </motion.div>
    )
}

