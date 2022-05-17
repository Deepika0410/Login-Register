import React , {useState} from 'react'
import './Login.css'
import axios from 'axios';

function Login() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  

  const handleemail = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
  }

  const handlepassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const verifylog = async(e) => {
    e.preventDefault();
    const result = {
      "email" : email,
      "password" : password,
    }
    const res = await axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin', result)
    .then(response => alert(response.status + " Login Successful"))
    .catch(error => {
        if(error.response.status === 400)
        alert('Error code - ' + error.response.status + " ( " + error.response.data.errors[0].msg + " )");
        else
        alert('Error code - ' + error.response.status + " Email or Password is incorrect")
    });
  }


  return (
    <div className='Login'>
    <h2>LOGIN</h2>
    <form>
    <label>Email</label>
    <input type='text' placeholder='Enter your email' value={email} onChange={handleemail}></input>
    <label>Password</label>
    <input type='text' placeholder='Enter your password' value={password} onChange={handlepassword}></input>
    <button onClick={verifylog}>Login</button>
    </form>
    </div>
  )
}

export default Login