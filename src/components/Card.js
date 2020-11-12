import React from 'react'
import styled from 'styled-components'
import './Card.css'

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
    color: #ffcab1; 
    border: 1px solid black;
    width: 50%;
    padding: 20px 15px 20px 15px;
    background-color: #011936;
    margin-bottom: 30px;
`
/* 
    Old colors:
     #CD5D67
*/

const Card = (props) => {
    return(
        <CardContain>
        <CardBox className="card">
            <p>{props.title}</p>
            <p>Stack: {props.stack}</p>
            <p>{props.description}</p>
            <a className="links" target="_blank" href={props.link}>{props.link}</a>
        </CardBox>
        </CardContain>
    );
};

export default Card;