import React from 'react'
import Card from './Card.js'
import './ProjectBox.css'



const ProjectsObject = [
    {
        title: "Gunbuyer.com",
        img: "https://i.ibb.co/6yZH6Bq/Screen-Shot-2020-12-25-at-6-33-58-PM.png",
        stack: "PHP, Magento 2, JavaScript, Varnish, Apache, MySQL",
        description: "At Gunbuyer I am a full-stack developer working on both the front end and backend. For the front end I am using JavaScript, phtml, xml, less, and other technologies. The backend is mainly php and using the Magento 2 interface. At Gunbuyer I worked on a small team with one other dev and a project manager. We completely created a new site from scratch, imported over 140,000 unique products via setting up new data feed logic, created a new custom back end, and added new extensions/created custom extensions on a project that the previous team had corprate level resources and a team of over 10. This role is challenging as there are no senior developers to learn from and I had to teach myself everything with the new technologies I encountered such as php, Magento 2, GraphQL, and more.",
        link: "https://demo.floridagunexchange.net"
    },
    {
        title: "Sauti Africa Market Prices",
        img: "https://i.ibb.co/qFsSHc5/Screen-Shot-2020-12-25-at-7-05-53-PM.png",
        stack: "React | Node.js | Express | Knex | Cypress | MySQL | Auth0 | SASS",
        description: "Sauti Africa's trade and market information platform directly targets the barriers to information to enhance small-scale competitiveness and profitability in East Africa for cross-border traders. This project was envisioned to help locals across many African cities and nations to be able to know commodities prices at local market levels. When traveling between various villages, the price of rice or bananas may fluctuate greatly. This app allows locals to be able to price out what they need ahead of time. It also allows farmers, producers, sellers, and traders to partake in arbitrage between various local markets to get the most out of their resources.",
        link: "https://price-api.live/"
    },
    {
        title: "DJ Helper",
        img: "https://i.ibb.co/C0QHDN7/Screen-Shot-2020-12-25-at-7-09-01-PM.png",
        stack: "React | React Router | Redux | SASS | Node.js | Express | Postgres | AWS",
        description: "App that helps DJs easily connect with their audiences and collect song requests. Audiences can then upvote those song requests. I built a fully functionioning backend in Node, created a PostgreSQL Amazon RDS database, and deployed the backend on a Linux EC2 instance. Helped create the frontend using React and SASS.",
        link: "https://github.com/Lambda-School-Labs/djhelper-be"
    },
    {
        title: "Hacker News Clone",
        img: "https://i.ibb.co/8jrqpq1/Screen-Shot-2020-12-25-at-7-10-04-PM.png",
        stack: "Node.js | Express | brcypt.js | jsonwebtoken | helmet | React | Heroku",
        description: "I was mainly the backend developer but as the only full stack developer on the team I assisted the front end devs with any issues they had with creating components, passing props, linking their front end to my backend, and styling.",
        link: "https://github.com/reactHackerNewsBW"
    },
    {
        title: "Guidr UX/UI Design",
        img: "https://i.ibb.co/BZHbSCR/Screen-Shot-2020-12-25-at-7-12-25-PM.png",
        stack: "HTML | CSS (all by hand, no libraries) | JavaScript",
        description: "An App that connects those with a passion for off the grid exploration. Plots your course via GPS and can be shared with others. This was one of my first front end designs. I styled the landing page and a team page.",
        link: "https://condescending-davinci-58ec2b.netlify.app/index.html"
    }
]

const ProjectBox = () => { 
    return(
        <>
        <br/>
        <h6>Projects</h6>
        <br/>
        <p>{ProjectsObject.map((banana) => {
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

export default ProjectBox;