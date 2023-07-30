import { useNavigate } from 'react-router-dom'
import './PageNotFound.css'
import React from 'react'
const PageNotFound = () => {
    const navigate=useNavigate()
    return (<div className="pg-container">
        <h1>Page Not Found!</h1><br/>
        <button onClick={()=>navigate('/')}>GO Back</button>
    </div>)
}

export default PageNotFound;