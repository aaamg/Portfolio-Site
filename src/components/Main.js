import React, { useState } from 'react'

// Bootstrap toast message
// import ToastHeader from 'react-bootstrap/ToastHeader'
// import ToastBody from 'react-bootstrap/ToastBody'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Toast from 'react-bootstrap/Toast'
// import Button from 'react-bootstrap/Button'


// Styling
import './Main.css'

const Main = () => {
    const [show, setShow] = useState(false);
    const [copied, setCopied] = useState("[hover over me to reveal e-mail]");
    const [help, setHelp] = useState("I am passionate about creating software that makes procedures more efficient for the user, I love focusing on the user experience.");
    return(
        <>
        <br />
        <div className="upperBox">
           <h1>Hi! I am Andrew Garcia</h1>
           <p>I'm a software engineer focusing on modern web technologies.</p>
           <p>Currently working at <a className="alink" href="https://www.gunbuyer.com" target="_blank" style={{ textDecoration: "underline"}}> gunbuyer.com</a>.</p>
           {/* <p>My main stack is PostgreSQL, Express, React, Node.js</p>  */}
           {/* <p onMouseOver={() => setHelp("Most importantly, I love helping others.")}>{help}</p> */}
           <p>{help}</p>
           <p>The links above should get you to where you need to go. Anything else? e-mail me below!</p>
           <a className="alink" href="mailto:theaaamg@gmail.com" onMouseOver={() => setCopied("theaaamg@gmail.com")}>{copied}</a>
           <br /> 
           {/* <p style={{fontSize: "10px"}}>(I don't have much time with work to throw up a beautiful looking portfolio site (yet), however, I will not use a template site like many <b><i>"dev's"</i></b> out there.)</p> */}
           {/* <button 
            onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>
            Copy
            </button> */}
            {/* <div>
                <h6>What Am I currently working on?</h6>
                <ul>
                    <li>- Getting better with algorithms</li>
                    <li>- Refactoring the database, and datafeeds for gunbuyer.com</li> //////
                </ul>
            </div> */}
            
        </div>

           <div className="toaster">
           {/* <Row>
                <Col xs={6}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000}>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="m-auto">- Andrew</strong>
                        <small>11/12/2020</small>
                    </Toast.Header>
                    <Toast.Body>I'm looking to relocate to Seattle!</Toast.Body>
                    </Toast>
                </Col>
                <Col xs={6}>
                    <Button style={{backgroundColor: "#011936",         borderColor: "grey"}}onClick={() => setShow(true)}>Hey, you!</Button>
                </Col>
            </Row> */}
            {/* <p style={{fontSize: "10px"}}>(I don't have much time with work to throw up a beautiful looking portfolio site (yet), however, I will not use a template site like many <b><i>"dev's"</i></b> out there.)</p> */}
        </div>
        </>
    );
}

export default Main;



           {/* <div className="nameBox">
           <p className="box-1 text1">{`<html>`}</p>
           <p className="box0 text1">{`<body>`}</p>
           <p className="box1 text1">{`<div>`}</p>
                <p className="box6 text1">{`<p>Hello && Welcome!</p>`}</p>
                <p className="box4 text1">{`<p>I am a Full Stack Developer @ `}<a className="alink" href="https://www.gunbuyer.com" target="_blank">{`GunBuyer.com </p>`}</a></p>
                <p className="box8 text1">{`<p>My main stack is PostgreSQL, Express, React, Node.js</p>`}</p> 
            <p className="box1 text1">{`</div>`}</p>
            <p className="box1 text1">{`<div>`}</p>
                <p className="box7 text1">{`<p>I'm Andrew</p>`}</p>
                <p className="box6 text1">{`<p>I also `}<i>really</i>{` enjoy C++</p>`}</p>
                <p className="box5 text1">{`<p>The links above should get you to where you need to go. Anything else? E-mail me below!</p>`}</p>
           <a className="alink text1" href="mailto:theaaamg@gmail.com">{`<p>theaaamg@gmail.com</p>`}</a>
            <p className="box1 text1">{`</div>`}</p>
            <p className="box0 text1">{`</body>`}</p>
            <p className="box-1 text1">{`</html>`}</p> 
            <p style={{fontSize: "10px"}}>(I don't have much time with work to throw up a beautiful looking portfolio site (yet), however, I will not use a template site like many <b><i>"dev's"</i></b> out there.)</p>
            <p style={{fontSize: "10px"}}>(This site is not mobile responsive yet, will be working on that in the next version)</p>
           </div> */}