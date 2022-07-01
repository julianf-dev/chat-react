import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {

  const [id, setId] = useState(null);

  const handleChange = (e) => {
    setId(e.target.value)
  }
  return (
    <main>
      <h1>PlatziChat</h1>
      <input 
        type="text"
        name="" id="" 
        placeholder='write and id'
        onChange={handleChange}
       />
      <Link to={`/chat/${id}`}>
        <button>Go to chat</button>
      </Link>
          </main>
  )
}
