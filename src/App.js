import {
  Routes,
  Route,
  BrowserRouter,

} from 'react-router-dom';
import React from 'react';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import MyProfile from './pages/MyProfile';
import Navbar from './components/Navbar/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="rocket" element={<Rocket />} />
      <Route path="mission" element={<Mission />} />
      <Route path="profile" element={<MyProfile />} />
    </Routes>
  </BrowserRouter>
);

export default App;