import './Cat.css';
import { apicategory } from '../apiURL';
import { useState } from 'react';
import axios from 'axios';
export default function Cat() {
	const [out, setOut] = useState();
	const [catnm, setCatnm] = useState();
	const [caticon, setCaticon] = useState();
	const handlefile = (event)=>{
		setCaticon(event.target.files[0]);
	}
	const handleSubmit = (event)=>{
		event.preventDefault(); //to stop reloading
		var formData = new FormData(); // it is a prototype function
		formData.append('catnm', catnm); // append do chiz leti h, jis name se data bhejna h vo or jo data attech karke bhejna hai vo
		formData.append('caticon', caticon);// first caticon is a key there will stored data of second caticon
		const config = {'content-type':'multipart/form-data'};// data will send part by part
		axios.post(apicategory+'save',formData, config).then((res)=>{
			setCatnm('');
			setOut('Category added successfully');
		});
	}
  return (
    <div className="contain">
      <h1>Add Categories</h1>
      <form className="form">
       	<span style={{'display':'block','color':'red','fontSize':'18px'}}>{out}</span>
      	<table border='1' cellspacing='0' cellpadding='10'>
	      	<tr>
	      		<th>Category Name:-</th>
	      		<th>
	      			<input type="text" placeholder="Category Name" value={catnm} onChange={e=>setCatnm(e.target.value)}/>
	      		</th>
	      	</tr>
	      	<tr>
	      		<th>Category Icon:-</th>
	      		<th>
	      			<input type="file" onChange={handlefile}/>
	      		</th>
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