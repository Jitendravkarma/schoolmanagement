import './User.css';
export default function User() {
  return (
    <div className="contain" id="user">
      <h1>User Component</h1>
      <h2>Welcome, {localStorage.getItem('name')}</h2>
    </div>
  );
}