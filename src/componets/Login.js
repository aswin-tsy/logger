import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

  const [name,setName] = useState();
  const [age,setAge] = useState();
  const [email,setEmail] = useState();
  const navigate = useNavigate()
  const handleSubmit =(e)=>{
    e.preventDefault();
    
   
    navigate("/logout",{state:name});

  }

  return (
    <div>
        <form className='form' onSubmit={(e)=>handleSubmit(e)}>
            <h1>Login Form</h1>
            <div className='inputs'>
            <label>Name : </label>
            <input className='name' type="name" value={name} placeholder="Enter the name" onChange={(e)=>setName(e.target.value)}></input>
            <label>Age :</label>
            <input type="age" value={age} placeholder="Enter your Age"></input>
            <label>Email :</label>
            <input type="email" value={email} placeholder='Enter your mail id'></input> 
            <button className='btn' type='submit'>Submit</button>
       </div> 
       </form>
      
    </div>
  )
}

export default Login
