import './Managestaff';
import { apiuser } from '../apiURL';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Mngstaff() {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        axios.get(apiuser+'fetch?role=user').then((res)=>{
            setUser(res.data);
        });
    });
    const handleStatus = (id, st)=>{
      if (st === 'verify') {
        const updatedata = {'condition_obj':{'_id':id},'set_condition':{'status':1}};
        axios.patch(apiuser+'update', updatedata).then(()=>{
          navigate('/managestaff');
        });
      }
      else if (st === 'block') {
        const updatedata = {'condition_obj':{'_id':id},'set_condition':{'status':0}};
        axios.patch(apiuser+'update', updatedata).then(()=>{
          navigate('/managestaff');
        });
      }
      else {
        const deletedata = {'data':{'_id':id}};
        axios.delete(apiuser+'delete', deletedata).then(()=>{
          navigate('/managestaff');
        })
      }

    }
    
    return (
        <>
          <div className="contain">
              <h1 align="center">Manage Teacher's Staff</h1>
              <table className="m-auto table" border={1} cellspacing="0" cellpadding="10" style={{"width":"auto"}}>
                <thead>
                  <tr>
                      <th>Teacher's Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Gender</th>
                      <th>Class you teach</th>
                      <th>Branch</th>
                      <th>Subject you teach</th>
                      <th>Status</th>
                      <th>Delete Teacher's Record</th>
                  </tr>
                </thead>
                {
                  user.map((data)=>(
                      <tbody>
                          <tr>
                            <td style={{"textTransform":"capitalize"}}>{data.name}</td>
                            <td>{data.email}</td>
                            <td>+91-{data.mobile}</td>
                            <td>{data.gender}</td>
                            <td>{data.class}</td>
                            <td>
                            {
                              data.branch === "" && "N/A"
                            }
                            {
                              data.branch !== "" && data.branch
                            }
                            </td>
                            <td>{data.subject}</td>
                            <td>
                            {
                              data.status === 0 && <a className="text-info" onClick={()=>{handleStatus(data._id, 'verify')}}>Verify User</a>
                            }
                            {
                              data.status === 1 && <a className="text-warning" onClick={()=>{handleStatus(data._id, 'block')}}>Block User</a>
                            }
                            </td>
                            <td>
                                <a className="text-danger text-decoration-underline" onClick={()=>{handleStatus(data._id, 'delete')}}>Delete</a>
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