import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import MyHeadspace from './pages/MyHeadspace'
import Music from './pages/Music'
import MeditateMusicCards from './components/MeditateMusicCards'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/modes/meditate" element={<MyHeadspace title="Meditate"/>}/>
        <Route path="/modes/focus" element={<MyHeadspace title="Focus"/>}/>
        <Route path="/modes/meditate/music" element={<Music/>}/>
        <Route path="/cards/meditate/music/:id" element={<MeditateMusicCards/>}/>
      </Routes>
      </BrowserRouter>
      
        
    </>
  )
}

export default App
