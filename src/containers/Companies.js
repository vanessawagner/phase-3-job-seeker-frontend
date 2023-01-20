import React, { useState, useEffect } from 'react'

const Companies = () => {
    const [companies, setCompanies] = useState([])
    // create and read CRUD on the company
    const [companyFormFlag, setCompanyFormFlag] = useState(false)

    useEffect(() => {
        fetch('http://localhost:9292/companies')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

  return (
    <div>

    </div>
  )
}

export default Companies