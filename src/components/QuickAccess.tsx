import React from 'react'
import Menu from './Menu'
import style from '../styles/QuickAccess.module.css'

function QuickAccess() {
    return (
        <div className={style.main}>
            {/* Title */}
            <h3 className={style.heading}>クイックアクセス</h3>
            {/* Menu */}
            <Menu />
        </div>
    )
}

export default QuickAccess