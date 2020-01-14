import React, { Component } from "react";
import "./App.css";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/searchbox/searchbox.component";
import {MaximumDate, MinimumDate, QuarterOfYear, DifferenceBetweenDates, DayOfTheWeek, AddDays} from "./components/datesHandler/dateHandler.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
      datesArray: [ new Date("2011/01/01"), new Date("2011/04/01"), new Date("2012/02/11"), new Date("2012/05/24"), new Date("2014/12/24")],
      dateQuarter: (new Date("2017/03/28")),
      daysToBeAdded: 7
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
    );
    return (
      <div className="App">
        <h1>Monster's Rolodex</h1>
        <br></br>
        <AddDays dates={[this.state.dateQuarter, this.state.daysToBeAdded]} />
        <DifferenceBetweenDates dates={[this.state.datesArray[0], this.state.datesArray[1]]} />
        <MaximumDate dates={this.state.datesArray} />
        <MinimumDate dates={this.state.datesArray} />
        <QuarterOfYear date={this.state.dateQuarter}/>
        <DayOfTheWeek date={this.state.dateQuarter} />
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
