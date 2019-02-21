import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      seacrchfield: ""
    };
  }

  onSearchChange = (event) => {
    this.setState({seacrchfield: event.target.value});
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
      .toLowerCase()
      .includes(this.state.seacrchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox
          seacrchfield={this.state.seacrchfield}
          searchChange={this.onSearchChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
