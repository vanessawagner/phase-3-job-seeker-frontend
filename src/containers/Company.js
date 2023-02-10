import React, {useState, useEffect } from 'react'
import { json, useParams } from 'react-router-dom'
import JobCard from '../components/JobCard'
import JobForm from '../components/JobForm'


const Company = ({companies, onAddJob, deleteJob}) => {
    const [display, setDisplay] = useState(false)

    const [job, setJob] = useState([])

    const params = useParams()

    const company = companies.find((company) => company.id===parseInt(params.id))

    const jobs = company.jobs.map(j => <JobCard deleteJob={deleteJob} key={j.id} job={j} />)

    return (
        <div>
            <br/>
            <h2>{company.name}</h2>
            <hr/>
            <h3>Jobs to apply to:</h3>
            {jobs}
            <br/>
            <h3>Add a job application to your to-do list:</h3>
            { display ? <JobForm onAddJob={onAddJob} /> : null }
            
            <div className="buttonContainer">
        <button onClick={() => setDisplay(!display)}> Toggle job form </button>
        </div>
        </div>
    )
}

export default Company