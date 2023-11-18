import React from 'react'
import Step from './Step'
import ProgressContainer from './ContainerComponents/ProgressContainer'
import style from '../styles/Container.module.css'
import HeaderContainer from './ContainerComponents/HeaderContainer'
import { IContainer, IStep } from '../interfaces/interfaces'


const Container = (props: { dt: IContainer }) => {


    return (
        <div className={style.main} >
            <div className={style.headerContainer}>
                <HeaderContainer
                    hd={props.dt} />

                {/* Progress Bar Icon and Progress text  */}
                {/* expand/collapse button */}
                <ProgressContainer totalSteps={props.dt.steps.length} />
            </div>


            {/* Description */}
            <p className={style.description}>{props.dt.description}</p>

            {/* Steps - Reusable */}
            {props.dt.steps.map((step: IStep) => {
                return (
                    <Step key={step.id} spData={step} />
                )
            })}

        </div>
    )
}

export default Container

