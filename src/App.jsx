import MobileNavigation from './component/MoblieNavigation';
import './App.css'
import { navigation } from './utils';

const App = () => {
  return (
    <div className="app">
      <MobileNavigation navigation={navigation} />
    </div>
  );
};

export default App;
