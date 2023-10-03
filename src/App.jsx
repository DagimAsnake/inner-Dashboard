import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layouts/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Team from './pages/Team'
import Partner from './pages/Partner'
import HappyClients from './pages/HappyClients'
import Contact from './pages/Contact'
import Setting from './pages/Setting'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}
        >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path="team" element={<Team />} />
          <Route path='partner' element={<Partner />} />
          <Route path="happyClients" element={<HappyClients />} />
          <Route path='contact' element={<Contact />} />
          <Route path='settings' element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  )
}