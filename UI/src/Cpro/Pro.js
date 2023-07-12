import './Pro.css';
import { useState, useEffect } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Pro() {
	const navigate = useNavigate();
	const [user, setUser] = useState([]);
	const [out, setOut] = useState('');
	const [name, setName] = useState('');
	const [mob, setMob] = useState('');
	const [gen, setGen] = useState('');
	const [city, setCity] = useState('');
	const [add, setAdd] = useState('');
	useEffect(()=>{
		axios.get(apiuser+'fetch?email='+localStorage.getItem('email')).then((res)=>{
			setUser(res.data[0]);
			setName(user.name);
			setMob(user.mobile);
			setGen(user.gender);
			setCity(user.city);
			setAdd(user.address);
		});
	},[]);
	const handleSubmit =()=>{
		const updateDetails = {'name':name,'mobile':mob,'gender':gen,'city':city,'address':add};
		axios.patch(apiuser+'update', updateDetails).then(()=>{
			setOut('Details update successfully!');
			setName('');
			setMob('');
			setGen('');
			setCity('');
			setAdd('');
			setTimeout(()=>{
				navigate('/logout');
			}, 1000);
		});
	}
  return (
    <div className="contain">
      <form>
      	<h1>Update Profile Here!</h1>
      	<span style={{'display':'block','color':'lightgreen','fontSize':'18px'}}>{out}</span>
	    <table border='1' cellspacing='0' cellpadding='10'>
	      	<tr>
	      		<th>Name:-</th>
	      		<td>
	      			<input type="text" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)}/>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Mobile:-</th>
	      		<td>
	      			<input type="text" placeholder="Enter Mobile" value={mob} maxLength='10' onChange={e=>setMob(e.target.value)}/>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Select Gender:-</th>
	      		<td>
	      			<lable htmlFor="male">Male</lable><input type="radio" name="gender" id="male" value='male' checked onChange={e=>setGen(e.target.value)}/>&nbsp;&nbsp;
	      			<lable htmlFor="female">Female</lable><input type="radio" name="gender" id="female" value='female' onChange={e=>setGen(e.target.value)}/>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Select City:-</th>
	      		<td>
	      			<select value={city} onChange={e=>setCity(e.target.value)}>
	      				<option selected value='0'>Select...</option>
	      				<option>Indore</option>
	      				<option>Ujjain</option>
	      				<option>Dewas</option>
	      				<option>Bhopal</option>
	      				<option>Khargone</option>
	      				<option>Khandwa</option>
	      			</select>
	      		</td>
	      	</tr>
	      	<tr>
	      		<th>Address:-</th>
	      		<td>
	      			<textarea cols='23' rows='5' placeholder='Enter address' value={add} onChange={e=>setAdd(e.target.value)}></textarea>
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