import React from 'react';
import { Component } from "react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import profiler from './profiler.png'
import teacher from './teacher.png'
import student from './student.png'
import classroom from './classroom.png'
import dashboard from './dashboard.png'
import { Link, useParams } from "react-router-dom";
import axios from "axios"
import WebFont from 'webfontloader';

const TeacherUpdate = () =>
{
    const [teachers, teachersupdate] = useState([]);
    const [students, studentsupdate] = useState([]);
    const [classes, classesupdate] = useState([]);

    const { id } = useParams();
    const [user, userupdate] = useState('')
    const [firstName, firstNamechange] = useState('');
    const [lastName, lastNamechange] = useState("");
    const [email, emailchange] = useState("");
    const [phoneNumber, phoneNumberchange] = useState("");
    const [classId, classIdchange] = useState("");

    const [values, setValues] = useState([])

    useEffect(() =>
    {

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
            userupdate(resp);

        }).catch((res) =>
        {
            toast.error('Registration Failed: ' + res.error);
        });
    }, []);

    const handleUpdate = (e) =>
    {
        e.preventDefault();
        let reg = { firstName, lastName, email, phoneNumber, classId };
        console.log(reg);
        let jwttoken = sessionStorage.getItem('jwttoken');
        console.log(jwttoken);

        fetch(`https://localhost:7181/api/User/Update-User?id=${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Bearer ' + jwttoken
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
            toast.error('Registration Failed: ' + res.message);
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
            toast.error('Registration Failed: ' + res.message);
        });
    }, [])

    useEffect(() =>
    {
        fetch("https://localhost:7181/api/Class/GetAllClass").then((data) => data.json()).then((val) => setValues(val.data))
    }, [])
    console.log(values, "values")

    return (
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
                        <button className="menu-button"><Link to={'/admin'} style={{ textDecoration: 'none' }}><h4 className="menu-label">Dashboard</h4></Link></button>
                    </div>
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={teacher} alt="teacher"></img>
                        <button className="menu-button"><Link to={'/admin-teacher'} style={{ textDecoration: 'none' }}><h4 className="menu-label">Teachers</h4></Link></button>
                    </div>
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={student} alt="student"></img>
                        <button className="menu-button"><Link to={'/admin-student'} style={{ textDecoration: 'none' }}><h4 className="menu-label">Students</h4></Link></button>
                    </div>
                    <div className="sidebar-menu">
                        <img className="menu-icon" src={classroom} alt="classroom"></img>
                        <button className="menu-button"><h4 className="menu-label">Class</h4></button>
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
                <h1 className="information-bar-header">Welcome Admin</h1>
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

                <div className="table-container">
                    <h1 className="information-bar-header">Update Teachers</h1>
                    <form className="form" onSubmit={handleUpdate}>
                        <label className="input-label">First Name</label>
                        <input className="inpute" type="text" placeholder={user.data.firstName} required name="firstname" value={firstName} onChange={e => firstNamechange(e.target.value)}></input>
                        <label className="input-label">Last Name</label>
                        <input className="inpute" type="text" placeholder={user.data.lastName} required name="lastname" value={lastName} onChange={e => lastNamechange(e.target.value)}></input>
                        <label className="input-label">Email</label>
                        <input className="inpute" type="email" placeholder={user.data.email} required name="Email" value={email} onChange={e => emailchange(e.target.value)}></input>
                        <label className="input-label">Phone Number</label>
                        <input className="inpute" placeholder={user.data.phonenumber} required type='tel' name="Phone Number" value={phoneNumber} onChange={e => phoneNumberchange(e.target.value)}></input>
                        <label className="input-label" for="class-names">Class</label>
                        <select className="select-area" onChange={e => classIdchange(e.target.value)} value={classId} required name="Creche" id="class-names">
                            {
                                values.length > 0 && values.map((value, i) => (
                                    <option value={value.id}>{value.name} </option>
                                ))
                            }
                        </select>
                        <button type="submit" className="button">Update</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeacherUpdate;