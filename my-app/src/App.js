import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/home'
import resume from './components/pages/resume'
import connect from './components/pages/connect'
import Footer from './components/footer'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/resume' exact component={ resume }/>
        <Route path='/connect' exact component={ connect }/>
      </Switch>
    </Router>
    <Footer />
    </>
  );
}

export default App;
