import React from 'react'
import styled from "styled-components";

import { COLOR, BORDER, FONT, SPACING, DEVICE } from "../constants";

const StyledCard = styled.article`

width: auto;
box-shadow: ${BORDER.SHADOW.M};
border-radius: ${BORDER.RADIUS.S};
display: flex;
align-items: center;
padding: ${SPACING.S};
justify-content: space-between;
flex-direction: ${(props) => props.roworder};

@media only screen and ${DEVICE.MOBILE}{
    flex-direction: column;
  }


img{
    width: 100px;
}

p{
padding: ${SPACING.S};
line-height: ${SPACING.M};
color: ${COLOR.BLACK};
background: ${COLOR.WHITE};
font-weight: ${FONT.WEIGHT.REGULAR};
font-family: ${FONT.FAMILY.BODY};

}

`



function Card({quote}) {
    //Image on the left by default. Row reverse to put it on the right
    let rowReverse = quote.characterDirection == "Right" ? "row-reverse" : "row"

    return (
        <StyledCard roworder={rowReverse} >
            <img alt={quote.character} src={quote.image} />
            <p>{quote.quote}</p>
        </StyledCard>
    )
}

export default Card
