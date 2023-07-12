import './Header.css';
import Secure from '../Security/secure';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
	const [nav, setNav] = useState();
	useEffect(()=>{
		if (localStorage.getItem('role')==='admin') {
			setNav(
				<div>
					<header id="header" className="fixed-top bcolor">
				        <div className="container d-flex align-items-center">
				          <h1 className="logo me-auto"><a href="index.html">{localStorage.getItem('name')}</a></h1>
				          <nav id="navbar" className="navbar">
				            <ul>
				              <li><a><Link to="/admin" className="nav-link scrollto" id="hover">Home</Link></a></li>
				              <li className="dropdown"><a className="nav-link" id="hover"><span>Settings</span> <i className="bi bi-chevron-down"></i></a>
				                <ul>
				                  <li><a href="/password">Update Password</a></li>
				                  <li><a href="/profile">Update Profile</a></li>
				                </ul>
				              </li>
				              <li><a href="/managestaff"><Link to="/managestaff" className="nav-link scrollto" id="hover">Manage Staff</Link></a></li>
				              <li><a href="/logout"><Link to="/logout" className="nav-link scrollto" id="hover">Logout</Link></a></li>
				            </ul>
				            <i className="bi bi-list mobile-nav-toggle"></i>
				          </nav>

				        </div>
				      </header>
				</div>
			);
		}
		else if (localStorage.getItem('role')==='user') {
			setNav(
				<div>
					<header id="header" className="fixed-top bcolor">
				        <div className="container d-flex align-items-center">
				          <h1 className="logo me-auto"><a href="index.html">School logo </a></h1>
				          <nav id="navbar" className="navbar">
				            <ul>
				              <li><a><Link to="/user" className="nav-link scrollto" id="hover">Home</Link></a></li>
				              <li><a><Link to="/registerstudent" className="nav-link scrollto" id="hover">Register Students</Link></a></li>
				              <li><a><Link to="/managestudent" className="nav-link scrollto" id="hover">Manage Students</Link></a></li>
				              <li><a href="/login"><Link to="/logout" className="nav-link scrollto" id="hover">Logout</Link></a></li>
				            </ul>
				            <i className="bi bi-list mobile-nav-toggle"></i>
				          </nav>

				        </div>
				      </header>
				</div>
			);
		}
		else {
			setNav(
				<div>
					<header id="header" className="fixed-top ">
				        <div className="container d-flex align-items-center">

				          <h1 className="logo me-auto"><a href="index.html">School logo </a></h1>

				          <nav id="navbar" className="navbar">
				            <ul>
				              <li><a><Link to="/" className="nav-link scrollto" id="hover">Home</Link></a></li>
				              <li><a><Link to="/courses" className="nav-link scrollto" id="hover">Courses</Link></a></li>
				              <li><a><Link to="/staff" className="nav-link scrollto" id="hover">Teacher's Staff</Link></a></li>
				              <li className="dropdown" id="hover"><a className="nav-link" id="hover"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
				                <ul>
				                  <li><a href="#">Drop Down 1</a></li>
				                  <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
				                    <ul>
				                      <li><a href="#">Deep Drop Down 1</a></li>
				                      <li><a href="#">Deep Drop Down 2</a></li>
				                      <li><a href="#">Deep Drop Down 3</a></li>
				                      <li><a href="#">Deep Drop Down 4</a></li>
				                      <li><a href="#">Deep Drop Down 5</a></li>
				                    </ul>
				                  </li>
				                  <li><a href="#">Drop Down 2</a></li>
				                  <li><a href="#">Drop Down 3</a></li>
				                  <li><a href="#">Drop Down 4</a></li>
				                </ul>
				              </li>
				              <li><a href="/contact"><Link to="/contact" className="nav-link scrollto">Contact Us</Link></a></li>
				              <li><a href="/login"><Link to="/login" className="nav-link scrollto">Login</Link></a></li>
				              <li><a><Link to="/register" className="getstarted scrollto">Register</Link></a></li>
				            </ul>
				            <i className="bi bi-list mobile-nav-toggle"></i>
				          </nav>

				        </div>
				      </header>

				      <section id="hero" className="d-flex align-items-center">
				        <div className="container">
				          <div className="row">
				            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
				              <h1>CHOOSE YOUR CARRER</h1>
				              <h2>Visit our courses and choose your course..</h2>
				            </div>
				            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
				              <img src="https://th.bing.com/th/id/R.e57fedc3e72da768d8cda7dc6633565c?rik=LIPsdFhb1o693A&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmy-school-png-hd-back-to-school-1718474-1600.png&ehk=N2uX%2bRa72L2uC%2bG%2bjBmRtks5VwgMJlYb2vjYTIDqGkU%3d&risl=&pid=ImgRaw&r=0" className="img-fluid animated" alt=""/>
				            </div>
				          </div>
				        </div>
				      </section>
				</div>
			);
		}
	});
  return (
  	<>	
  		<Secure/>
  		{nav}
  	</>
  );
}