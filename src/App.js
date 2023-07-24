
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteNav from './RouteNav';
import NavLink from './NavLink';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavLink/>
      <RouteNav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
