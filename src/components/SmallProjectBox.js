import React from 'react'
import Card from './Card.js'
import styled from 'styled-components'

// Styling
const TopContain = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-direction: column;
margin-bottom: 20px;
`
const TopBox = styled.div`
width: 50%;
margin: 30px 0px 10px 0px;
`

// Data of projects

const SmallProjectsObject = [
    {
        title: "NASA API Photo of the Day", 
        img: "https://i.ibb.co/G39qJH3/logo-og.png",
        stack: "React, Fetch, Axios",
        description: "Displays the NASA photo of the Day, and about the author/image all from their API. Enjoy!",
        link: "https://codesandbox.io/s/fetch-nasa-api-ub9z6",
    },
    {
        title: "JavaScript Bubble Visualization",
        img: "https://camo.githubusercontent.com/f2c5824c4095c07a76c6fe58b02404b10342eeba599e7958237359be5c3e69ca/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f54676d396a317136324d3045544446686a452f67697068792e676966",
        stack: "JavaScript, p5.js",
        description: "Two sphere's that act like similar pole magnets. They have a mind of their own though!",
        link: "https://github.com/aaamg/JavaScript-bubble-visualization",
    },
    {
        title: "Studio Ghibli API",
        img: "https://i.ibb.co/G39qJH3/logo-og.png",
        stack: "React, React Hooks, Axios",
        description: "I was teaching someone about React hooks and I made this quick project. I like their films, as does my girlfriend, so it made for a perfect API choice. Took maybe 25 mins on my lunch break to create.",
        link: "https://codesandbox.io/s/ghibli-api-project-xvyoy",
    },
    {
        title: "React Interview Challenge",
        img: "https://i.ibb.co/G39qJH3/logo-og.png",
        stack: "React, React Hooks, Axios",
        description: "From an interview video on YouTube using the https://randomuser.me/api API. The project displays the user, changes to a new user, has a counter for each profile you view automatically, and cleanly displays the JSON data below. No styling was part of the interview, it was just about the data itself. This was a fun challenge.",
        link: "https://codesandbox.io/s/react-interview-my-own-spin-l9u04?file=/src/App.js",
    },
    {
        title: "Stock Data App",
        img: "https://i.ibb.co/G39qJH3/logo-og.png",
        stack: "React, React Hooks, Axios",
        description: "(A work in progress.) Type in a ticker symbol!",
        link: "https://codesandbox.io/s/stock-data-app-cti9j",
    }

]

const SmallProjectBox = () => {
    return(
        <>
        <TopContain>
            <TopBox>
            <h6>Side Projects</h6>
            <p>Let me know if any of these are down, and I can have them up and running for you!</p>
            <p>This is my scratch pad, any ideas that bounce off my head that I decide to bring to life in some capacity. These are just small ideas I come up with and little projects I create in just a short amount of time. Anything from a small weather app, to testing a new tech like axios or an API I want to try out! Just more examples of (mainly) React code for you to look at that doesn't clutter my acual portfolio. These projects <i>may</i> or <u><i>may not</i></u> be completed. This is all for fun!</p>
            <p>(I don't bother styling these due to these for the most part, just a heads up)</p>
            </TopBox>
        </TopContain>

        <p>{SmallProjectsObject.map((banana) => {
            return(
            <Card 
                title={banana.title}
                img={banana.img}
                stack={banana.stack}
                description={banana.description}
                link={banana.link}
            />
        )})}</p>
        </>
    );
};

export default SmallProjectBox;