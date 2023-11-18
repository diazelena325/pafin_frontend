import React from 'react'
import style from '../styles/Step.module.css'
import { ArrowRight, CheckCircle, CircleDashed, Info } from '@phosphor-icons/react'
import { IStep } from '../interfaces/interfaces'
import { Constants } from '../constants/AssistantFeatureConstants'

function Step(props: { spData: IStep }) {
    return (
        <div className={style.main}>
            <div className={style.leftDiv}>
                <div>
                    {/* Icon (changes) */}
                    <CheckCircle size={'1.5rem'} weight="fill" className={style.completeIcon} />
                    {/* <CircleDashed size={'1.5rem'} className={style.pendingIcon} /> */}

                </div>


                <div className={style.textDiv}>

                    {/*  Title */}
                    <h4 className={style.title}>{props.spData.title}</h4>


                    {/* badge - optional */}
                    {props.spData.badge && <div className={style.badgeDiv}>
                        <span className={style.badge}>{props.spData.badge}</span>
                    </div>}

                    {/* Description */}
                    <p className={style.description}>{props.spData.description}</p>

                    {/* info text - optional */}
                    {props.spData.info && <div className={style.infoDiv}>
                        <Info size={'1rem'} className={style.infoIcon} />
                        <span className={style.infoText}>{props.spData.info}</span>
                    </div>}

                </div>
            </div>
            {/* Button */}
            <div className={style.rightDiv}>
                <button className={style.button}>
                    <span className={style.buttonText}>{Constants.buttonLabel}</span>
                    <ArrowRight size={'1rem'} weight="bold" className={style.buttonIcon} />
                </button>
            </div>
        </div>
    )
}

export default Step