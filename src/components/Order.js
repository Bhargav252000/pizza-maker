import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {
        x: '100vw',
        opacity: 0
    },
    visible: {
        opacity:1,
        x:0,
        transition:{
            type:"spring",
            mass: 0.6,
            damping: 8,
            when: "beforeChildren",
            staggerChildren: 0.4 //time taken for children to appear
        }
    }
}
const childrenVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity:1
    }
}


const Order = ({ pizza }) => {
    return(
        <motion.div className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2> Thank You For Your Order </h2>
            <motion.p 
                variants={childrenVariants}
            > You Ordered a {pizza.base} pizza with: </motion.p>
            <motion.div
                variants={childrenVariants}
            >
              {pizza.toppings.map(topping => <div key={topping}>{topping}</div> )}             
            </motion.div>
        </motion.div>
    )
}

export default Order;