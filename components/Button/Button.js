import React from 'react'
import { motion } from "framer-motion"

function Button({text,style,textColor}) {
    return (
        
        <div className="btn-center">
           <motion.a
            className="btn" style={style} textColor={textColor}
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}>
                {text}
            </motion.a>
        </div>
    )
}

export default Button
