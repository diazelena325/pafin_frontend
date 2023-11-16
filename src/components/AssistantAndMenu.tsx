import React from 'react'
import AssistantSteps from './AssistantSteps'
import QuickAccess from './QuickAccess'
import style from '../styles/AssistantAndMenu.module.css'

function AssistantAndMenu() {
    return (
        <div className={style.main}>
            {/* Assistant Steps */}
            <AssistantSteps />

            {/* Quick Access */}
            <QuickAccess />
        </div>
    )
}

export default AssistantAndMenu