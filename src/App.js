import React, { Component } from "react";
import "./App.css";
// import axios from 'axios';
import PokemonCard from "./components/pokemon_card/pokemon_card";
import Pokedex from "./components/pokedex/pokedex";

class App extends Component {

  render() {
    return (
      <div>
        <div className="newCard">
          <PokemonCard />
        </div>
        
        <div className="deck">
          <Pokedex />
        </div>
      </div>
    );
  }
}

export default App;
