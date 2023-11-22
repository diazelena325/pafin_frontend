import React from 'react'
import style from '../../styles/ContainerComponents/HeaderContainer.module.css'
import { IContainer } from '../../interfaces/interfaces'
import HeaderIcon from './HeaderIcon'

const HeaderContainer = (props: { hd: IContainer }) => {
    return (
        <div className={style.titleContainer}>
            <div className={style.iconContainer}> <HeaderIcon icon={props.hd.icon} />
            </div>

            <h2 className={style.title}>{props.hd.heading}</h2>

        </div>
    )
}

export default HeaderContainer