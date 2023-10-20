import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {
    const param= useParams()
    const navigate=useNavigate();

    console.log(param.id)
  return (
    <div className="user">
        <button onClick={()=>navigate("/about")}>Click!</button>
    </div>
  )
}

export default User