import { CartContextProvider } from 'context';
import { HashRouter } from 'react-router-dom';

import Routes from 'routes';

import 'styles/globals.scss';

const App: React.FC = () => {
  return (
    <HashRouter>
      <CartContextProvider>
        <Routes />
      </CartContextProvider>
    </HashRouter>
  );
};

export default App;
