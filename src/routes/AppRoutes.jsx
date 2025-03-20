import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Corvinal } from "../pages"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/corvinal" element={<Corvinal/>}/>
      </Routes>
    </Router>
  )
}