import React from 'react'
import Menu from './Menu'
import style from '../styles/QuickAccess.module.css'

function QuickAccess() {
    return (
        <div className={style.main}>
            {/* Title */}
            <span className={style.heading}>クイックアクセス</span>
            {/* Menu */}
            <Menu />
        </div>
    )
}

export default QuickAccess