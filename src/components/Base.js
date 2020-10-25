import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const buttonVariants = {
    hover:{
        scale:1.1,
        transition: {
            duration:0.3,
            yoyo: Infinity
        },
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
    }
}


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
            delay: 0.5
        }
    }
}

const nextVariants = {
    hidden: {
        x:"-100vw"
    },
    visible:{
        x: 0,
        transition: {type:'spring', stiffness: 120}
    }
}

const Base = ({ addBase, pizza }) =>{
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust', 'Cheese Burst Crust' ];

    return(
        <motion.div className = "base container"
            variants={containerVariants}
            initial= "hidden"
            animate= "visible"
            // transition = {{type:"spring", delay: 0.5}}
        >
            <h3>
                Step 1: Choose Your Base
            </h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return(
                        <motion.li key = {base} onClick={()=>addBase(base)}
                            whileHover={{scale:1.3, color:"#f8e112", originX:0}}
                            transition={{type:'spring', stiffness: 300}}
                        >
                            <span className={spanClass}>{ base }</span>
                        </motion.li>
                    )
                })}
            </ul>

            {pizza.base && (
                <div className = "next"
                    variants={nextVariants}
                >
                    <Link to ="/toppings">
                        <motion.button
                            variants = {buttonVariants}
                            whileHover= "hover"
                        >
                            Next
                        </motion.button>
                    </Link>
                </div>
            )}
        </motion.div>
    ) 
}

export default Base;