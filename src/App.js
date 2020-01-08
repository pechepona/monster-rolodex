import React, { Component } from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/searchbox/searchbox.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }) )
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <SearchBox
          placeholder = "Search Monsters..."
          handleChange = {e => this.setState({ searchField: e.target.value})}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
