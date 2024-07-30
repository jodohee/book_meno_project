import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Memo from './pages/Memo';
import Login from './pages/login';
import Join from './pages/Join';
import Detail from './pages/Detail';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/search">검색</Link></li>
              <li><Link to="/memo">메모</Link></li>
              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/join">회원가입</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/memo" element={<Memo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
