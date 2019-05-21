import React, { useEffect, useState } from 'react';
import Header from 'ui/components/Header';
import Asset from 'ui/components/Asset';
import request from 'app/utils/request';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ClipLoader } from 'react-spinners';
import './index.scss';

const HomePage = () => {
  const [assets, setAssets] = useState('fetching');
  const fetchData = async () => {
    const { data } = await request.get(
      'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR',
      {
        notAuthorizeHeader: true
      }
    );
    setAssets(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!assets) return null;

  if (assets === 'fetching') {
    return (
      <div className="loader-wrp">
        <ClipLoader sizeUnit="px" size={150} color="#123abc" />
      </div>
    );
  }

  return (
    <div className="home-page">
      <Grid>
        <Row>
          {Object.keys(assets).map(asset => (
            <Col xs={4} key={asset}>
              <Asset trade={assets[asset]} name={asset} />
            </Col>
          ))}
        </Row>
      </Grid>
    </div>
  );
};

export default HomePage;
