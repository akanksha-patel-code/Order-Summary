import React from 'react'

export const OrderSummaryCancelButton = (props) => {
    return (
        <button id = "OrderSummaryCancelButton">
            {props.children}
            Cancel Order
        </button>
    )
}
