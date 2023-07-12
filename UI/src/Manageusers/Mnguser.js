import './Mnguser.css';
import { useEffect, useState } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Mnguser() {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	useEffect(()=>{
		axios.get(apiuser+'fetch?role=user').then((res)=>{
			setUsers(res.data);
		}).catch(()=>{

		});
	});
	const managestatus = (id, st)=>{
		if (st === 'block') {
			let setstatus = {'condition_obj':{'_id':id},'set_condition':{'status':0}};
			axios.patch(apiuser+'update',setstatus).then((res)=>{
				navigate('/manageusers');
			});
		}
		else if (st === 'verify') {
			let setstatus = {'condition_obj':{'_id':id},'set_condition':{'status':1}};
			axios.patch(apiuser+'update',setstatus).then((res)=>{
				navigate('/manageusers');
			});
		}
		else {
			let deleteuser = {'data':{'_id':id}};
			axios.delete(apiuser+'delete', deleteuser).then(()=>{
				navigate('/manageusers');
			});
		}
	}
  return (
    <div className="contain1">
      <h1>Manage Users</h1>
      <table border='1' cellspacing='0' cellpadding='10' className='table'>
      	<tr>
      		<th>Name</th>
      		<th>Email</th>
      		<th>Mobile</th>
      		<th>Gender</th>
      		<th>City</th>
      		<th>Address</th>
      		<th>Status</th>
      		<th>Delete</th>
      	</tr>
  		{
  			users.map((obj)=>(
  				<tr>
  					<td>{obj.name}</td>
  					<td>{obj.email}</td>
  					<td>{obj.mobile}</td>
  					<td>{obj.gender}</td>
  					<td>{obj.city}</td>
  					<td>{obj.address}</td>
  					<td>
  					{
  						obj.status === 0 && <a onClick={()=>{managestatus(obj._id, 'verify')}} style={{'color':'blue'}}>Verify User</a>
  					}
  					{
  						obj.status === 1 && <a onClick={()=>{managestatus(obj._id, 'block')}} style={{'color':'orange'}}>Block User</a>
  					}
  					</td>
  					<td>
  						<a onClick={()=>{managestatus(obj._id, 'delete')}} style={{'color':'red'}}>Delete</a>
  					</td>
  				</tr>
  			))
  		}
      </table>
    </div>
  );
}