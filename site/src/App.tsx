import { BrowserRouter, Routes, Route } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { SkillDetail } from './pages/SkillDetail'
import { Install } from './pages/Install'
import { About } from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/skill/:id" element={<SkillDetail />} />
          <Route path="/install" element={<Install />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
