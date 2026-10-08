import './App.css'

import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
