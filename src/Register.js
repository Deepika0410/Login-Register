import React, {useState} from 'react'
import './Register.css'
import axios from 'axios';

function Register() {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[name, setName] = useState('');
  const[mobile, setMobile] = useState('');

  const handleemail = (e) => {
      e.preventDefault();
      setEmail(e.target.value);
  }

  const handlepassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const handlename = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handlemobile = (e) => {
    e.preventDefault();
    setMobile(e.target.value);
  }

  const verify = async (e) => {
    e.preventDefault();
    const result = {
      "email" : email,
      "password" : password,
      "name" : name,
      "mobile" : mobile
    }
    const res = await axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', result)
    .then(response => alert(response.status + " Registration Successful"))
    .catch(error => {
        if(error.response.status === 400)
        alert('Error code - ' + error.response.status + "(" + error.response.data.errors[0].msg + ")");
        else
        alert('Error code - ' + error.response.status + " User already exists")
    });

    setEmail('');
    setPassword('');
    setName('');
    setMobile('');
    
  }


  return (
    <div className='Register'>
    <h2>REGISTER</h2>
    <form>
    <label>Email</label>
    <input type='text' placeholder='Enter your email' value={email} onChange={handleemail}></input>
    <label>Password</label>
    <input type='text' placeholder='Enter your Password' value={password} onChange={handlepassword}></input>
    <label>Name</label>
    <input type='text' placeholder='Enter your name' value={name} onChange={handlename}></input>
    <label>Mobile</label>
    <input type='text' placeholder='Enter your Mobile' value={mobile} onChange={handlemobile}></input>
    <button className='but' onClick={verify}>Register</button>
    </form>
    </div>
  )
}

export default Register