import React from 'react';
import { Outlet, LayoutComponent, useLocation } from 'rasengan';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const authPaths = ['/auth/login', '/auth/register'];

const AppLayout: LayoutComponent = () => {
  const location = useLocation();
  const isAuthPage = authPaths.includes(location.pathname);
  return (
    <React.Fragment>
      {!isAuthPage && <Header />}
      <Outlet />
      {!isAuthPage && <Footer />}
    </React.Fragment>
  );
};

export default AppLayout;
