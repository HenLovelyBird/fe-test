import React from 'react';
import { Container, Row, Col } from "reactstrap";
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    state = {
      movies: []
    }

  render(){

    return (
      <Container>
        <Row>
          {this.state.movies.map (movie =>
          <Col lg-2 md-4 xs-12 > <p>{movie.Title}</p> <img src={movie.Poster} /> </Col>
          )} 
        </Row>
      </Container>
    );
  }
  
  componentDidMount = async () => {
    const movies = await fetch ("http://www.omdbapi.com/?s=avenger&apikey=24ad60e9") 
    const moviesJson = await movies.json();
    this.setState( {movies: moviesJson.Search} )
  }


}

export default App;
