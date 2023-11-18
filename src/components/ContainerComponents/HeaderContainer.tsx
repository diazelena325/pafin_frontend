import React, { Component, Fragment, ReactElement, forwardRef } from 'react'
import { Gear, Icon, IconBase, IconWeight, ListChecks, UserCircleGear } from '@phosphor-icons/react'

import style from '../../styles/ContainerComponents/HeaderContainer.module.css'
import { IContainer } from '../../interfaces/interfaces'

const HeaderContainer = (props: { hd: IContainer }) => {
    //let iconType = props.hd.icon;


    return (
        <div className={style.titleContainer}>

            <UserCircleGear size={'1.625rem'} weight="duotone" className={style.icon} />

            {/* <UserCircleGear size={'1.625rem'} weight="duotone" className={style.icon} />

            <Gear size={'1.625rem'} weight="duotone" className={style.icon} />

            <ListChecks size={'1.625rem'} weight="duotone" className={style.icon} /> */}

            <h2 className={style.title}>{props.hd.heading}</h2>

        </div>
    )
}

export default HeaderContainer