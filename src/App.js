import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { Alert, Button, Container } from 'reactstrap';
//import styles from './style.module.css';

import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';


class App extends Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
    );
  }
  /*
  state = { danger: false };

  handleOnClick = event => {
    this.setState({danger: true });
  }
  render(){
    const{danger}=this.state
    return(
      <Container className={styles.container}>
        <Container className="text-center">
          <Button className="mb-4" color="danger" onClick={this.handleOnClick}>Hati-Hati!</Button>
          {danger && <Alert color="danger">Sudah dibilang hati-hati!</Alert>}
        </Container>
      </Container>
    )
  }
  */
}

export default App;
