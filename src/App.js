import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CaseOne from './case-one/CaseOne';
import CaseTwo from './case-two/CaseTwo';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Qbit Technical Test</h1>
        <nav>
          <ul>
            <li><Link to="/case1">Case 1</Link></li>
            <li><Link to="/case2">Case 2</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/case1" element={<CaseOne />} />
          <Route path="/case2" element={<CaseTwo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
