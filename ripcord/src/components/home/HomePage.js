import React , { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>User Directory</h1>
        <p>
          A directory of Canopy users
        </p>
      </div>
    );
  }
}
export default HomePage;
