import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllTasks.css";

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState("start");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);

    setTimeout(() => {
      axios
        .get("http://localhost:7000/api/tasks")
        .then((response) => {
          setTasks(response.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(`Error fetching tasks: ${err.message}`);
          setLoading(false);
        });
    }, 1000);
  }, []);

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    if (page === "start") {
      return <p>Welcome! Click a button to view students.</p>;
    }

    if (page === "end") {
      return <p>End of student list. Thank you!</p>;
    }

    // Pagination logic (3 students per page)
    const pageSize = 3;
    const startIndex = (page - 1) * pageSize;
    const paginatedTasks = tasks.slice(startIndex, startIndex + pageSize);

    if (paginatedTasks.length === 0) {
      return <p>No students available</p>;
    }

    return (
      <ul>
        {paginatedTasks.map((task) => (
          <li key={task._id} className="student-link">
            <Link
              to={`/task-details/${task._id}`}
              className="student-link"
            >
              {task.name} - Click here to view students details
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (

    <div>
        <Link to="/create-task" className="add_button">
        Add New Students
      </Link>
    
    <div className={`box ${animate ? "fade-in" : ""}`}>
      
      <h1 className="heading">All Students Details</h1>
      <div className="all-task-heading-divider"></div>

      <div className="all-task-content">{renderContent()}</div>

      <div className="buttons">
        <button
          className={page === "start" ? "active" : ""}
          onClick={() => setPage("start")}
        >
          Start
        </button>

        <button
          className={page === 1 ? "active" : ""}
          onClick={() => setPage(1)}
        >
          1
        </button>

        <button
          className={page === 2 ? "active" : ""}
          onClick={() => setPage(2)}
        >
          2
        </button>

        <button
          className={page === 3 ? "active" : ""}
          onClick={() => setPage(3)}
        >
          3
        </button>

        <button
          className={page === "end" ? "active" : ""}
          onClick={() => setPage("end")}
        >
          End
        </button>
      </div>
    </div>
    </div>
  );
};

export default AllTasks;