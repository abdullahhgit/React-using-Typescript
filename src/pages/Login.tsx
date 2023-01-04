import React from 'react'
import { login, logout } from '../store';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [newusername, setNewusername] = useState("");
  
  const dispatch = useDispatch();
  const username = useSelector((state:any) => state.user.value.username);

  return (
    <div>
      <h2>Hi {username}</h2>
      <input onChange={(e) => {
        setNewusername(e.target.value);
      }} />
      <button onClick={() => dispatch(login({username: newusername}))}>Submit & Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login
