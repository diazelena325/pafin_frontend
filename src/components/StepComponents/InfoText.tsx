import React from 'react'
import { Info } from '@phosphor-icons/react'
import style from '../../styles/StepComponents/InfoText.module.css'

const InfoText = (props: { text: string }) => {
    return (
        <div className={style.infoDiv}>
            <div>
                <Info size={'1rem'} className={style.infoIcon} />
            </div>

            <span className={style.infoText}>{props.text}</span>
        </div>
    )
}

export default InfoText