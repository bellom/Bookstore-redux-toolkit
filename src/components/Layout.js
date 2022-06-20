import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout = () => (
  <div>
    <Nav />
    <div className="mx-[6.25rem]">
      <Outlet />
    </div>
  </div>
);

export default Layout;
