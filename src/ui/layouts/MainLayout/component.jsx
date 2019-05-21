import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { Header } from 'ui/components/Header';
import './index.scss';

const MainLayout = ({ children, isLogined }) => {
  if (!isLogined) {
    return <Redirect to="/auth/sign-in" />;
  }

  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
