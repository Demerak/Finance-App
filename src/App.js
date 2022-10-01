import React from "react"
import './App.css';
import Navbar from "./Navbar"
import GICPage from './GICPage';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import GICBox from "./GICBox";
import HomePage from "./HomePage";
import SalaryPage from "./SalaryPage";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< HomePage />}></Route>
          <Route exact path='/salary' element={<SalaryPage/> }></Route>
          <Route exact path='/gic' element={< GICPage />}></Route>
          {/* <Route exact path='/salary' element={< About />}></Route> */}
        </Routes>
      </Router>
    </div>

  );
}

export default App;
