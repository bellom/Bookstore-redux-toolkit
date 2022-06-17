import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import BookList from './components/BookList';
import Categories from './components/Categories';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
