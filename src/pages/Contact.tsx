import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Contact = () => {
  const username = useSelector((state:any) => state.user.value.username);

  return (
    <div>
      <h2>Iam Contact Page from {username}</h2>
    </div>
  )
}

export default Contact
