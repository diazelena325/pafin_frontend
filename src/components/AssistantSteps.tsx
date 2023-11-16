import React from 'react'
import Container from './Container'
import style from '../styles/AssistantSteps.module.css'

function AssistantSteps() {
    return (
        <div className={style.main}>

            {/* Container - Reusable for 3 steps*/}
            <Container />
        </div>
    )
}

export default AssistantSteps