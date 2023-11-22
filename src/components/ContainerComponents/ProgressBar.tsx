import React from "react";
import style from '../../styles/ContainerComponents/ProgressBar.module.css'
import styled from 'styled-components'

const ProgressDiv = styled.div<{ $percent: number }>`
    height: 100%;
	width: ${props => props.$percent}%;
	background-color: var(--green-500);
	border-radius: 1rem;
    transition: width 0.5s ease-in-out;
`;

const ProgressBar = (props: { percentage: number }) => {

    return (
        <div className={style.containerStyles}>
            <ProgressDiv $percent={props.percentage} />

        </div >
    );
};

export default ProgressBar;