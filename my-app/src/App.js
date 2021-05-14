import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/home'
import resume from './components/pages/resume'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/resume' exact component={ resume }/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
