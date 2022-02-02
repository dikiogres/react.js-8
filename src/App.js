import React, { Component } from 'react';
import { Alert, Button, Container } from 'reactstrap';
import styles from './style.module.css';

class App extends Component {
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
}

export default App;
