import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiuser } from '../apiURL';
import axios from 'axios';
export default function Forget() {
  const navigate = useNavigate();
  const [out, setOut] = useState('');
  const [email, setEmail] = useState('');
  const [npass, setNpass] = useState('');
  const [cpass, setCpass] = useState('');
  const handleSubmit = ()=>{
    if (email === '') {
      setOut(`Email is required!`);
    }
    else if (npass === '') {
      setOut(`New password is required!`);
    }
    else if (cpass === '') {
      setOut(`Confirm password is required!`);
    }
    else if (npass !== cpass) {
      setOut(`New & confirm password not matched!`); 
    }
    else {
      axios.get(apiuser+'fetch?email='+email).then(()=>{
        const setpass = {'condition_obj':{'email':email},'set_condition':{'password':npass}};
        axios.patch(apiuser+'update', setpass).then(()=>{
          setOut(`Password changed successfully!`);
          setEmail(``);
          setNpass(``);
          setCpass(``);
          setTimeout(()=>{
            navigate('/login');
          }, 1000);
        })
      }).catch(()=>{
        setOut(`Invalid email or not registered email`);
      });
      
    }
  }
  return(
    <>
      <section id="contact" className="contact m-auto">
        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch m-auto">
          <form className="php-email-form">
            <h1 align="center" className="text-decoration-underline text-info text-uppercase">Edit Profile</h1>
            <span className="my-3 text-decoration-underline d-inline-block text-danger">{out}</span>
              <div className="form-group">
                <label htmlFor="name">Your Email</label>
                <input type="text" name="email" className="form-control" id="email" required value={email} onChange={e=>setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Set Password</label>
                <input type="password" className="form-control" name="pwd" id="pwd" required value={npass} onChange={e=>setNpass(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Set New Password</label>
                <input type="password" className="form-control" name="npwd" id="npwd" required value={cpass} onChange={e=>setCpass(e.target.value)}/>
              </div>
            <div className="text-center"><button type="button" onClick={handleSubmit}>Change</button></div>
          </form>
        </div>
      </section>
    </>
  );
}