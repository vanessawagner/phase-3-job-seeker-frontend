import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation'
import Home from './components/Home'
import Companies from './containers/Companies'
import Company from './containers/Company'
import React, { useState, useEffect } from "react"

function App() {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/companies`)
        .then(res => res.json())
        .then(data => { setCompanies(data)
            console.log("all jobs and companies", data)
        })
    }, [])

    function handleNewJob(newJob) {
        const company = companies.find((company) => company.id === newJob.company_id)
        const updatedJobs = [...company.jobs, newJob]
        const updatedCompany = {...company, jobs: updatedJobs}
        const updatedCompanies = companies.map((c) => {
            if (c.ij === company.id) {
                return updatedCompany
            }
            else {
                return c
            }
        })
        console.log(updatedCompanies)
        setCompanies(updatedCompanies)    
    }

    function handleNewCompany(newCompany) {
        setCompanies([...companies, newCompany])
    }

    function handleDeleteJob(job) {
        console.log(job)
        const company = companies.find((company) => company.id === job.company_id)
        const updatedJobs = company.jobs.filter((j) => j.id !==job.id);
        const updatedCompany = {...company, jobs: updatedJobs}
        const updatedCompanies = companies.map((c) => {
            if (c.id === company.id) {
                return updatedCompany
            }
            else {
                return c
            }
        })
        setCompanies(updatedCompanies)
    }
    

  return (
    <Router>
        <Navigation />
        <div className="App">
        <Routes>
          <Route exact path ="/" element={<Home/>} />

          <Route exact path ="/companies" element={<Companies 
                                                companies={companies}
                                                onAddCompany={handleNewCompany}
                                                />} 
          
          />
          <Route path ="/companies/:id" element={<Company 
                                                companies={companies}
                                                onAddJob={handleNewJob}
                                                deleteJob={handleDeleteJob}
                                                />} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
