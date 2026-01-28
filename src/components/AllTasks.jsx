// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "./AllTasks.css";

// const AllTasks = () => {
//   const [tasks, setTasks] = useState([]);
//   const [page, setPage] = useState("start");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setAnimate(true);

//     setTimeout(() => {
//       axios
//         .get("https://school-erp-backend-7259.onrender.com/api/tasks")
//         .then((response) => {
//           setTasks(response.data);
//           setLoading(false);
//         })
//         .catch((err) => {
//           setError(`Error fetching tasks: ${err.message}`);
//           setLoading(false);
//         });
//     }, 1000);
//   }, []);

//   const renderContent = () => {
//     if (loading) {
//   return (
//     <div>
//       <div className="skeleton skeleton-line"></div>
//       <div className="skeleton skeleton-line"></div>
//       <div className="skeleton skeleton-line"></div>

//       <div className="buttons">
//         <div className="skeleton skeleton-button"></div>
//         <div className="skeleton skeleton-button"></div>
//         <div className="skeleton skeleton-button"></div>
//       </div>
//     </div>
//   );
// }

//     if (error) return <p>{error}</p>;

//     if (page === "start") {
//       return <p>Welcome! Click a button to view students.</p>;
//     }

//     if (page === "end") {
//       return <p>End of student list. Thank you!</p>;
//     }

//     // Pagination logic (3 students per page)
//     const pageSize = 3;
//     const startIndex = (page - 1) * pageSize;
//     const paginatedTasks = tasks.slice(startIndex, startIndex + pageSize);

//     if (paginatedTasks.length === 0) {
//       return <p>No students available</p>;
//     }

//     return (
//       <ul>
//         {paginatedTasks.map((task) => (
//           <li key={task._id} className="student-link">
//             <Link
//               to={`/task-details/${task._id}`}
//               className="student-link"
//             >
//               {task.name} - Click here to view students details
//             </Link>
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (

//     <div>
//         <Link to="/create-task" className="add_button">
//         Add New Students
//       </Link>
    
//     <div className={`box ${animate ? "fade-in" : ""}`}>
      
//       <h1 className="heading">All Students Details</h1>
//       <div className="all-task-heading-divider"></div>

//       <div className="all-task-content">{renderContent()}</div>

//       <div className="buttons">
//         <button
//           className={page === "start" ? "active" : ""}
//           onClick={() => setPage("start")}
//         >
//           Start
//         </button>

//         <button
//           className={page === 1 ? "active" : ""}
//           onClick={() => setPage(1)}
//         >
//           1
//         </button>

//         <button
//           className={page === 2 ? "active" : ""}
//           onClick={() => setPage(2)}
//         >
//           2
//         </button>

//         <button
//           className={page === 3 ? "active" : ""}
//           onClick={() => setPage(3)}
//         >
//           3
//         </button>

//         <button
//           className={page === "end" ? "active" : ""}
//           onClick={() => setPage("end")}
//         >
//           End
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default AllTasks;









import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllTasks.css";

const PAGE_SIZE = 3;
const MAX_VISIBLE = 3;

const AllTasks = () => {
  // ✅ HOOKS HAMESHA TOP PAR
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false); // ✅ YAHI HONA CHAHIYE

  useEffect(() => {
    axios
      .get("https://school-erp-backend-7259.onrender.com/api/tasks")
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
        setAnimate(true);
      });
  }, []);

  const totalPages = Math.ceil(tasks.length / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentTasks = tasks.slice(startIndex, startIndex + PAGE_SIZE);

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 1);
    let end = start + MAX_VISIBLE - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - MAX_VISIBLE + 1);
    }

    let pages = [];
    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="add-button-wrapper">
      <Link to="/create-task" className="add_button">
        Add New Students
      </Link>

      <div className="box">
        <h1 className="heading">All Students Details</h1>
        <div className="all-task-heading-divider"></div>

        {/* 🔥 ANIMATED CONTENT */}
        <div className={`all-task-content ${animate ? "fade-container" : ""}`}>
          <ul>
            {currentTasks.map((task) => (
              <li key={task._id}>
                <Link to={`/task-details/${task._id}`} className="student-link">
                  {task.name} - Click here to view students details
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* PAGINATION */}
        <div className="buttons">
          {getPageNumbers().map((num) => (
            <button
              key={num}
              className={currentPage === num ? "active" : ""}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setCurrentPage(num);
                  setAnimate(true);
                }, 50);
              }}
            >
              {num}
            </button>
          ))}

          {totalPages > MAX_VISIBLE && <span className="dots">...</span>}

          <button
            onClick={() => {
              setAnimate(false);
              setTimeout(() => {
                setCurrentPage(totalPages);
                setAnimate(true);
              }, 50);
            }}
          >
            End
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllTasks;
