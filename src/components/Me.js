import React from 'react'
import styled from 'styled-components'
import './Me.css'

// Outer Contain
const Outer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: center;
`

// Container
const Contain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
`

const Me = () => {
    return(
        <>
            <Outer>
            <Contain>
                <br />
                <h1>About me</h1>
                <br />
                <p>My name is Andrew & I am software engineer currently located in Daytona Beach, FL. I work primarily in JavaScript to build user experiences.</p>

                <p>While studying for my undergrad at Louisiana State University, I took a CS course as one of my required Math courses. The class was a MATLAB course, and this was my first ever experience with a programming language. I had a teachers assistant help me in the course and that led to his reccomendation for my first developer job with the IT department at LSU.</p>

                <p>While at this job, I decided to pursue a career in software development. I self studied and eventually enrolled in Lambda School, where I learned full stack web development and computer science.</p>
            </Contain>
            </Outer>

        </>
    )
}

export default Me;