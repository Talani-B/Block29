import { Routes, Route } from 'react-router-dom'
import AllPlayers from './ components /AllPlayers.jsx'
import SinglePlayer from './ components /SinglePlayer'
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<AllPlayers />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </div>
  )
}

export default App
