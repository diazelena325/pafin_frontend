import React from 'react'
import Menu from './Menu'
import style from '../styles/QuickAccess.module.css'
import { Constants } from '../constants/AssistantFeatureConstants'

function QuickAccess() {
    return (
        <div className={style.main}>
            {/* Title */}
            <h3 className={style.heading}>{Constants.quickAccessTitle}</h3>
            {/* Menu */}
            <Menu />
        </div>
    )
}

export default QuickAccess