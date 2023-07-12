import './Cpro.css';
import { useState, useEffect } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Regi() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get(apiuser+'fetch').then((res)=>{
      setUser(res.data[0]);
      setNm(user.name);
      setEmail(user.email);
      setMob(user.mobile);
      setGen(user.gender);
    })
  },[]);
  const navigate = useNavigate();
  const [out, setOut] = useState('');
  const [ot, setOt] = useState('');
  const [nm, setNm] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [gen, setGen] = useState('');
  const handleSubmit = ()=>{
    if (nm === '') {
      setOut(`Name is required field!`);
    }
    else if (mob === '') {
      setOut(`Mobile number is required field!`);
    }
    else if (gen === '' || gen === '0') {
      setOut(`Select your gender!`);
    }
    else {
      const updatedetails = {'condition_obj':{'email':localStorage.getItem("email")},'set_condition':{'name':nm,'mobile':mob,'gender':gen}};
      axios.patch(apiuser+'update', updatedetails).then(()=>{
        setOut(`Profile edit successfully!`);
        setNm(``);
        setEmail(``);
        setMob(``);
        setGen(``);
      });
    }
  };
  return(
    <>
      <section id="contact" className="contact m-auto">
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch m-auto">
          <form className="php-email-form">
            <h1 align="center" className="text-decoration-underline text-info text-uppercase">Edit Profile</h1>
            <span className="my-3 text-decoration-underline d-inline-block text-danger">{out}</span>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" className="form-control" id="name" required value={nm} onChange={e=>setNm(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Mobile</label>
                <input type="text" className="form-control" name="mobile" id="mobile" maxLength="10" required value={mob} onChange={e=>setMob(e.target.value)}/>
              </div>
              <div class="form-group">
                <label htmlFor="inputState">Your Gender >></label>
                <select id="inputState" className="form-control" value={gen} onChange={e=>setGen(e.target.value)}>
                  <option selected value='0'>Select..</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            <div className="text-center"><button type="button" onClick={handleSubmit}>Save Changes</button></div>
          </form>
        </div>
      </section>
    </>
  );
}