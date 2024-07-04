import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPageWrapper from './components/homePage/MainPageWrapper';

import SocialWrapper from './socialPage/SocialWrapper';
import PhotoGraphWrapper from './photoGraphPage/PhotoGraphWrapper';
import UGCWrapper from './UGCpage/UGCWrapper';

function App() {
  return <> 
   <Router>
    <Routes>
   
    <Route path="/" index element={<MainPageWrapper/>}/>
    <Route path="/צילום" index element={<PhotoGraphWrapper/>}/>
    <Route path="/ניהול סושיאל מדיה" index element={<SocialWrapper/>}/>
    <Route path="/UGC" index element={<UGCWrapper/>}/>
 </Routes>
 </Router>
  </>
}

export default App;
