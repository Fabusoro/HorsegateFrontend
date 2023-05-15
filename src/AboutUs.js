import firstsectionimage from './images/firstsectionimage.png';
import { useEffect, useState } from "react";
import WebFont from 'webfontloader';
import Horsegateimage from './images/Horsegateimage.jpeg'
import Horsegateimage2 from './images/Horsegateimage2.jpeg'


const Aboutus = () => {

    useEffect(() =>
    {
        WebFont.load({
            google: {
                families: ['Karla', 'Poppins', 'Onest']
            }
        });
    }, []);


    return (
        <div className='about-us-container'>
            <div className="principal-section" id="principal">
                <div className="principal-second-container">
                    <img src={firstsectionimage} className="principal-section-image" />
                </div>
                <div className="principal-first-container">
                    <h2 className="principal-header about-us-principal" >Message from <br />the Principal</h2>
                    <p className="principal-paragraph">You are welcome to Horse Gate Academy with great pleasure.
                        It is a thing of honour for me to anchor the ship of this fast growing school which offers great opportunities for the young
                        citizens of Nigeria and the world at large. We are aspiring to make every pupil succeed both in learning and character.
                        As motto implies ” outstanding in learning and character” We offer our pupils numerous opportunities to become
                        confident and thoughtful young individuals prepared for any future challenges in this exciting and increasingly competitive world.<br /><br />
                        At Horse Gate Academy, we are very conscious of our set academic standards which cover both the curricular and extra curricular activities.
                        We expect our pupils to be outstanding in learning and also possess a modeled behavior. We daily remind our pupils to perspire
                        to acquire good desires by not retiring in putting more efforts to whatever level of excellence they might have attained. <br></br>
                        Our classrooms are organized in a relaxed and comfortable atmosphere which enhances effective learning. <br></br><br></br>
                        Likewise, our programs are carefully structured to be both educative and beneficial to all pupils, irrespective of their abilities. 
                        Our members of staff are well trained and God-fearing and coupled with the fact that are fees are highly affordable. 
                        We welcome visits and provide callers the opportunity to look around our facilities. We look forward to welcoming your child(ren) 
                        to our great citadel of learning as you will never regret of handing them over to us.</p>
                </div>
            </div>

            <div className='our-mission-section'>
                <div className='mission-header-container'>
                    <h1 className='mission-header'>OUR MISSION</h1>
                    <p className='mission-sub-header'>The Mission Behind Horsegate Academy</p>
                    <img className='mission-image' src={Horsegateimage}></img>
                </div>
                <div className='mission-details-container'>
                    <p className='mission-statement'>It is a thing of honour for me to anchor the ship of this fast growing school which offers great opportunities for the young
                        citizens of Nigeria and the world at large. We are aspiring to make every pupil succeed both in learning and character.
                        As motto implies ” outstanding in learning and character” We offer our pupils numerous opportunities to become
                        confident and thoughtful young individuals prepared for any future challenges in this exciting and increasingly competitive world.<br></br><br></br>
                        It is a thing of honour for me to anchor the ship of this fast growing school which offers great opportunities for the young
                        citizens of Nigeria and the world at large. We are aspiring to make every pupil succeed both in learning and character.
                        As motto implies ” outstanding in learning and character” We offer our pupils numerous opportunities to become
                        confident and thoughtful young individuals prepared for any future challenges in this exciting and increasingly competitive world. </p>

                        <img className='mission-statement-image' src={Horsegateimage2}></img>
                </div>
            </div>

            <div className='brief-history-container'>
                <h1 className='history-header'>Our Brief History</h1>
                <p className='history-paragraph'>Horsegate Academy was founded on August 18, 2016 with identification number 2436928 based on 04, 
                    AGWAN JAKO, TUNGA MAJE, FCT ABUJA STATE .</p>
            </div>
        </div>
    )
}

export default Aboutus;