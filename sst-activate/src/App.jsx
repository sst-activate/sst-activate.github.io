import react from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Homepage from './Homepage';
import Archive from './Archive';
import Articles from './Articles';
import Activate from './Activate';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/activate" element={<Activate />} />
      </Routes>
    </>
  )
}

export default App
