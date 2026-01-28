import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './CreateTask.css'

const CreateTasks = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://school-erp-backend-7259.onrender.com/api/create', { name, email, phone })
      setMessage("Students Details Added successfully")
      setError('')
      setName('')
      setEmail('')
      setPhone('')
      navigate('/')
    } catch (error) {
      setError(`Students Details Added failed: ${error.message}`)
    }
  }

  return (
    <div className="create-task-container">
      <h2 className="heading">Add a new Students</h2>
      <div className="create-task-heading-divider"></div><br />
      <form onSubmit={handleSubmit}  className="content">
        <label>Name: </label>
        <input 
          type="text" 
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /> <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br /><br />
        <label>Phone: </label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          maxLength={10}
          onChange={(e) => {
          const value = e.target.value.replace(/\D/g, "");
          setPhone(value);
          }}
          pattern="^[0-9]{10}$"
          required
        /><br /><br />
        <button type="submit" className="add-button">Add Students</button>
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default CreateTasks