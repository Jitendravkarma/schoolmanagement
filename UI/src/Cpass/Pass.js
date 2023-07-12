import './Pass.css';
import { apiuser } from '../apiURL';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Pass() {
	const navigate = useNavigate();
	const [os, setOs] = useState();
	const [ps, setPs] = useState();
	const [cs, setCs] = useState();
	const [out, setOut] = useState('');
	const [opass, setOpass] = useState('');
	const [npass, setNpass] = useState('');
	const [cpass, setCpass] = useState('');
	const handleSubmit =()=>{
		if (opass === '') {
			setOs('Current password required!');
		}
		if (npass === '') {
			setPs('Set new password!');
		}
		if (cpass === '') {
			setCs('Set confirm new password!');
		}
		else if (opass === npass) {
			setOut('Current password & New password not be equal!');
		}
		else {
			axios.get(apiuser+'fetch?email='+localStorage.getItem('email')+'&password='+opass).then(()=>{
				if (npass === cpass) {
					const uppass = {'condition_obj':{'email':localStorage.getItem('email')},'set_condition':{'password':npass}};
					axios.patch(apiuser+'update',uppass).then(()=>{
						setOut('Password changed successfully!');
						setTimeout(()=>{
							navigate('/logout');
						}, 1000);
					});
				}
				else {
					setOut('New & Confirm password mismatch!');
				}
			}).catch(()=>{
				setOut('Invalid current password!');
			});
		}
	}
  return (
    <div className="contain">
      <h1>Change Current Password!</h1>
      <form>
       	<span style={{'display':'block','color':'red','fontSize':'18px'}}>{out}</span>
      	<table border='1' cellspacing='0' cellpadding='10'>
	      	<tr>
	      		<th>Current Password:-</th>
	      		<td>
	      			<input type="password" placeholder="Enter Current Password" value={opass} onChange={e=>setOpass(e.target.value)}/>
	      			<span style={{'color':'red'}}> {os}</span>
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