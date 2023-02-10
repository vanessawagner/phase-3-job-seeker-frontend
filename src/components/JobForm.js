import React, { useState } from 'react'
import Company from '../containers/Company';
import Companies from '../containers/Companies';
import { stripBasename } from '@remix-run/router';
import { useParams } from "react-router-dom"

function JobForm({onAddJob}){
    
    const [name, setName] = useState("");
    const params = useParams();

    function handleNewName(e) {
      setName(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault()
        const jobData = {
          name: name,
          company_id: params.id
        }

        fetch(`http://localhost:9292/jobs`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(jobData)
        })
        .then(res => res.json())
        .then(newJob => onAddJob(newJob))
        setName("")
        }
  
      return (
          <div className="container">
            <h3>If you find a job you are interested, add it!</h3>
            <form onSubmit={handleSubmit} className="job-form">
                <label>Job:
                    <input 
                        onChange={handleNewName}
                        type="text"
                        placeholder="Job Title..."
                        name="name"
                        value={name}
                    />
                </label>
              <br/>
            <button type="submit">Submit</button>
            </form>
          </div>
        )
}
  

export default JobForm