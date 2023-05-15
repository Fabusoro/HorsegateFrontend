import { Component } from "react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import profiler from './profiler.png';
import student from './student.png';
import dashboard from './dashboard.png'
import axios from 'axios';

const StudentSchoolFee = () => {

    const [userdetails, userdetailsupdate] = useState("");
    const [teachers, teachersupdate] = useState([]);
    const [classes, classesupdate] = useState([]);
    const [students, studentsupdate] = useState([]);

    const [amount, amountchange] = useState("");
    const [email, emailchange] = useState("");
    const [callback, callbackchange] = useState("");


    useEffect(() =>
    {

        let id = sessionStorage.getItem('id')

        console.log(id);

        let jwttoken = sessionStorage.getItem('jwttoken');

        fetch(`https://localhost:7181/api/User/Get-UserById?id=${id}`, {
            headers: {
                'Authorization': 'Bearer ' + jwttoken
            }
        }).then((res) =>
        {
            return res.json();
        }).then((resp) =>
        {
            console.log(resp);
            userdetailsupdate(resp)
        })
            .catch((res) =>
            {
                toast.error('Registration Failed: ' + res.error);
            });
    }, []);

    useEffect(() =>
    {

        let jwttoken = sessionStorage.getItem('jwttoken');

        fetch("https://localhost:7181/api/User/Get-Teachers", {
            headers: {
                'Authorization': 'Bearer ' + jwttoken
            }
        }).then((res) =>
        {
            return res.json();
        }).then((resp) =>
        {
            teachersupdate(resp.data);
        }).catch((res) =>
        {
            
        });
    }, [])

    useEffect(() =>
    {

        let jwttoken = sessionStorage.getItem('jwttoken');

        fetch("https://localhost:7181/api/User/Get-Students", {
            headers: {
                'Authorization': 'Bearer ' + jwttoken
            }
        }).then((res) =>
        {
            return res.json();
        }).then((resp) =>
        {
            studentsupdate(resp.data);
        }).catch((res) =>
        {
            
        });
    }, [])

    useEffect(() =>
    {

        let jwttoken = sessionStorage.getItem('jwttoken');

        fetch("https://localhost:7181/api/Class/GetAllClass", {
            headers: {
                'Authorization': 'Bearer ' + jwttoken
            }
        }).then((res) =>
        {
            return res.json();
        }).then((resp) =>
        {
            classesupdate(resp.data);
        }).catch((res) =>
        {
            toast.error('Registration Failed: ' + res.message);
        });
    }, [])

    const handlesubmit = (e) =>
    {
        e.preventDefault();
        let id = sessionStorage.getItem('id')

        let pay = {
            "amount": amount,
            "email": email,
            "callback": callback,
            "id" : id
        }

        console.log(pay);

        fetch("https://localhost:7212/api/Payment/make-payment", {
            method: "POST",
            headers: {'content-type': 'application/json',
                      'Allow-Access-Origin': '*'
                    },
            body: JSON.stringify(pay)
        }).then((res) =>
        {
            console.log(res);
        }).catch((res) =>
        {
            toast.error('Payment Unsuccessful: ' + res.message);
        });
    }


    return(
        <div className="div-container">
            <input className="input" type="checkbox" id="inpute" />
            <label for="inpute">
                <div className="toggle">
                    <span className="top-line common"></span>
                    <span className="middle-line common"></span>
                    <span className="bottom-line common"></span>
                </div>
            </label>
            <div className="module-sidebar">
                <div className="sidebar-header">
                    <img className="header-icon"></img>
                    <h2 className="header-label">MENU</h2>
                </div>
                <div className="sidebar-menu-container">
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={dashboard} alt="dashboard"></img>
                        <button className="menu-button"><Link to={'/student'} style={{ textDecoration: 'none' }}><h4 className="menu-label">Dashboard</h4></Link></button>
                    </div>
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={student} alt="student"></img>
                        <button className="menu-button"><Link to={'/teacher-student'} style={{ textDecoration: 'none' }}><h4 className="menu-label">School Fees</h4></Link></button>
                    </div>
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={profiler} alt="profile"></img>
                        <button className="menu-button"><h4 className="menu-label">Profile</h4></button>
                    </div>
                    <div className="sidebar-menu">
                        <button className="logout-button"><Link to={'/login'} style={{ textDecoration: 'none' }}><h4 className="logout-label">Logout</h4></Link></button>
                    </div>
                </div>
            </div>

            <div className="information-bar">
                <h1 className="information-bar-header">Welcome Admin </h1>
                <div className="admin-details">
                    <div className="name-and-email">
                        {/* <h3 className="detail">{admin.data.firstName} {admin.data.lastName}</h3>
                        <h3 className="detail">{admin.data.email}</h3>
                        <h3 className="detail">{admin.data.phoneNumber}</h3> */}
                    </div>
                </div>
                <div className="details-container">
                    <div className="number-container">
                        <h1 className="number-container-header">Students</h1>
                        <h1 className="number-container-number">{students.length}</h1>
                    </div>
                    <div className="number-container">
                        <h1 className="number-container-header">Teachers</h1>
                        <h1 className="number-container-number">{teachers.length}</h1>
                    </div>
                    <div className="number-container">
                        <h1 className="number-container-header">Classes</h1>
                        <h1 className="number-container-number">{classes.length}</h1>
                    </div>
                </div>
                <div className="form-container">
                    <h1 className="information-bar-header">Pay Fees</h1>
                    <form className="form" onSubmit={handlesubmit}>
                        <label className="input-label">Amount</label>
                        <input className="inpute" type="text" placeholder="Amount" name="amount" value={amount} onChange={e => amountchange(e.target.value)}></input>
                        <label className="input-label">Email</label>
                        <input className="inpute" type="email" placeholder="Email" name="email" value={email} onChange={e => emailchange(e.target.value)}></input>
                        <label className="input-label">Call Back Url</label>
                        <input className="inpute" type="text" placeholder="Input website url" name="callback" value={callback} onChange={e => callbackchange(e.target.value)}></input>
                        <button type="submit" className="button">Pay</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentSchoolFee