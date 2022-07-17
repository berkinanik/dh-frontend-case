import { DefaultLayout } from 'layouts/Default';
import { RestaurantDetail } from 'pages/RestaurantDetail';

import 'styles/globals.scss';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <RestaurantDetail />
    </DefaultLayout>
  );
};

export default App;
