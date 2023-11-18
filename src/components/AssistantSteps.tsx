import React from 'react'
import Container from './Container'
import style from '../styles/AssistantSteps.module.css'
import data from '../data/afData.json'
import { IContainer } from '../interfaces/interfaces'

function AssistantSteps() {
    return (
        <div className={style.main}>

            {/* Container - Reusable for 3 steps*/}
            {data.AssistantFeature.containers.map((item: IContainer) => {
                return (
                    <Container key={item.id} dt={item} />
                )
            })}

        </div>
    )
}

export default AssistantSteps