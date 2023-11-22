import React, { useCallback, useState } from 'react'
import Container from './Container'
import style from '../styles/AssistantSteps.module.css'
import data from '../data/afData.json'
import { IContainer } from '../interfaces/interfaces'

function AssistantSteps() {
    const [containerData, setContainerData] = useState<IContainer[]>(data.AssistantFeature.containers)

    const updateActiveContainer = useCallback((id: number) => {

        let nextContainer: number = id + 1;

        if (nextContainer <= containerData.length) {
            setContainerData(prevContainer => {
                return prevContainer.map((container) => {
                    return container.id === (nextContainer) ? { ...container, activeContainer: true } : container
                })
            })
        }

    }, []);

    return (
        <div className={style.main}>

            {/* Container - Reusable for 3 steps*/}
            {containerData.map((item: IContainer) => {
                return (
                    <Container key={item.id} dt={item} updateActiveContainer={updateActiveContainer} />
                )
            })}

        </div>
    )
}

export default AssistantSteps