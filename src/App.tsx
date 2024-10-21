import { Route, Routes } from "react-router-dom";
import Swap  from '../src/pages/Swap'
import './App.css'

function App() {
  return (
      <Routes>
        <Route path="/swap" element={<Swap/>} />
      </Routes>
  )
}

export default App
