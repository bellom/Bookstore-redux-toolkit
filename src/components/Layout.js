import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => (
  <div className="bg-[#fafafa] h-[100vh]">
    <Nav />
    <div className="mx-[6.25rem] bg-white">
      <Outlet />
    </div>
  </div>
);

export default Layout;
