import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import BookList from './components/BookList';
import Categories from './components/Categories';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </Router>
);

export default App;
