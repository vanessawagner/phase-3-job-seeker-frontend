import React, {useState, useEffect} from 'react'

function JobCard({ job, deleteJob }) {

     let {id, name} = job;
    console.log("job:", job)
   
    let handleDelete = (e) => {
        
       fetch(`http://localhost:9292/jobs/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(() => 
            deleteJob(job))
        }


    return (
        <div className="card">
          <p className="applications">{name} </p>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      )
}

export default JobCard;