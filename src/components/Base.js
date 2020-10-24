import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Base = ({ addBase, pizza }) =>{
    const bases = ['Classic', 'Thin & Crispy', 'Thick Crust', 'Cheese Burst Crust' ];

    return(
        <motion.div className = "base container"
            initial= {{x: '100vw'}}
            animate= {{x: 0}}
            transition = {{type:"spring", delay: 0.5}}
        >
            <h3>
                Step 1: Choose Your Base
            </h3>
            <ul>
                {bases.map(base => {
                    let spanClass = pizza.base === base ? 'active' : '';
                    return(
                        <li key = {base} onClick={()=>addBase(base)}>
                            <span className={spanClass}>{ base }</span>
                        </li>
                    )
                })}
            </ul>

            {pizza.base && (
                <div className = "next">
                    <Link to ="/toppings">
                        <motion.button
                            initial={{ x:"-100vw"}}
                            animate={{ x: 0}}
                            transition={{type:'spring', stiffness: 120}}
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