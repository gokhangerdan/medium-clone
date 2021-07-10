import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

import './App.scss';

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;