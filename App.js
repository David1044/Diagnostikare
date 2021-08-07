import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import NavbarNav from './components/NavbarNav';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import sintomas from './pages/sintomas';
import agenda from './pages/agenda';
import form from './pages/form';

function App() {
  return (
    <Router>
      
      <div className="flex">
      <Sidebar />
      <div className="content w-100">
      < NavbarNav/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/sintomas" exact={true} component={sintomas} />
      <Route path="/agenda" exact={true} component={agenda} />
      </div>
    </div>
   
    </Router>
  );
}

export default App;
