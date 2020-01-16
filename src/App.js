import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard.js';
import Followers from './components/Followers.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: '',
      followers: ''
    };
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/bvneilson').then(res => {
      console.log(res);
      this.setState({userData: res.data})
    }).catch(err => {
      console.log(err);
    })
    axios.get('https://api.github.com/users/bvneilson/followers').then(res => {
      console.log(res);
      this.setState({followers: res.data})
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="app">
        <UserCard data={this.state.userData} />
        <h2>Followers</h2>
        <div className="followers">
          <Followers data={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default App;
