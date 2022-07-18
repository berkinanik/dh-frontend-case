import { Redirect, Switch, SwitchProps } from 'react-router-dom';

import { RestaurantDetail } from 'pages/RestaurantDetail';
import Route from './Route';
import { ScrollToTop } from 'components/ScrollToTop';

const Routes: React.FC<SwitchProps> = (props) => {
  return (
    <ScrollToTop>
      <Switch {...props}>
        <Route exact path="/" component={RestaurantDetail} />
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </ScrollToTop>
  );
};

export default Routes;
