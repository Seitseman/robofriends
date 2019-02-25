import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      seacrchfield: ""
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({seacrchfield: event.target.value});
  }
  
  render() {
    const {robots, seacrchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
      .toLowerCase()
      .includes(seacrchfield.toLowerCase());
    });

    if (!robots.length)
      return <h1>Loading</h1>
      
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          seacrchfield={seacrchfield}
          searchChange={this.onSearchChange}
        />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
