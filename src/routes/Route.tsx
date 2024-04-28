import { Route, RouteProps } from 'react-router-dom';

import { DefaultLayout } from 'layouts/Default';

const CustomRoute: React.FC<RouteProps> = (props) => {
  return (
    <DefaultLayout>
      <Route {...props} />
    </DefaultLayout>
  );
};

export default CustomRoute;
