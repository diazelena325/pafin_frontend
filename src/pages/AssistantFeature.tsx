import React from 'react'
import style from '../styles/AssistantFeature.module.css';
import AssistantAndMenu from '../components/AssistantAndMenu';

export default function AssistantFeature() {
    return (

        <div className={style.test}>
            {/* Title */}
            <h1>クリプタクトで計算を始めてみましょう</h1>
            {/* Assitant and Menu */}
            <AssistantAndMenu />
        </div>
    )
}
