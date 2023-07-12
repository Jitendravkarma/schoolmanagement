import './Mngcat.css';
import { apicategory } from '../apiURL';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function EditCat() {
	const navigate = useNavigate();
	const [cat, setCat] = useState([]);
	useEffect(()=>{
		axios.get(apicategory+'fetch').then((res)=>{
			setCat(res.data);
		});
	});
	const handleClick = (id)=>{
		const deletecat = {'data':{'_id':id}};
		axios.delete(apicategory+'delete', deletecat).then(()=>{
			navigate('/managecategory');
		}).catch(()=>{
			alert('Catch')
		});
	}
  return (
    <div className="contain">
      <h1>Manage Categories</h1>
       <div className='boxes'>
      	{
      		cat.map((cat)=>(
      			<div className="box">
      				<div className="img">
      					<img src={"assets/uploads/"+(cat.caticonnm)}/>
      				</div>
      				<div className="title">
      					<h3><a href="/user" className='cats'>{cat.catnm}</a></h3>
      				</div>
      				<div className="delete">
      					<h3><a onClick={()=>handleClick(cat._id)} className='dltcat'>Delete</a></h3>
      				</div>
      			</div>
      		))
      	}
      </div>
    </div>
  );
}