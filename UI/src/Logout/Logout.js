import './Logout.css';
import { Navigate } from 'react-router-dom';
export default function Logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('role');
	localStorage.removeItem('id');
	localStorage.removeItem('name');
	localStorage.removeItem('email');
	localStorage.removeItem('mobile');
	localStorage.removeItem('class');
	localStorage.removeItem('subject');
  return (
    <>
    	<Navigate to="/login"/>
    </>
  );
}