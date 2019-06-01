import React, { Component } from 'react'
import axios from 'axios'
import './pokemon_card.css'
import pokeBall from './pokeball.svg'
import footPrints from './footprints.svg'
// import idGenerator from 'react-id-generator'

export default class PokemonCard extends Component {
  constructor(props) {
    super(props)


    this.state = {
      pokemon: {}
    }
  }

  pokemonNumber = () => {
    return Math.floor(Math.random()*(151-1+1)+1)
  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.pokemonNumber()}/`).then(response => {
      this.setState({
        pokemon: response.data,
      })
    })
  }

  catchPokemon = (event) => {
    const pokemon ={
      id:this.state.pokemon.id,
      name:this.state.pokemon.name
    }
    axios.post('/api/catchPokemon', pokemon).then(this.getPokemon())
    window.location.reload();
  }

  render() {
    return (
      <div className='card'>
        <img className='sprites' src={process.env.PUBLIC_URL + `/sprites/${this.state.pokemon.id}.png`} alt={`${this.state.pokemon.name}`}/>
        <div className='container'>
          <h4><b>{this.state.pokemon.name}</b></h4>
        </div>
        <div className='actions'>
          <div className='actionFirst'>
            <img src={pokeBall} onClick={this.catchPokemon} width='50' height='50' viewBox='0 0 50 50' alt='Catch this Pokemon'/>
          </div>
          <div className='actionSecond'>
            <img src={footPrints} onClick={this.getPokemon} width='50' height='50' viewBox='0 0 50 50' alt='Run Away'/>
          </div>
        </div>
      </div>
    )
  }
}
