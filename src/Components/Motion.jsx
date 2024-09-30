import React from 'react'
import { motion } from "framer-motion"; 


const Motion = ({children}) => {
  return (
    <div>
         <motion.div
      initial={{ opacity: 0, translateY: -20 }} 
      animate={{ opacity: 1, translateY: 0 }} 
      transition={{ duration: 1.0 }} 
    >
        {children}
    </motion.div>
    </div>
  )
}

export default Motion