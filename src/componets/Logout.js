import React from 'react';
import { useLocation,useNavigate  } from 'react-router-dom';


function Logout() {
    const location = useLocation()
    const navigate  = useNavigate()
    console.log(location.state)
   
  return (
    <div>
      <h1>Welcome {location.state}</h1>
      <button onClick={()=>navigate("/")}>Logout</button>
    </div>
  )
}

export default Logout
