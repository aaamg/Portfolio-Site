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
    background-color: #121721;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const InnerCard = styled.div`
    width: 80%;
    padding: 20px 15px 20px 15px;
    border-radius: 5%;
    background-color: #161d29;
    margin-bottom: 30px;
`

const IMG = styled.img`
    height: 300px;
    width: auto;
    margin: 0 auto;
`

const A = styled.a`
    color: white;
    text-decoration: underline;
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
            <IMG src={props.img}></IMG>
            <br />
            <InnerCard className="innerCard">
                <p>Stack: {props.stack}</p>
                <p>{props.description}</p>
                <A className="links" target="_blank" href={props.link}>{props.link}</A>
            </InnerCard>
        </CardBox>
        </CardContain>
        // test
    );
};

export default Card;