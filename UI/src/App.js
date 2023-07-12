import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Course from './Course/Course';
import Staff from './Staff/Staff';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Forget from './Forget/Forget';
import Logout from './Logout/Logout';
import Admin from './Admin/Admin';
import Cpass from './Cpass/Cpass';
import Cpro from './Cpro/Cpro';
import Ctpro from './Ctpro/Ctpro';
import User from './User/User';
import Managestaff from './Managestaff/Managestaff';
import Register from './Register/Regi';
import Registerstudent from './Registerstudent/Regi';
import Managestudent from './Managestudent/Mngstudent';
import Footer from './Footer/Foot';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/courses" element={<Course/>}></Route>
        <Route path="/staff" element={<Staff/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
            <Route path="/admin" element={<Admin/>}></Route>
                <Route path="/managestaff" element={<Managestaff/>}></Route>
                <Route path="/password" element={<Cpass/>}></Route>
                <Route path="/profile" element={<Cpro/>}></Route>
                <Route path="/teacherprofile" element={<Ctpro/>}></Route>
            <Route path="/user" element={<User/>}></Route>
                <Route path="/registerstudent" element={<Registerstudent/>}></Route>
                <Route path="/managestudent" element={<Managestudent/>}></Route>
            <Route path="/logout" element={<Logout/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;