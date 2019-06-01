import React from 'react'
import pokeDex from '../pokedex/pokedex.png'
import cancel from '../pokedex/cancel.png'

export default function Pokemon(props) {
    const {releasePokemon, pokemon} = props;
    console.log(pokemon.key)
  return (
    <div className='pokedexCard'>
      <img className='mapSprites' src={process.env.PUBLIC_URL + `/sprites/${pokemon.id}.png`} alt={`${pokemon.name}`}></img>
      <div className='container'>
        <h3><b>{pokemon.name}</b></h3>
      </div>
      <div className='actions'>
          <div className='actionFirst'>
            <img src={pokeDex} width='50' height='50' viewBox='0 0 50 50' alt='Name Your Pokemon'/>
          </div>
          <div className='actionSecond'>
            <img src={cancel} onClick={()=>{releasePokemon(pokemon.key)}} width='50' height='50' viewBox='0 0 50 50' alt='Run Away'/>
          </div>
        </div>
    </div>
  )
}
