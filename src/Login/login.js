import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginp = () => {
    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate("/dashboard");
    }
  return (
    <div>
      <button onClick={handleSignup}>Sign Up</button>
      
    </div>
  );
};

export default Loginp;
