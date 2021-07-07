import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </div>
  );
}

export default App;