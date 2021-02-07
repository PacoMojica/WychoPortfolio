import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PageLoading from '../PageLoading';
import ROUTES from './routes';

function RouterSwitch() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {ROUTES.map(({ Component, exact, path }, index) => (
          <Route key={index} path={path} exact={exact}>
            <Component />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );
}

export default RouterSwitch;