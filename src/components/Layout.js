import { Outlet } from 'react-router-dom';
import BookForm from './BookForm';
import Nav from './Nav';

const Layout = () => (
  <div className="bg-[#fafafa] min-h-screen">
    <Nav />
    <div className="mx-[6.25rem] bg-white">
      <Outlet />
      <BookForm />
    </div>
  </div>
);

export default Layout;
