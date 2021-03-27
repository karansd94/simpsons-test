import React from 'react'
import styled from "styled-components";
import {  FONT } from "../constants";


const StyledSpinner = styled.div`



transform: scale(1);
opacity: 0;
animation: pulse 2s infinite;
width: 200px;
margin: auto;


img{
    height: 200px;
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		opacity: 0;
	}

	50% {
		transform: scale(0.95);
		opacity: 1;
	}

    100%{
        opacity: 0;
    }
}

p{
    font-weight: ${FONT.WEIGHT.BOLD};
    font-size: ${FONT.SIZE.L}
}
`

function Spinner() {
    return (
        <StyledSpinner>
            <img alt="Flashing image of Lisa Simpson" src='https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083'/>
            <p>Loading knowledge...</p>
        </StyledSpinner>
    )
}

export default Spinner
