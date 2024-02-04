import react from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Homepage from './Homepage';
import Archive from './Archive';

const App = ()=> {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/archive" element={<Archive/>}/>
      </Routes>
    </>
  )
}

export default App
