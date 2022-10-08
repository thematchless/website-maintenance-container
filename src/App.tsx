import React from 'react'
import './App.css'
import Favicon from 'react-favicon'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import data from './services.json'

const App: React.FC = () => {
  return (
    <div className="App">
        <Favicon url={data.services.favicon_url}/>
        <header className="App-header">
            <MdOutlineHealthAndSafety size={200}/>
            <h1>{data.services.headline}</h1>
            <p>{data.services.description}</p>
        </header>
    </div>
  )
}

export default App
