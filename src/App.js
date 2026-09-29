import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// כל עמוד נטען רק כשנכנסים אליו - מקטין משמעותית את הטעינה הראשונית
const MainPageWrapper = lazy(() => import('./components/homePage/MainPageWrapper'));
const SocialWrapper = lazy(() => import('./socialPage/SocialWrapper'));
const PhotoGraphWrapper = lazy(() => import('./photoGraphPage/PhotoGraphWrapper'));
const UGCWrapper = lazy(() => import('./UGCpage/UGCWrapper'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" index element={<MainPageWrapper />} />
          <Route path="/צילומי סושיאל" index element={<PhotoGraphWrapper />} />
          <Route path="/ניהול סושיאל מדיה" index element={<SocialWrapper />} />
          <Route path="/UGC" index element={<UGCWrapper />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
