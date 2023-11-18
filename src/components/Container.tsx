import React from 'react'
import Step from './Step'
import style from '../styles/Container.module.css'
import HeaderContainer from './ContainerComponents/HeaderContainer'

function Container() {
    return (
        <div className={style.main}>
            <HeaderContainer />

            {/* Description */}
            <p className={style.description}>仮想通貨の損益計算には過去すべての取引履歴が必要になります。</p>

            {/* Steps - Reusable */}
            <Step />
        </div>
    )
}

export default Container