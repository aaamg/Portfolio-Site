import React from 'react'
import styled from 'styled-components'

// Container
const CardContain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;
`
// Box of Card
const CardBox = styled.div`
    border: 1px solid black;
    width: 50%;
`

const Card = (props) => {
    return(
        <CardContain>
        <CardBox>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.link}</p>
        </CardBox>
        </CardContain>
    );
};

export default Card;