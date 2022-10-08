import React from 'react'
import './Maintenance.css'
import Favicon from 'react-favicon'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import info from './info.json'

const Maintenance: React.FC = () => {
  return (
    <div className="Maintenance">
        <Favicon url={info.favicon_url}/>
        <header className="Maintenance-header">
            <MdOutlineHealthAndSafety size={200}/>
            <h1>{info.headline}</h1>
            <p>{info.description}</p>
        </header>
    </div>
  )
}

export default Maintenance
