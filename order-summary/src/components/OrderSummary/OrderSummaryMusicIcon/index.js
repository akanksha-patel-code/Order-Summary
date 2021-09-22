import React from 'react'
import icon from '../../../styles/images/icon-music.svg'

export const OrderSummaryMusicIcon = (props) => {
    return (
        <img id="OrderSummaryMusicIcon" src={icon} alt="icon">
            {props.children}
        </img>
    )
}
