import './Nav.css';
import Secure from '../Security/secure';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Nav() {
	const [nav, setNav] = useState();
	useEffect(()=>{
		if (localStorage.getItem('role') === 'admin') {
			setNav(
				<nav>
					<Link to="/" className="link"><a href="/">Home</a></Link>
					<Link to="/category" className="link"><a href="/">Add Category</a></Link>
					<Link to="/managecategory" className="link"><a href="/">Manage Category</a></Link>
			      	<Link to="/manageusers" className="link"><a href="/">Manage Users</a></Link>
			      	<Link to="/password" className="link"><a href="/">Change Password</a></Link>
			      	<Link to="/profile" className="link"><a href="/">Change Profile</a></Link>
			      	<Link to="/logout" className="link"><a href="/">Logout</a></Link>
				</nav>
			)
		}
		else if (localStorage.getItem('role') === 'user') {
			setNav(
				<nav>
					<Link to="/" className="link"><a href="/">Home</a></Link>
					<Link to="/catads" className="link"><a href="/">Search Ads</a></Link>
			      	<Link to="/password" className="link"><a href="/">Change Password</a></Link>
			      	<Link to="/profile" className="link"><a href="/">Change Profile</a></Link>
			      	<Link to="/logout" className="link"><a href="/">Logout</a></Link>
				</nav>
			)
		}
		else {
			setNav(
				<nav>
					<Link to="/" className="link"><a href="/">Home</a></Link>
			      	<Link to="/register" className="link"><a href="/">Register</a></Link>
			      	<Link to="/login" className="link"><a href="/">Login</a></Link>
				</nav>
			)
		}
	});
	return(
		<>
			<Secure/>
			{nav}
		</>
	)
};