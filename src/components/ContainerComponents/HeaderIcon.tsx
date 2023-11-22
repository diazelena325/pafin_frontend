import React from 'react'
import { Gear, ListChecks, UserCircleGear } from '@phosphor-icons/react'
import style from '../../styles/ContainerComponents/HeaderIcon.module.css'

const HeaderIcon = (props: { icon: string }) => {
    const getHeaderIcon = (i: string) => {
        let iconComponent = (
            <UserCircleGear weight="duotone" className={style.icon} />
        );

        if (i === 'Gear') {
            iconComponent = (<Gear weight="duotone" className={style.icon} />);
        } else if (i === 'ListChecks') {
            iconComponent = (<ListChecks weight="duotone" className={style.icon} />);
        }

        return iconComponent;
    };

    return (
        <>
            {getHeaderIcon(props.icon)}
        </>

    )
}

export default HeaderIcon