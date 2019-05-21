import React from 'react';
import Ufo from 'ui/assets/ufo.svg';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './index.scss';

const Header = ({ User: { userData }, ...rest }) => {
  console.log();
  return (
    <Grid fluid className="header">
      <Grid>
        <Row>
          <Col xs={6}>
            <img src={Ufo} alt="ufo-logo" className="logo" />
          </Col>
          <Col xs={6}>
            <div className="header-btns">
              <div className="user-bar">
                <img src={userData.image} />
                <span>{userData.name}</span>
              </div>
              <button onClick={rest.logout}>Logout</button>
            </div>
          </Col>
        </Row>
      </Grid>
    </Grid>
  );
};

export default Header;
