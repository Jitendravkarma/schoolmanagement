import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { apiuser } from '../apiURL';
import axios from 'axios';
export default function Cpass() {
  const navigate = useNavigate();
  const [style, setStyle] = useState({"color":"red","marginTop":"5px","display":"block","fontWeight":"bold"});
  const [out, setOut] = useState('');
  const [opass, setOpass] = useState('');
  const [npass, setNpass] = useState('');
  const [cpass, setCpass] = useState('');
  const handleClick = ()=>{
    if (opass === '') {
      setOut(`Enter current password`);
    }
    else if (npass === '') {
      setOut(`New password is required!`);
    }
    else if (cpass === '') {
      setOut(`Confirm password is required!`);
    }
    else if (npass !== cpass) {
      setOut(`New & confirm password mismatch!`);
    }
    else {
      axios.get(apiuser+'fetch?email='+localStorage.getItem('email')+'&password='+opass).then(()=>{
        const updatepass = {'condition_obj':{'email':localStorage.getItem('email')},'set_condition':{'password':npass}};
        axios.patch(apiuser+'update', updatepass).then(()=>{
          setOut(`Password changed successfully!`);
          setStyle({"color":"#198754","fontWeight":"bold"});
          setTimeout(()=>{
            navigate("/logout");
          }, 1500);
        }).catch((err)=>{
          setOut(`There is an error`);
        });
      }).catch(()=>{
        setOut(`Invalid current password!`);
      })
      
    }
  }
  return (
      <div className="container w-50 mt-3 border pt-0 py-3">
        <form>
          <h1>Change password</h1>
          <span style={style}>{out}</span>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Current Password</label>
            <input type="password" className="form-control" id="Password1" placeholder="Current Password" value={opass} onChange={e=>setOpass(e.target.value)}/>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Set Password</label>
            <input type="password" className="form-control" id="Password2" placeholder="New Password" value={npass} onChange={e=>setNpass(e.target.value)}/>
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" id="Password3" placeholder="Confirm New Password" value={cpass} onChange={e=>setCpass(e.target.value)}/>
          </div>
          <button type="button" className="btn btn-success text-center" onClick={handleClick}>Change Password</button>
        </form>
      </div>
  );
}