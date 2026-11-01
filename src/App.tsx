import './App.css'

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function App() {

  return (
    <>
      <Suspense fallback={<main className="route-loading" aria-label="Loading page" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
