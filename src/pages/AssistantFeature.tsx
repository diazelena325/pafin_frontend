import React from 'react'
import style from '../styles/AssistantFeature.module.css'
import AssistantAndMenu from '../components/AssistantAndMenu'


export default function AssistantFeature() {
    return (

        <div className={style.main}>
            {/* Title */}
            <h1 className={style.title}>Title</h1>
            {/* Assitant and Menu */}
            <AssistantAndMenu />
        </div>
    )
}
