import React from 'react'
import MenuItem from './MenuItem'
import data from '../data/afData.json'
import { IQuickAccess } from '../interfaces/interfaces'
import style from '../styles/Menu.module.css'

function Menu() {
    return (
        <div className={style.main}>
            {/* Menu Item - multiple*/}
            {data.AssistantFeature.quickAccess.map((item: IQuickAccess) => {
                return (
                    <MenuItem dt={item} key={item.id} />
                )
            })}

        </div>
    )
}

export default Menu