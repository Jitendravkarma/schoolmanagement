import './Regi.css';
import { useState } from 'react';
// import { apiuser } from '../apiURL';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
export default function Regi() {
	// const navigate = useNavigate();
	const [out, setOut] = useState('');
	const [ot, setOt] = useState('');
	const [roll, setRoll] = useState('');
	const [nm, setNm] = useState('');
	const [cls, setCls] = useState('');
	const [fnm, setFnm] = useState('');
	const [gen, setGen] = useState('');
	const [bra, setBra] = useState('');
	const [hd, setHd] = useState('');
	const [en, setEn] = useState('');
	// const [ch, setCh] = useState('');
	// const [ph, setPh] = useState('');
	// const [bio, setBio] = useState('');
	const [mt, setMt] = useState('');
	const [ss, setSs] = useState('');
	const [sc, setSc] = useState('');
	const [sn, setSn] = useState('');
	const handleSubmit = ()=>{
		if (roll === '') {
			setOut('Roll number is required!');
		}
		else if (nm === '') {
			setOut(`Name is required field!`);
		}
		else if (fnm === '') {
			setOut(`Father name is required field!`);
		}
		else if (gen === '') {
			setOut(`Please select your gender!`);
		}
		else if (cls === '' || cls ==='0') {
			setOut(`Please select class!`);
		}
		else if (hd === '' || en === '' || mt === '' || ss === '' || sc === '' || sn === '') {
			setOut(`Each subject marks is required!`);
		}
		else {
			const userDetails = {'roll':roll,'name':nm,'father':fnm,'gender':gen,'hindi':hd,'english':en,'socialscience':ss,'science':sc,'sanskrit':sn};
			alert(`${userDetails.name} ${userDetails.gender}`);
		}
	};
	return(
		<>
			<section id="contact" className="contact m-auto">
				<div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch m-auto">
	                <form className="php-email-form">
	                  <h1 align="center" className="text-decoration-underline text-info text-uppercase">Student Details</h1>
	                  <span className="my-3 text-decoration-underline d-inline-block text-danger">{out}</span>
	                  <span className="my-3 text-decoration-underline d-inline-block text-success">{ot}</span>
	        
	                  <div className="form-group">
                        <label htmlFor="name">Student Roll No</label>
                        <input type="text" className="form-control" name="roll" id="roll" required value={roll} onChange={e=>setRoll(e.target.value)}/>
                      </div>
            
                      <div className="form-group">
                        <label htmlFor="name">Student Name</label>
                        <input type="text" name="name" className="form-control" id="name" required value={nm} onChange={e=>setNm(e.target.value)}/>
                      </div>
            
                      <div className="form-group">
                        <label htmlFor="name">Father Name</label>
                        <input type="text" className="form-control" name="father" id="father" required value={fnm} onChange={e=>setFnm(e.target.value)}/>
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
	                   		(cls === '9th' || cls === '10th') && 
	                   		<div id="toggle">
		                   		<div className="row">
			                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
			                  	  <div className="form-group col-md-4">
			                        <label htmlFor="pwd">Hindi</label>
			                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
			                      </div>
			                      <div className="form-group col-md-4">
			                        <label htmlFor="pwd">English</label>
			                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
			                      </div>
			                  	  <div className="form-group col-md-4">
			                        <label htmlFor="pwd">Maths</label>
			                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
			                      </div>
			                    </div>
			                   
			                    <div className="row">
			                      <div className="form-group col-md-4">
			                        <label htmlFor="pwd">Science</label>
			                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
			                      </div>
			                  	  <div className="form-group col-md-4">
			                        <label htmlFor="pwd">Social Science</label>
			                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
			                      </div>
			                      <div className="form-group col-md-4">
			                        <label htmlFor="pwd">Sanskrit</label>
			                        <input type="text" className="form-control" name="sanskrit" id="sanskrit" required value={sn} onChange={e=>setSn(e.target.value)}/>
			                      </div>
			                    </div>
	                   		</div>
	                   }
	                   {
	                   		(cls === '11th' || cls === '12th') && 
	                   		<div>
	                   			<div class="form-group">
								   <label htmlFor="inputState">Select Branch >></label>
								   <select id="inputState" className="form-control" value={bra} onChange={e=>setBra(e.target.value)}>
									  <option selected value='0'>Select..</option>
								      <option value='bio'>Biology</option>
								      <option value='math'>Maths</option>
								      <option value='comm'>Commerce</option>
								      <option value='arts'>Arts</option>
								      <option value='agri'>Agriculture</option>
								   </select>
								</div>
		                   		
		                   		{
		                   			bra === 'bio' &&
		                   			<div id="toggle">
				                   		<div className="row">
					                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Hindi</label>
					                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
					                      </div>
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">English</label>
					                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Biology</label>
					                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
					                      </div>
					                    </div>
					                   
					                    <div className="row">
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Chemistry</label>
					                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Physics</label>
					                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
					                      </div>
					                    </div>
			                   		</div>
		                   		}
		                   		{
		                   			bra === 'math' &&
		                   			<div id="toggle">
				                   		<div className="row">
					                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Hindi</label>
					                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
					                      </div>
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">English</label>
					                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Maths</label>
					                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
					                      </div>
					                    </div>
					                   
					                    <div className="row">
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Chemistry</label>
					                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Physics</label>
					                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
					                      </div>
					                    </div>
			                   		</div>
		                   		}
		                   		{
		                   			bra === 'comm' &&
		                   			<div id="toggle">
				                   		<div className="row">
					                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Hindi</label>
					                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
					                      </div>
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">English</label>
					                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Accounts</label>
					                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
					                      </div>
					                    </div>
					                   
					                    <div className="row">
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Book keeping</label>
					                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Informatics Practices</label>
					                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
					                      </div>
					                    </div>
			                   		</div>
		                   		}
		                   		{
		                   			bra === 'arts' &&
		                   			<div id="toggle">
				                   		<div className="row">
					                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Hindi</label>
					                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
					                      </div>
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">English</label>
					                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">History</label>
					                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
					                      </div>
					                    </div>
					                   
					                    <div className="row">
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Political Science</label>
					                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Economics</label>
					                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
					                      </div>
					                    </div>
			                   		</div>
		                   		}
		                   		{
		                   			bra === 'agri' &&
		                   			<div id="toggle">
				                   		<div className="row">
					                  	  <h2 align="center" className="mb-4">Student's Marks</h2>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Hindi</label>
					                        <input type="text" className="form-control" name="hindi" id="hindi" required value={hd} onChange={e=>setHd(e.target.value)}/>
					                      </div>
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">English</label>
					                        <input type="text" className="form-control" name="english" id="english" required value={en} onChange={e=>setEn(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Farming</label>
					                        <input type="text" className="form-control" name="maths" id="maths" required value={mt} onChange={e=>setMt(e.target.value)}/>
					                      </div>
					                    </div>
					                   
					                    <div className="row">
					                      <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Dont Know</label>
					                        <input type="text" className="form-control" name="science" id="science" required value={sc} onChange={e=>setSc(e.target.value)}/>
					                      </div>
					                  	  <div className="form-group col-md-4">
					                        <label htmlFor="pwd">Dont Know</label>
					                        <input type="text" className="form-control" name="social" id="social" required value={ss} onChange={e=>setSs(e.target.value)}/>
					                      </div>
					                    </div>
			                   		</div>
		                   		}
	                   		</div>
	                   }
	                  <div className="text-center"><button type="button" onClick={handleSubmit}>Submit</button></div>
	                </form>
	              </div>
	         </section>
		</>
	);
}