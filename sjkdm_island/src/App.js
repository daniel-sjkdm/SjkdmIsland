import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import { makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';


const useStyles = makeStyles({
  app: {
    backgroundColor: "#2E3440"
  }
}); 


function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <BrowserRouter>
        <Navigation />
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
        </Container>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
