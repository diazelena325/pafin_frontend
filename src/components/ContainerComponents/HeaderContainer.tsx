import React from 'react'
import { UserCircleGear } from '@phosphor-icons/react'
import ProgressContainer from './ProgressContainer'
import style from '../../styles/ContainerComponents/HeaderContainer.module.css'

const HeaderContainer = () => {
    return (
        <div className={style.headerContainer}>
            <div className={style.titleContainer}>
                {/* Icon and Title */}
                <UserCircleGear size={'1.625rem'} weight="duotone" className={style.icon} />
                <h2 className={style.title}>取引の情報を入力しましょう</h2>
            </div>

            {/* Progress Bar Icon and Progress text  */}
            {/* expand/collapse button */}
            <ProgressContainer />
        </div>
    )
}

export default HeaderContainer