import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import axios from 'axios'
import "./TaskDetails.css"

const TaskDetails = () => {
  const [name, setName] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    setTimeout(() => {
      axios.get(`https://school-erp-backend-7259.onrender.com/api/task/${id}`)
        .then(response => {
          setName(response.data)
          setError("")
          setLoading(false)
        })
        .catch((error) => {
          setError(`task not found: ${error.message}`)
          setLoading(false)
        })
    }, [1000])
  }, [id])

  const handleDelete = async () => {
    try {
      await axios.delete(`https://school-erp-backend-7259.onrender.com/api/delete/${id}`)
      navigate('/')
    } catch (error) {
      setError(`Error occured while deleteing task: ${error.message}`)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className='task-details-container'>
      
      <h2 className='heading'>Students Details</h2>
      <div className="task-details-heading-divider"></div><br />
      <div className='content'>
      {error && <p>{error}</p>}
      <p>Name - {loading && <span>loading...</span>} {name.name}</p>
      <p>Email - {loading && <span>loading...</span>} {name.email}</p>
      <p>Phone - {loading && <span>loading...</span>} {name.phone}</p>
      <p>Students Details Created at - {loading && <span>loading...</span>}{formatDate(name.createdAt)}</p>
      <p>Students Details Updated at - {loading && <span>loading...</span>}{formatDate(name.updatedAt)}</p>
      </div>
      <div className="action-buttons">
  <button onClick={handleDelete} className="button delete-btn">
    Remove Students Details
  </button>

  <Link to={`/update-task/${id}`}>
    <button className="button update-btn">
      Update Students Details
    </button>
  </Link>
</div>

    </div>
  )
}

export default TaskDetails;