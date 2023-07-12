import './Catads.css';
import { apicategory } from '../apiURL';
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Catads() {
	const [ads, setAds] = useState([]);
	useEffect(()=>{
		axios.get(apicategory+'fetch').then((res)=>{
			setAds(res.data);
		});
	});
  return (
    <div className="contain">
      <h1>Category Ads</h1>
      <div className='boxes'>
      	{
      		ads.map((cat)=>(
      			<div className="box">
      				<div className="img">
      					<img src={"assets/uploads/"+(cat.caticonnm)}/>
      				</div>
      				<div className="title">
      					<h3><a href="/user" className='cats'>{cat.catnm}</a></h3>
      				</div>
      			</div>
      		))
      	}
      </div>
    </div>
  );
}