import {
  Routes,
  Route,
  BrowserRouter,

} from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Rocket from './pages/Rocket';
import Mission from './pages/Mission';
import MyProfile from './pages/MyProfile';
import Navbar from './components/Navbar/Navbar';
import store from './redux/configureStore';

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="rocket" element={<Rocket />} />
        <Route path="mission" element={<Mission />} />
        <Route path="profile" element={<MyProfile />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
