import React from 'react'

import ProgressBar from './ProgressBar'
import style from '../../styles/ContainerComponents/ProgressContainer.module.css'
import { Constants } from '../../constants/AssistantFeatureConstants'

const ProgressContainer = (props: { stepCounter: number, totalSteps: number, percentCompleted: number }) => {
    return (

        <div className={style.main}>
            <ProgressBar percentage={props.percentCompleted} />
            <span className={style.label}>{props.stepCounter}/{props.totalSteps}{Constants.stepLabel}</span>

        </div>

    )
}

export default ProgressContainer