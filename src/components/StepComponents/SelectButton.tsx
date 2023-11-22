import React from 'react'
import style from '../../styles/StepComponents/SelectButton.module.css'
import { ArrowRight } from '@phosphor-icons/react'
import { Constants } from '../../constants/AssistantFeatureConstants'

const SelectButton = (props: { id: number, updateStepsCompleted: ((id: number) => void), enabledStatus: boolean }) => {
    return (
        <button disabled={!props.enabledStatus} className={style.button} onClick={() => { props.updateStepsCompleted(props.id) }}>
            <span className={style.buttonText}>{Constants.buttonLabel}</span>
            <ArrowRight size={'1rem'} weight="bold" className={style.buttonIcon} />
        </button>
    )
}

export default SelectButton