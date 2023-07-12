import './Mngstudent.css';
import { apiuser } from '../apiURL';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Mngstudent() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(apiuser+'fetch?role=user').then((res)=>{
      setUser(res.data);
    });
  });
  const handleStatus = (id, st)=>{
      if (st === 'verify') {
        const updatedata = {'condition_obj':{'_id':id},'set_condition':{'status':1}};
        axios.patch(apiuser+'update', updatedata).then(()=>{
          navigate('/managestudent');
        });
      }
      else if (st === 'block') {
        const updatedata = {'condition_obj':{'_id':id},'set_condition':{'status':0}};
        axios.patch(apiuser+'update', updatedata).then(()=>{
          navigate('/managestudent');
        });
      }
      else {
        const deletedata = {'data':{'_id':id}};
        axios.delete(apiuser+'delete', deletedata).then(()=>{
          navigate('/managestudent');
        })
      }

    }
  return (
    <>
      <div className="contain">
            <h1 align="center">Manage Student Details</h1>
            <table className="m-auto table" border={1} cellspacing="0" cellpadding="10" style={{"width":"auto"}}>
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Father's Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Status</th>
                <th>Delete Record</th>
              </tr>
            </thead>
            {
              user.map((obj)=>(
                <tbody>
                  <tr>
                      <td>{obj._id}</td>
                      <td>{obj.name}</td>
                      <td>{obj.email}</td>
                      <td>{obj.gender}</td>
                      <td>{obj.mobile}</td>
                      <td>{obj.class}</td>
                      <td>
                        {
                          obj.status === 0 && <a className="text-info" onClick={()=>{handleStatus(obj._id, 'verify')}}>Verify User</a>
                        }
                        {
                          obj.status === 1 && <a className="text-warning" onClick={()=>{handleStatus(obj._id, 'block')}}>Block User</a>
                        }
                      </td>
                      <td>
                        <a>Delete</a>
                      </td>
                  </tr>
                </tbody>
              ))
            }
        </table>
      </div>
    </>
  );
}