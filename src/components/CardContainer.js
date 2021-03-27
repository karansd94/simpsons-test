import React from 'react'
import styled from "styled-components";

import Card from './Card'

import { SPACING } from "../constants";

const StyledCardContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: ${SPACING.M};
    margin-top: ${SPACING.M};


`

function CardContainer({quotes}) {
    return (
        <StyledCardContainer>
        {
            quotes.map((quote) => {
            return (
                <Card
                key={quote.character}
                quote={quote}
                />
            );
            })
        }     
        </StyledCardContainer>
    )
}

export default CardContainer
