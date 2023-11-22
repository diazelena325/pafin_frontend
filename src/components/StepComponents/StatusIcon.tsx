import React from 'react'
import { CheckCircle, CircleDashed } from '@phosphor-icons/react'
import style from '../../styles/StepComponents/StatusIcon.module.css'

const StatusIcon = (props: { complete: boolean }) => {
    return (
        <div>
            {/* Icon (changes) */}
            {props.complete ? (<CheckCircle size={'1.5rem'} weight="fill" className={style.completeIcon} />) : (<CircleDashed size={'1.5rem'} className={style.pendingIcon} />)}

        </div>
    )
}

export default StatusIcon