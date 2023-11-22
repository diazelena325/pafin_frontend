import React, { useCallback, useEffect, useState } from 'react'
import Step from './Step'
import ProgressContainer from './ContainerComponents/ProgressContainer'
import style from '../styles/Container.module.css'
import HeaderContainer from './ContainerComponents/HeaderContainer'
import { IContainer, IStep } from '../interfaces/interfaces'
import Collapsible from './ContainerComponents/Collapsible'


const Container = (props: { dt: IContainer, updateActiveContainer: ((id: number) => void) }) => {
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [complete, setComplete] = useState<number>(0);
    const [stepCounter, setStepCounter] = useState<number>(0);
    const [currentSteps, setCurrentSteps] = useState<IStep[]>(props.dt.steps);

    const updateStepsCompleted = useCallback((id: number) => {
        setCurrentSteps(prevSteps => {
            return prevSteps.map((step) => {
                return step.id === id ? { ...step, complete: true, active: false } : step.id === (id + 1) ? { ...step, active: true } : step
            })
        })

    }, []);

    const getStepsCompleted = (steps: IStep[]): number => {
        let count: number = 0;
        steps.forEach((step: IStep) => {
            if (step.complete) {
                count++;
            }
        });
        return count;
    };

    const calculateStepsCompleted = (stepsDone: number, totalSteps: number): number => {

        return Math.round((stepsDone / totalSteps) * 100);
    }

    useEffect(() => {
        const stepsComplete: number = getStepsCompleted(currentSteps);
        setStepCounter(stepsComplete);

        const percentCompleted: number = calculateStepsCompleted(stepsComplete, props.dt.steps.length);
        setComplete(percentCompleted);

        if (percentCompleted === 100) {
            props.updateActiveContainer(props.dt.id);
        }

    }, [currentSteps])

    const handleFilterOpening = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className={style.main} >
            <div className={style.headerContainer}>
                <HeaderContainer
                    hd={props.dt} />

                {/* Progress Bar Icon and Progress text  */}
                {/* expand/collapse button */}
                <div className={style.progressContainer}>
                    <ProgressContainer
                        stepCounter={stepCounter}
                        totalSteps={props.dt.steps.length} percentCompleted={complete} />

                    <Collapsible
                        open={isOpen}
                        handleFilterOpening={handleFilterOpening} />
                </div>

            </div>


            {/* Description */}
            <p className={style.description}>{props.dt.description}</p>

            {/* Steps - Reusable */}
            {<div className={isOpen ? style.stepsContainerOpen : style.stepsContainerClose}>
                {currentSteps.map((step: IStep) => {
                    return (
                        <Step key={step.id} spData={step} updateStepsCompleted={updateStepsCompleted} activeStep={props.dt.activeContainer} />
                    )
                })}
            </div>}

        </div>
    )
}

export default Container

