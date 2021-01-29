import React, { useState } from 'react'
import './Socials.css'

const Socials = () => {
    const [copied, setCopied] = useState("[hover for e-mail]");
    return(
        <>
            <br />
            <p className="alink" onMouseOver={() => setCopied("theaaamg@gmail.com")}>{copied}</p>
            <br />
            <a href="https://github.com/aaamg">github</a>
            <br />
            <br />
            <a href="https://www.linkedin.com/in/aaamg/">linkedin</a>
        </>
    );
}

export default Socials;