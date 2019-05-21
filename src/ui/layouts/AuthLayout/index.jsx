import React from 'react';
import './index.scss';

const AuthLayout = ({ children, ...rest }) => (
    <div className="auth-layout">
      <div>{children}</div>
    </div>
);

export default AuthLayout;
