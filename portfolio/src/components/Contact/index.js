import './index.css';
import React from 'react';

function Contact() {

    return <div>
        <div className="m-3">
            <label for="exampleFormControlInput1" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="m-3">
            <label for="exampleFormControlTextarea1" className="form-label">Content</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
    </div>
}

export default Contact;