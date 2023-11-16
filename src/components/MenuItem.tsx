import React from 'react'
import style from '../styles/MenuItem.module.css'
function MenuItem() {
    return (
        <div className={style.main}>
            {/* Title */}
            <span className={style.heading}>年度初めの残高入力</span>
            {/* Description */}
            <span className={style.description}>過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。</span>
        </div>
    )
}

export default MenuItem