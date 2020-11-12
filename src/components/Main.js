import React, { useState } from 'react'

// Bootstrap toast message
import ToastHeader from 'react-bootstrap/ToastHeader'
import ToastBody from 'react-bootstrap/ToastBody'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Toast from 'react-bootstrap/Toast'
import Button from 'react-bootstrap/Button'

// Styling
import './Main.css'

const Main = () => {
    const [show, setShow] = useState(false);
    return(
        <>
        <br />
        <div className="upperBox">
           <div className="nameBox">
           <p className="box-1">{`<html>`}</p>
           <p className="box0">{`<body>`}</p>
           <p className="box1">{`<div>`}</p>
           <p className="box2">{`<p>Hello && Welcome!</p>`}</p>
            <p className="box3">{`<div>`}</p>
                <p className="box2">{`<p>I'm Andrew</p>`}</p>
            <p className="box3">{`</div>`}</p>
            <p className="box1">{`</div>`}</p>
            <p className="box0">{`</body>`}</p>
            <p className="box-1">{`</html>`}</p>
           </div>

           <p>I am a Full Stack Developer @ <a className="alink" href="https://www.gunbuyer.com" target="_blank"> Gun Buyer</a></p>
           <p>My main stack is PostgreSQL, Express, React, Node.js</p>
           <p>I also <i>really</i> enjoy C++</p>
           <p>The links above should get you to where you need to go. Anything else? E-mail me below!</p>
           <a className="alink" href="mailto:theaaamg@gmail.com">theaaamg@gmail.com</a>
           <br />
           {/* <p style={{fontSize: "10px"}}>(I don't have much time with work to throw up a beautiful looking portfolio site (yet), however, I will not use a template site like many <b><i>"dev's"</i></b> out there.)</p> */}
        </div>

           <div className="toaster">
           <Row>
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
            </Row>
            <p style={{fontSize: "10px"}}>(I don't have much time with work to throw up a beautiful looking portfolio site (yet), however, I will not use a template site like many <b><i>"dev's"</i></b> out there.)</p>
        </div>
        </>
    );
}

export default Main;