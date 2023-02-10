import React from 'react'
import { Link } from 'react-router-dom'

const CompanyLink = ({company}) => {
  return (
    <div>
        <Link to={`${company.id}`}>
            <h3>{company.name}</h3>
        </Link>

    </div>
  )
}

export default CompanyLink