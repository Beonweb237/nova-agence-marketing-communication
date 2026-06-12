import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Campaigns from './pages/Campaigns'
import Services from './pages/Services'
import Clients from './pages/Clients'
import Team from './pages/Team'
import Insights from './pages/Insights'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/team" element={<Team />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
