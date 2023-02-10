import React, { useState, useEffect } from 'react'
import CompanyLink from '../components/CompanyLink'

// Show index view
const Companies = ({companies}) => {

    const companiesList = companies.map( c => <CompanyLink key={c.id} company={c} />)

  return (
    <div>
        <ul>
            {companiesList}
        </ul>
    </div>
  )
}

export default Companies