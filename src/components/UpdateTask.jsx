import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import './UpdateTask.css'

const UpdateTask = () => {
  const { id } = useParams()
  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ phone, setPhone ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ error, setError ] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(`https://school-erp-backend-7259.onrender.com/api/task/${id}`);
        setName(response.data.name)
        setEmail(response.data.email)
        setPhone(response.data.phone)
        setError("")
      } catch (error) {
        setError(`Error fetching task: ${error.message}`)
      }
    }
    fetchTask();
  }, [id])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.put(`https://school-erp-backend-7259.onrender.com/api/edit/${id}`, { name, email, phone })
      setMessage("Students Details updated successfully...")
      setError("")
      setName("")
      setEmail("")
      setPhone("")
      navigate('/')
    } catch (error) {
      setError(`Task updation failed ${error.message}`)
    }
  }

  return (
    <div className='update-task-container'>
      <h2 className='heading'>Update Students Details</h2>
      <div className="update-task-heading-divider"></div><br />
      <div className='content'>
      {message && <p>{message}</p>}
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          placeholder='Enter your name'
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br /><br />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />
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
        <button type="submit">Update Students Details</button>
      </form>
      </div>
    </div>
  )
}

export default UpdateTask