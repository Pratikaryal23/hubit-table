import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Table from './table';
import Formss from './Form_g';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' w-screen h-screen bg-green-600'>
      <BrowserRouter>
      <Routes>ss
        <Route path="/" element={<Table />}/>
        <Route path="/Blog" element={<Blog />}/>
        <Route path="/Form_g" element={<Formss/>}/>
      </Routes>
      </BrowserRouter>
     
    </div>
    </>
  )
}

export default App;
