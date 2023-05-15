import { Component } from "react";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import profiler from './profiler.png'
import teacher from './teacher.png'
import student from './student.png'
import classroom from './classroom.png'
import dashboard from './dashboard.png'
import { Link } from "react-router-dom";
import axios from "axios"
import WebFont from 'webfontloader';

const AdminTeacher = () =>
{
    const [admin, adminupdate] = useState('')
    const [teachers, teachersupdate] = useState([]);
    const [students, studentsupdate] = useState([]);
    const [classes, classesupdate] = useState([]);
    const [teacherClicked, setTeacherClicked] = useState(false);
    useEffect(() =>
    {

        let id = sessionStorage.getItem('id')

        //console.log(id);

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
            //console.log(resp);
            adminupdate(resp)
        }).catch((res) =>
        {
            toast.error('Registration Failed: ' + res.error);
        });
    }, []);

    useEffect(() =>
    {
        WebFont.load({
            google: {
                families: ['Karla', 'Poppins']
            }
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

    const handleTeacherEdit = () =>
    {

        toast.success('Teacher Updated')
    }

    const handleTeacherDelete = (id) =>
    {
        let jwttoken = sessionStorage.getItem('jwttoken');
        axios.delete(`https://localhost:7181/api/User/Delete-User?id=${id}`, {
            headers: {
                'Authorization': 'Bearer ' + jwttoken
            }
        })
            .then(() =>
            {
                // Remove the deleted item from the list
                teachersupdate(teachers.filter((item) => item.id !== id));
                toast.success('Teacher Deleted')
            })
            .catch((error) =>
            {
                toast.error('Teacher not deleted')
            });
    }

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
                    <h1 className="information-bar-header">Teachers</h1>
                    <button className="table-add-button"><Link to={'/register-teacher'} style={{ textDecoration: 'none' }}><p className="add-button-label">Add Teacher</p></Link></button>
                    <table className="table">
                        <thead className="table-head">
                            <tr className="table-head-row">
                                <td className="table-head-detail">First Name         </td>
                                <td className="table-head-detail">Last Name  </td>
                                <td className="table-head-detail">Email  </td>
                                <td className="table-head-detail">Class  </td>
                                <td className="table-head-detail">Action </td>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {teachers.map(item =>
                            {
                                { console.log(teachers) }
                                return <tr key={item.id}>
                                    <td className="table-body-detail">{item.firstName}</td>
                                    <td className="table-body-detail">{item.lastName}</td>
                                    <td className="table-body-detail">{item.email}</td>
                                    <td className="table-body-detail">{item.class}</td>
                                    <td ><Link to={`/teachers/${item.id}`} style={{ textDecoration: 'none' }}><button className="table-edit-button">Edit</button></Link></td>
                                    <td><button className="table-delete-button" onClick={() => handleTeacherDelete(item.id)}>Delete</button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>




        // <div>
        //     <h1>Admin Page</h1>
        //     <div>

        //     </div>
        //     <div>
        //         {/* {console.log(userdetails)}
        //         <h1>{userdetails.data.firstName}</h1>
        //         <h3>{userdetails.data.lastName}</h3>
        //         <h3>{userdetails.data.phoneNumber}</h3>
        //         <h3>{userdetails.data.email}</h3> */}
        //     </div>

        //     <div>
        //     <button onClick={() => setTeacherClicked(true)}>See Teachers</button>
        //         {teacherClicked && <table >
        //             <thead>
        //                 <tr>
        //                     <td>First Name         </td>
        //                     <td>Last Name  </td>
        //                     <td>Email  </td>
        //                     <td>Class  </td>
        //                     <td>roles  </td>
        //                     <td>Action </td>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {teachers.map(item => {                           
        //                     return <tr key={item.id}>   
        //                      {console.log(item)}
        //                     <td>{item.firstName}</td>
        //                      <td>{item.lastName}</td>                            
        //                     <td>{item.email}</td>
        //                     <td>{item.class}</td>
        //                     <td>{item.roles}</td>
        //                     <td onClick={handleTeacherEdit}><button>Edit</button></td>
        //                     <td><button onClick={() => handleTeacherDelete(item.id)}>Delete</button></td>
        //                     </tr>
        //                 })}
        //             </tbody>
        //         </table>
        //         }
        //     </div>

        //     <div>
        //     <button onClick={() => setStudentClicked(true)}>See Students</button>
        //         {studentClicked && <table >
        //             <thead>
        //                 <tr>
        //                     <td>First Name         </td>
        //                     <td>Last Name  </td>
        //                     <td>Email  </td>
        //                     <td>Class  </td>
        //                     <td>roles  </td>
        //                     <td>Action </td>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {students.map(item => {                           
        //                     return <tr key={item.id}>   
        //                      {console.log(item)}
        //                     <td>{item.firstName}</td>
        //                      <td>{item.lastName}</td>                            
        //                     <td>{item.email}</td>
        //                     <td>{item.class}</td>
        //                     <td>{item.roles}</td>
        //                     <td><button onClick={handleStudentEdit}>Edit</button></td>
        //                     <td><button onClick={() => handleStudentDelete(item.id)}>Delete</button></td>
        //                     </tr>
        //                 })}
        //             </tbody>
        //         </table>
        //         }
        //     </div>
        //     <div>
        //         <button><Link to ="/register-student">Register Student</Link></button>
        //         <button><Link to ="/register-teacher">Register Teacher</Link></button>
        //     </div>
        // </div>
    )
}

export default AdminTeacher