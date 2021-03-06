import React, { useEffect } from 'react'
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
    },
    exit:{
        x: '-100vh',
        transition:{
            ease: 'easeInOut'
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


const Order = ({ pizza, setShowModal }) => {

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        },5000)
    },[setShowModal])

    return(
        <motion.div className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {/* whwnevr we use AnimatePresence We have to exit out from the component */}
            {/* we are here removing the title Thank You after 4 secs so we are removing the h2 to y=-1000 */}
            {/* <AnimatePresence> 
                {show && (
                    <motion.h2
                        exit={{ y: -1000 }}
                    > Thank You For Your Order </motion.h2>
                )}
            </AnimatePresence> */}
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