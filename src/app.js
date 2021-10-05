import './App.css';
import Home from './pages/Home';
import Provider from './context/Provider.js';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
