import React, { Component } from "react";
import axios from "axios";
import Pokemon from "../Pokemon/Pokemon";
import "../pokedex/pokedex.css";

class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      pokedex: [],
      show: false
    };
  }

  componentDidMount() {
    this.getPokedex();
  };

  releasePokemon = (key) => {
    axios.delete(`/api/pokedex/${key}`).then(response => {
      this.getPokedex();
    });
  };

  namePokemon = key => {
    axios.put(`/api/pokedex/${key}`).then(response => {
      this.getPokedex();
    });
  };

  getPokedex = () => {
    axios.get("/api/pokedex").then(response => {
      this.setState({
        pokedex: response.data
      });
      console.log(this.state.pokedex)
    });
  };
  

  render() {
    const mappedPokedex = this.state.pokedex.map((pokemon, key) => (
      <Pokemon
        key={key}
        pokemon={pokemon}
        namePokemon={this.namePokemon}
        releasePokemon={this.releasePokemon}
      />
    ));
    return <div className='mappedPokedex'>{mappedPokedex}</div>;
  }
}

export default Pokedex;
