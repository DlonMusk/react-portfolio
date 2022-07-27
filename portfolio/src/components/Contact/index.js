import './index.css';
import React, {useState, useRef} from 'react';
import emailjs from 'emailjs-com';

function Contact() {

    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_oxzvbk6', 'template_3eb1rtc', form.current, 'qyB7Q7g_HDjyEkNyx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    return <div className='contact'>
        <div className='my-3 contact-info text-center'>
            <p className='p-3'>Email: knight777@hotmail.ca</p>
            <p>Phone: (226) 962-4207</p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <div className="m-3">
                <label for="exampleFormControlInput1" className="form-label">Subject</label>
                <input type="text" name="subject" className="form-control" id="exampleFormControlInput1"/>
            </div>
            <div className="m-3">
                <label for="exampleFormControlInput2" className="form-label">Name</label>
                <input type="text" name="name" className="form-control" id="exampleFormControlInput2" />
            </div>
            <div className="m-3">
                <label for="exampleFormControlInput3" className="form-label">Your Email</label>
                <input type="email" name="email" className="form-control" id="exampleFormControlInput3" placeholder="email@example.com" />
            </div>
            <div className="m-3">
                <label for="exampleFormControlTextarea4" className="form-label">Content</label>
                <textarea type="text" name='message' className="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
            </div>
            <div className='m-3 text-center'>
                <button type="submit" className="btn submit-btn" value="Send Email">Send Email</button>
            </div>
        </form>
    </div>
}

export default Contact;