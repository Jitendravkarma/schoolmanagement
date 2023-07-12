import './Ctpro.css';
import { useState, useEffect } from 'react';
import { apiuser } from '../apiURL';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Regi() {
  const [user, setUser] = useState([]);
  useEffect(()=>{
    axios.get(apiuser+'fetch?email='+localStorage.getItem('email')).then((res)=>{
      setUser(res.data[0]);
      setNm(user.name);
      setEmail(user.email);
      setMob(user.mobile);
      setGen(user.gender);
      setCls(user.class);
      setSub(user.subject);
    });
  },[]);
  const navigate = useNavigate();
  const [out, setOut] = useState('');
  const [ot, setOt] = useState('');
  const [nm, setNm] = useState('');
  const [email, setEmail] = useState('');
  const [mob, setMob] = useState('');
  const [gen, setGen] = useState('');
  const [cls, setCls] = useState('');
  const [brn, setBrn] = useState('');
  const [sub, setSub] = useState('');
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
      const updatedetails = {'condition_obj':{'email':localStorage.getItem("email")},'set_condition':{'name':nm,'mobile':mob,'gender':gen,'class':cls,'subject':sub}};
      axios.patch(apiuser+'update', updatedetails).then(()=>{
        setOut(`Profile edit successfully!`);
        setNm(``);
        setEmail(``);
        setMob(``);
        setGen(``);
        setCls(``);
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
            <div className="text-center"><button type="button" onClick={handleSubmit}>Save Changes</button></div>
          </form>
        </div>
      </section>
    </>
  );
}