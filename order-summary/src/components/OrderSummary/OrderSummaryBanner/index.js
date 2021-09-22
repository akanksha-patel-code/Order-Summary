import React from 'react'
import icon from '../../../styles/images/illustration-hero.svg'

export const OrderSummaryBanner = (props) => {
    return (
        <img id = "OrderSummaryBanner" src= {icon} alt="music">
            {props.children}
        </img>
    )
}
