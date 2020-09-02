import React from 'react';
import './assets/css/App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
