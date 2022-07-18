import { Redirect, Switch, SwitchProps } from 'react-router-dom';

import { RestaurantDetail } from 'pages/RestaurantDetail';
import Route from './Route';

const Routes: React.FC<SwitchProps> = (props) => {
  return (
    <Switch {...props}>
      <Route exact path="/" component={RestaurantDetail} />
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
