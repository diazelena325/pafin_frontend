import React from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import ProgressBar from './ProgressBar'
import style from '../../styles/ContainerComponents/ProgressContainer.module.css'
import { Constants } from '../../constants/AssistantFeatureConstants'

const ProgressContainer = (props: { totalSteps: number }) => {
    return (

        <div className={style.main}>
            <ProgressBar />
            <span className={style.label}>1/{props.totalSteps}{Constants.stepLabel}</span>
            <CaretUp size={'1rem'} weight="bold" className={style.icon} />
            {/* <CaretDown size={'1rem'} weight="bold" className={style.icon} /> */}
        </div>

    )
}

export default ProgressContainer