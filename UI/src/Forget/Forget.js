import './Forget.css';
import { useState } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Forget() {
	const navigate = useNavigate();
	const [em, setEm] = useState();
	const [ps, setPs] = useState();
	const [cs, setCs] = useState();
	const [out, setOut] = useState('');
	const [email, setEmail] = useState('');
	const [npass, setNpass] = useState('');
	const [cpass, setCpass] = useState('');
	const handleSubmit =()=>{
		if (email === '') {
			setEm('Email is required!');
		}
		if (npass === '') {
			setPs('Set new password!');
		}
		if (cpass === '') {
			setCs('Set confirm new password!');
		}
		else {
			const userDetails = {'email':email,'password':npass};
			axios.post(apiuser+'login', userDetails).then(()=>{
				setOut('New password is matched with your old password!');
			}).catch(()=>{
				axios.get(apiuser+'fetch?email='+email+'&status=1').then(()=>{
					const updatepass = {'condition_obj':{'email':email},'set_condition':{'password':npass}};
					axios.patch(apiuser+'update',updatepass).then(()=>{
						setOut('Password changed successful!');
						setEmail('');
						setNpass('');
						setCpass('');
						setTimeout(()=>{
							navigate('/login');
						}, 1000);
					});
				}).catch(()=>{
					setOut('Email not registered!');
					setEmail('');
					setNpass('');
					setCpass('');
				})
			});
		}
	}
  return (
    <div className="contain">
    <h1>Forget Password!</h1>
      <form>
       	<span style={{'display':'block','color':'lightgreen','fontSize':'18px'}}>{out}</span>
      	<table border='1' cellspacing='0' cellpadding='10'>
	      	<tr>
	      		<th>Email:-</th>
	      		<td>
	      			<input type="text" placeholder="Enter Email" value={email} onChange={e=>setEmail(e.target.value)}/>
	      			<span style={{'color':'red'}}> {em}</span>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>New Password:-</th>
	      		<td>
	      			<input type="password" placeholder="Set New Password" value={npass} onChange={e=>setNpass(e.target.value)}/>
	      			<span style={{'color':'red'}}> {ps}</span>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Confirm Password:-</th>
	      		<td>
	      			<input type="password" placeholder="Set Confirm New Password" value={cpass} onChange={e=>setCpass(e.target.value)}/>
	      			<span style={{'color':'red'}}> {cs}</span>
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