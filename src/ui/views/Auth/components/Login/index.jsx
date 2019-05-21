import React, { useState } from 'react';
import './index.scss';

const Signup = ({ handleLogin }) => {
  const [userData, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = ({ currentTarget: { name, value } }) => {
    setData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    handleLogin(userData);
  };

  return (
    <div>
      <div className="login-form">
        <h3>Login</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={userData.email}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={userData.password}
        />
        <button onClick={handleSubmit}>Sign in</button>
      </div>
    </div>
  );
};
export default Signup;
