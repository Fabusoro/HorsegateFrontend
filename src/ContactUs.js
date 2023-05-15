import { useEffect, useState } from "react";
import './profile.css';
import { toast } from 'react-toastify';
import WebFont from 'webfontloader';



const ContactUs = () => {

    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [message, messagechange] = useState("");

    useEffect(() =>
    {
        WebFont.load({
            google: {
                families: ['Karla', 'Poppins']
            }
        });
    }, []);

    const handleContact = (e) =>
    {
        e.preventDefault();
        let reg = { name, email, message};
        console.log(reg);

        fetch("https://localhost:7110/api/Email", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(reg)
        }).then((res) =>
        {
            console.log(res);
            toast.success('Registration Successful')
        }).catch((res) =>
        {
            toast.error('Registration Failed: ' + res.message);
        });
    }


    return(
        <div className="contact-us-page">
            <div className="company-contact-section">
                <h1 className="company-section-header">Get in Touch</h1>
                <p className="company-section-paragraph">Feel free to get in touch with us. We are always available</p>
                <div className="contact-details">
                    <div className="email-container">
                        <img></img>
                        <div className="email-details">
                            <p className="email-header">Email: </p>
                            <p className="email-itself">info@horsegateacademy.com</p>
                        </div>
                    </div>
                    <div className="phone-container">
                        <img></img>
                        <div className="phone-details">
                            <p className="phone-header">Phone: </p>
                            <p className="phone-itself">07037990739</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="contact-form-container">
                <form onSubmit={handleContact} className="login-form" >
                    <label for="email" className="input-label">Name</label>
                    <input required className="inpute" value={name} onChange={e => namechange(e.target.value)} type="email" name="email" id="email" placeholder="Email"></input>
                    <label for="password" className="input-label">Email</label>
                    <input required className="inpute" value={email} onChange={e => emailchange(e.target.value)} name="password" id="email" placeholder="Password" ></input>
                    <label for="password" className="input-label">Message</label>
                    <textarea required style={{ height: '100px' }} className="inpute" value={message} onChange={e => messagechange(e.target.value)} name="password" id="email"></textarea>
                    <button className="button" type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default ContactUs;