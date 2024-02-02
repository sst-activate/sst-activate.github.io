import react from 'react'
import { Routes,Route } from 'react-router-dom';
import './App.css'
import Homepage from './Homepage';

const App = ()=> {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
