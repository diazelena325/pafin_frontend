import React from 'react'
import style from '../styles/MenuItem.module.css'
import { IQuickAccess } from '../interfaces/interfaces'

const MenuItem = (props: { dt: IQuickAccess }) => {
    return (
        <div className={style.main}>
            {/* Title */}
            <span className={style.heading}>{props.dt.heading}</span>
            {/* Description */}
            <span className={style.description}>{props.dt.description}</span>
        </div>
    )
}

export default MenuItem