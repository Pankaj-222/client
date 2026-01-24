import React, { useEffect, useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import AllTask from './components/Alltasks.jsx'
import CreateTask from './components/CreateTask.jsx'
import UpdateTask from './components/UpdateTask.jsx'
import TaskDetails from './components/TaskDetails.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const App = () => {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() => {
      localStorage.setItem('current_theme', theme);
    }, [theme]);

  return (
    <div>
      <div className={`container ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<AllTask />} />
          <Route path="/create-task" element={<CreateTask />} />
          <Route path="/update-task/:id" element={<UpdateTask />} />
          <Route path="/task-details/:id" element={<TaskDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      <Footer />
      </div>
    </div>
  )
}

export default App