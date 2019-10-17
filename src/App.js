import React, { Component } from 'react';
import './App.css';
import { CardList } from "./components/card-list/CardListComponent";
import { SearchBox } from "./components/search-box/SearchBoxComponent";

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  onChange = (e) => {
    const { value } = e.target
    this.setState({
      searchField: value
    })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search montsers"
          onChange={this.onChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
