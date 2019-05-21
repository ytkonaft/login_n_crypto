import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import ScrollToTop from 'app/utils/ScrollToTop';
import routes from './routes';

const Router = ({ Auth, ...rest }) => {
  useEffect(() => {
    rest.checkJwt();
  }, []);

  if (!Auth.isLoaded) {
    return null;
  }

  return (
    <ScrollToTop>
      <Switch>
        {routes.map(
          ({ layout: Layout, component: Component, ...rest }, indx) => (
            <Route
              {...rest}
              key={indx}
              render={matchProps => (
                <Layout>
                  <Component {...matchProps} />
                </Layout>
              )}
            />
          )
        )}
      </Switch>
    </ScrollToTop>
  );
};

export default Router;
