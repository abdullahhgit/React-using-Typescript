import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const username = useSelector((state:any) => state.user.value.username);
  
  return (
    <div>
      <h2>Iam HomePage from {username}</h2>
    </div>
  )
}

export default Home
