import { HashRouter } from 'react-router-dom';

import Routes from 'routes';

import 'styles/globals.scss';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default App;
