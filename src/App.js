import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import BookList from './components/BookList';
import Categories from './components/Categories';
import store from './redux/configureStore';
import Layout from './components/Layout';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BookList />} />
          <Route path="/Categories" element={<Categories />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);

export default App;
