import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/components/Home';
import { MontchStatistics } from './pages/MontchStatistics/MontchStatistics';
import { Header } from './shared/Header/Header';
import { Popup } from './shared/Popup/Popup';


function App() {
  return (
    <div className="global-container">
      {/* <Popup></Popup> */}
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/montchstatistics" Component={MontchStatistics}>
            asvv
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
