import React from "react";
import { CaretDown } from '@phosphor-icons/react'
import style from '../../styles/ContainerComponents/Collapsible.module.css'



const Collapsible = (props: { open: boolean, handleFilterOpening: (() => void) }) => {

    return (
        <>

            <button type="button" className={style.button} onClick={() => { props.handleFilterOpening(); }}>

                {!props.open ? (
                    <CaretDown size={'1rem'} weight="bold" className={style.downicon} />
                ) : (
                    <CaretDown size={'1rem'} weight="bold" className={style.upicon} />
                )}


            </button>

        </>
    );
};

export default Collapsible;