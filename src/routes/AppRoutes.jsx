import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Corvinal, Grifinoria, Lufalufa, Sonserina } from "../pages"

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/corvinal" element={<Corvinal/>}/>
        <Route path="/grifinoria" element={<Grifinoria/>}/>
        <Route path="/lufalufa" element={<Lufalufa/>}/>
        <Route path="/sonserina" element={<Sonserina/>}/>
      </Routes>
    </Router>
  )
}