import React from 'react'

const Order = ({ pizza }) => {
    return(
        <div className="container order">
            <h2> Thank You For Your Order </h2>
            <p> YOu Ordered a {pizza.base} pizza with: </p>
            {pizza.toppings.map(topping => <div key={topping}>{topping}</div> )}             
        </div>
    )
}

export default Order;