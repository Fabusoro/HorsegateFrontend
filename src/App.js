import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Route, Switch, NavLink, Routes } from 'react-router-dom';
import Login from './Login.js';
import Admin from './Admin';
import Teacher from './Teacher';
import Student from './Student';
import Appheader from './Appheader';
import { ToastContainer } from 'react-toastify';
import RegisterStudent from './RegisterStudent';
import RegisterTeacher from './RegisterTeacher';
import AdminTeacher from './AdminTeacher';
import AdminStudent from './AdminStudent'
import TeacherStudent from './TeacherStudent';
import TeacherUpdate from './TeacherUpdate';
import StudentUpdate from './StudentUpdate';
import TeacherStudentUpdate from './TeacherStudentUpdate';
import TeacherRegisterStudent from './TeacherRegisterStudent';
import Appfooter from './Appfooter';
import StudentSchoolFee from './StudentSchoolFee';
import ContactUs from './ContactUs';
import Admission from './Admission';
import Aboutus from './AboutUs';

function App()
{
  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <div className='page-container'>    
      <div className='content-wrap'>
      <BrowserRouter>
        <Appheader></Appheader>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/about-us' element={<Aboutus/>}></Route>
          <Route path='/admission' element= {<Admission/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/teachers/:id' element={<TeacherUpdate />}></Route>
          <Route path='/students/:id' element={<StudentUpdate />}></Route>
          <Route path='teacher-student/:id' element={<TeacherStudentUpdate />}></Route>
          <Route path='/admin-teacher' element={<AdminTeacher />}></Route>
          <Route path='/admin-student' element={<AdminStudent />}></Route>
          <Route path='/teacher' element={<Teacher />}></Route>
          <Route path='teacher-student' element={<TeacherStudent />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/register-student' element={<RegisterStudent />}></Route>
          <Route path='/register-teacher' element={<RegisterTeacher />}></Route>
          <Route path='/teacher-register-student' element={<TeacherRegisterStudent />}></Route>
          <Route path='/student-school-fee' element = {<StudentSchoolFee/>}></Route>
        </Routes>      
        <Appfooter></Appfooter>
      </BrowserRouter>
      </div>
      </div>
      
    </div>
  );
}

export default App;
