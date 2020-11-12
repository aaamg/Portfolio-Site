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
        stack: "React, Fetch, Axios",
        description: "Displays the NASA photo of the Day from their API. Enjoy!",
        link: "https://codesandbox.io/s/fetch-nasa-api-ub9z6",
    },
    {
        title: "Studio Ghibli API",
        stack: "React, React Hooks, Axios",
        description: "I was teaching someone about React hooks and whipped up this quick project. I like their films, as does my friend, so it made for a perfect API choice. Took maybe 25 mins on my lunch break to create.",
        link: "https://codesandbox.io/s/ghibli-api-project-xvyoy",
    },
    {
        title: "Look up the Weather App",
        stack: "React, React Hooks, Axios",
        description: "Open Weather API, a work in progress.",
        link: "https://codesandbox.io/s/weather-app-egm7w?file=/src/App.js",
    },
    {
        title: "Stock Data App",
        stack: "React, React Hooks, Axios",
        description: "Type in a ticker symbol!",
        link: "https://codesandbox.io/s/stock-data-app-cti9j",
    }

]


const SmallProjectBox = () => {
    return(
        <>
        <TopContain>
            <TopBox>
            <h6>Small Projects</h6>
            <p>Basically, these are just small ideas I come up with and little projects I create in just a few hours time. Anything from a small weather app, to testing a new tech like axios or an API I want to try out! Just more examples of (mainly) React code for you to look at that doesn't clutter my resume. These projects <i>may</i> or <u><i>may not</i></u> be completed. This is all for fun!</p>
            <p>(I don't bother styling these for the most part, just a heads up)</p>
            </TopBox>
        </TopContain>

        <p>{SmallProjectsObject.map((banana) => {
            return(
            <Card 
                title={banana.title}
                stack={banana.stack}
                description={banana.description}
                link={banana.link}
            />
        )})}</p>
        </>
    );
};

export default SmallProjectBox;