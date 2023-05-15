import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import teacher from './teacher.png';
import classroom from './classroom.png';
import firstsection from './firstsection.jpg';
import firstsectionimage from './images/firstsectionimage.png';
import activeLearning from './images/activeLearning.png'
import dashboard from './dashboard.png';
import './profile.css';
import WebFont from 'webfontloader';

const Home = () =>
{

    useEffect(() =>
    {
        WebFont.load({
            google: {
                families: ['Karla', 'Poppins']
            }
        });
    }, []);

    const styles = {
        backgroundImage: `url(${firstsection}})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div className="home-container">
            <div className="first-home-section">
                <div className="first-content-container">
                    <h1 className="first-section-header">Horsegate<br></br> Academy</h1>
                    <p className="first-section-paragraph">Outstanding in Learning and Character</p>
                    <div className="first-button-container">
                        <button className="aboutus-button"><Link to={'/about-us'} smooth={true} style={{ textDecoration: 'none', color: 'white' }}>About Us</Link></button>
                        <button className="contactus-button"><Link to={'/contactus'}  style={{ textDecoration: 'none', color: '#D2042D' }}>Contact Us</Link></button>
                    </div>
                </div>
                <div className="first-section-second-container">
                    <img className="second-container-image" src={firstsectionimage} alt="image" />
                </div>
            </div>

            <div className="second-home-container">
                <h2 className="second-home-container-header">Why Horsegate Academy?</h2>
                <div className="second-column-container">
                    <div className="second-first-column">
                        <img className="second-column-icon" src={activeLearning} />
                        <h3 className="second-column-header">Active Based Learning</h3>
                        <p className="second-column-paragraph">At Horse gate academy, we make use of Teach-Then-Do style of learning.
                            Our students are not only taught within the
                            corners of their classroom, there is also a practical application of what is being taught.</p>
                    </div>
                    <div className="second-middle-column">
                        <img className="middle-column-icon" src={teacher} />
                        <h3 className="middle-column-header">Qualified Teachers</h3>
                        <p className="middle-column-paragraph">Our teachers display great emotional intelligence 
                         with strong educational background and certificates to back it up. 
                        So, be rest assured that your children are in safe hands.</p>
                    </div>
                    <div className="second-third-column">
                        <img className="second-column-icon" src={classroom} />
                        <h3 className="second-column-header">Rounded Education</h3>
                        <p className="second-column-paragraph">We do not only ensure that our students display high educational prowess, 
                        we make sure they excel in all other facets of life which will help them while growing up.</p>
                    </div>
                </div>
            </div>

            
            <div className="principal-section" id="principal">
                <div className="principal-second-container">
                    <img src={firstsectionimage} className="principal-section-image" />
                </div>
                <div className="principal-first-container">
                    <h2 className="principal-header">Message from <br />the Principal</h2>
                    <p className="principal-paragraph">You are welcome to Horse Gate Academy with great pleasure.
                        It is a thing of honour for me to anchor the ship of this fast growing school which offers great opportunities for the young
                        citizens of Nigeria and the world at large. We are aspiring to make every pupil succeed both in learning and character.
                        As motto implies ” outstanding in learning and character” We offer our pupils numerous opportunities to become
                        confident and thoughtful young individuals prepared for any future challenges in this exciting and increasingly competitive world.<br /><br />
                        At Horse Gate Academy, we are very conscious of our set academic standards which cover both the curricular and extra curricular activities.
                        We expect our pupils to be outstanding in learning and also possess a modeled behavior. We daily remind our pupils to perspire
                        to acquire good desires by not retiring in putting more efforts to whatever level of excellence they might have attained. <br></br>
                        Our classrooms are organized in a relaxed and comfortable atmosphere which enhances effective learning. </p>
                    <button className="principal-button"><Link to={'/about-us'} style={{ textDecoration: 'none', color: 'white' }}>Know More</Link></button>
                </div>

            </div>
            
            <div className="statistics-section">
                <div className="first-statistics-container">
                    <img src={activeLearning} alt="image" className="statistics-column-icon" />
                    <h4 className="statistics-number">20</h4>
                    <h4 className="statistics-header">Teachers</h4>
                </div>
                <div className="first-statistics-container">
                    <img src={activeLearning} alt="image" className="statistics-column-icon" />
                    <h4 className="statistics-number">1000</h4>
                    <h4 className="statistics-header">Students</h4>
                </div>
                <div className="first-statistics-container">
                    <img src={activeLearning} alt="image" className="statistics-column-icon" />
                    <h4 className="statistics-number">7</h4>
                    <h4 className="statistics-header">Years</h4>
                </div>
            </div>

            <div className="contact-us-section">
                <div className="contact-us-column">
                    <h4 className="contact-us-message">Do you want to <br></br>message us now</h4>
                    <button className="contact-us-button"><Link to={'/contactus'} style={{ textDecoration: 'none' }}><h4 className="contact-us-text">Contact Us</h4></Link></button>
                </div>
            </div>
        </div>
    )
}

export default Home