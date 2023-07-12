import './Regi.css';
import { useState } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Regi() {
	const navigate = useNavigate();
	const [out, setOut] = useState('');
	const [ot, setOt] = useState('');
	const [nm, setNm] = useState('');
	const [email, setEmail] = useState('');
	const [mob, setMob] = useState('');
	const [gen, setGen] = useState('');
	const [pass, setPass] = useState('');
	const [cls, setCls] = useState('');
	const [brn, setBrn] = useState('');
	const [sub, setSub] = useState('');
	const handleSubmit = ()=>{
		if (nm === '') {
			setOut(`Name is required field!`);
		}
		else if (email === '') {
			setOut(`Email is required field!`);
		}
		else if (mob === '') {
			setOut(`Mobile number is required field!`);
		}
		else if (pass === '') {
			setOut(`Password is required field!`);
		}
		else if (gen === '' || gen === '0') {
			setOut(`Select your gender!`);
		}
		else if (cls === '' || cls === '0') {
			setOut(`Please select your teaching class!`);
		}
		else if (sub === '' || sub === '0') {
			setOut(`Please select your teaching subject!`);
		}
		else {
			const userDetails = {'name':nm,'email':email,'mobile':mob,'password':pass,'gender':gen,'class':cls,'branch':brn,'subject':sub};
			axios.post(apiuser+'save', userDetails).then(()=>{
				setOt(`Staff register successfully!`);
				setOut(``);
				setNm(``);
				setEmail(``);
				setMob(``);
				setGen(``);
				setPass(``);
				setCls(``);
				setSub(``);
				setTimeout(()=>{
					navigate();
				}, 1000);
			});
		}
	};
	return(
		<>
			<section id="contact" className="contact m-auto">
				<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch m-auto">
	                <form className="php-email-form">
	                  <h1 align="center" className="text-decoration-underline text-info text-uppercase">Teacher's Registration</h1>
	                  <span className="my-3 text-decoration-underline d-inline-block text-danger">{out}</span>
	                  <span className="my-3 text-decoration-underline d-inline-block text-success">{ot}</span>
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" className="form-control" id="name" required value={nm} onChange={e=>setNm(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Your Email</label>
                        <input type="email" className="form-control" name="email" id="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="name">Your Mobile</label>
                        <input type="text" className="form-control" name="mobile" id="mobile" maxLength="10" required value={mob} onChange={e=>setMob(e.target.value)}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Your Password</label>
                        <input type="password" className="form-control" name="pwd" id="pwd" required value={pass} onChange={e=>setPass(e.target.value)}/>
                      </div>
                      <div class="form-group">
					    <label htmlFor="inputState">Your Gender >></label>
					    <select id="inputState" className="form-control" value={gen} onChange={e=>setGen(e.target.value)}>
					  	  <option selected value='0'>Select..</option>
					      <option>Male</option>
					      <option>Female</option>
					    </select>
					  </div>
                      <div class="form-group">
					    <label htmlFor="inputState">Select Class >></label>
					    <select id="inputState" className="form-control" value={cls} onChange={e=>setCls(e.target.value)}>
					  	  <option selected value='0'>Select..</option>
					      <option>9th</option>
					      <option>10th</option>
					      <option>11th</option>
					      <option>12th</option>
					    </select>
					  </div>
					  {
					  	(cls === '11th' || cls === '12th') &&
				      	<div class="form-group">
							<label htmlFor="inputState">Select Branch >></label>
						    <select id="inputState" className="form-control" value={brn} onChange={e=>setBrn(e.target.value)}>
						  	  <option selected value='0'>Select..</option>
						  	  <option>Arts</option>
						      <option>Science</option>
						      <option>Commerce</option>
						      <option>Agriculture</option>
						   	</select>
						</div>
					  	}
	                  <div class="form-group">
					    <label htmlFor="inputState">Select Subject >></label>
					    <select id="inputState" className="form-control" value={sub} onChange={e=>setSub(e.target.value)}>
					    	<option selected value='0'>Select..</option>
						  	{
						  		cls === '9th' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>Sanskrit</option>
								    <option>Maths</option>
								    <option>Science</option>
								    <option>Social Science</option>
					      		</>
						  	}
						  	{
						  		cls === '10th' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>Sanskrit</option>
								    <option>Maths</option>
								    <option>Science</option>
								    <option>Social Science</option>
					      		</>
						  	}
						  	{
						  		(cls === '11th' || cls === '12th') && brn === 'Arts' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>History</option>
								    <option>Economics</option>
								    <option>Political Science</option>
					      		</>
						  	}
						  	{
						  		(cls === '11th' || cls === '12th') && brn === 'Science' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>Maths</option>
								    <option>Biology</option>
								    <option>Physics</option>
								    <option>Chemistry</option>
					      		</>
						  	}
						  	{
						  		(cls === '11th' || cls === '12th') && brn === 'Commerce' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>Book keeping and Account</option>
								    <option>Business Study</option>
								    <option>Informatic Practices</option>
					      		</>
						  	}
						  	{
						  		(cls === '11th' || cls === '12th') && brn === 'Agriculture' &&
					      		<>
					      			<option>Hindi</option>
								    <option>English</option>
								    <option>Farming</option>
								    <option>Don't Know</option>
								    <option>Don't Know</option>
					      		</>
						  	}
					    </select>
					  </div>
	                  <div className="text-center"><button type="button" onClick={handleSubmit}>Submit</button></div>
	                </form>
	              </div>
	         </section>
		</>
	);
}