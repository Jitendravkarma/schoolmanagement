import './Login.css';
import { useState } from 'react';
import { apiuser } from '../apiURL';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
	const navigate = useNavigate();
	const [em, setEm] = useState();
	const [ps, setPs] = useState();
	const [out, setOut] = useState('');
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const handleSubmit =()=>{
		if (email === '') {
			setEm('Email is required!');
		}
		if (pass === '') {
			setPs('Password is required!');
		}
		else {
			const login = {'email':email,'password':pass};
			axios.post(apiuser+'login', login).then((res)=>{
				let checkuser = res.data.userDetails;
				if (checkuser.role ==='admin') {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('id', checkuser._id);
					localStorage.setItem('name', checkuser.name);
					localStorage.setItem('role', checkuser.role);
					localStorage.setItem('email', checkuser.email);
					localStorage.setItem('mobile', checkuser.mobile);
				}
				else {
					localStorage.setItem('token', res.data.token);
					localStorage.setItem('id', checkuser._id);
					localStorage.setItem('name', checkuser.name);
					localStorage.setItem('role', checkuser.role);
					localStorage.setItem('email', checkuser.email);
					localStorage.setItem('mobile', checkuser.mobile);
					localStorage.setItem('class', checkuser.class);
					localStorage.setItem('subject', checkuser.subject);
				}
				(checkuser.role === 'admin')? navigate('/admin'):navigate('/user');
			}).catch(()=>{
				setOut('Invalid user or not verified user');
			});
		}
	}
  return (
    <div className="contain m-auto">
      <h1 align="center">Login Here!</h1>
      <form>
       	<span style={{'display':'block','color':'red','fontSize':'18px','textAlign':'center'}}>{out}</span>
      	<table className="m-auto" border='1' cellspacing='0' cellpadding='10'>
	      	<tr>
	      		<th>Email:-</th>
	      		<td>
	      			<input type="text" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
	      			<span style={{'color':'red'}}> {em}</span>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Password:-</th>
	      		<td>
	      			<input type="password" placeholder="Password" value={pass} onChange={e=>setPass(e.target.value)}/>
	      			<Link to ="/forget"><a href="/forget" className="text-info text-decoration-underline" style={{'color':'white'}}> Forget password?</a></Link>
	      			<span style={{'color':'red'}}> {ps}</span>
	      		</td>
	      	</tr>
	      	<tr>
	      		<td colspan="3" align='center'>
	      			<input type='button' value='Submit' onClick={handleSubmit}/>
	      		</td>
	      	</tr>
    	</table>
      </form>
    </div>
  );
}