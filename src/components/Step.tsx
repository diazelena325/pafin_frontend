import React from 'react'
import style from '../styles/Step.module.css'
import { IStep } from '../interfaces/interfaces'
import InfoText from './StepComponents/InfoText'
import StatusIcon from './StepComponents/StatusIcon'
import styled from 'styled-components'
import SelectButton from './StepComponents/SelectButton'


const Main = styled.div<{ $complete: string, $active: string, $activestepcontainer: string }>`
    display: flex;
	justify-content: stretch;
	padding: 1rem;
	align-items: center;
	gap: 4.8125rem;
	border-radius: 0.5rem;
	border:  ${props => (props.$active === 'true') ? '1px solid var(--primary-500)' : '1px solid var(--neutral-500)'} ;
	box-shadow: ${props => (props.$active === 'true') ? '0px 0px 4px 0px var(--primary-500)' : 'none'} ;
    transition: all .5s ease;
    opacity:  ${props => (props.$activestepcontainer === 'true' || props.$complete === 'true') ? 1 : 0.4} ;
    
    
    @media (max-width: 426px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem;
  }
`;


function Step(props: { spData: IStep, updateStepsCompleted: ((id: number) => void), activeStep: boolean }) {

    return (
        <Main className={style.main} $complete={props.spData.complete.toString()} $active={props.spData.active.toString()} $activestepcontainer={props.activeStep.toString()}>
            <div className={style.leftDiv}>
                <StatusIcon complete={props.spData.complete} />
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
                    {props.spData.info && <div className='style.infoText'><InfoText text={props.spData.info} /></div>}

                </div>
            </div>
            {/* Button */}
            <div className={style.rightDiv} >
                <SelectButton id={props.spData.id} updateStepsCompleted={props.updateStepsCompleted} enabledStatus={props.activeStep} />
            </div>
        </Main >
    )
}

export default Step