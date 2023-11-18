import React from 'react'
import style from '../styles/AssistantFeature.module.css'
import AssistantAndMenu from '../components/AssistantAndMenu'
import { Constants } from '../constants/AssistantFeatureConstants'

export default function AssistantFeature() {
    return (

        <div className={style.main}>
            {/* Title */}
            <h1 className={style.title}>{Constants.mainTitle}</h1>
            {/* Assistant and Menu */}
            <AssistantAndMenu />
        </div>
    )
}
