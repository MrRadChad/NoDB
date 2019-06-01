const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const pokedex = [];
let key = 0;

app.use(cors());
app.use(bodyParser.json());

// app.get(`https://pokeapi.co/api/v2/pokemon/:id/`, controller.get)
// app.post('/api/pokedex', controller.add);

app.post('/api/catchPokemon', (req, res) => {
    const {name, id} = req.body;
    let pokemon = {
        key: key,
        name: name,
        id: id
    }
    pokedex.push(pokemon);
    key++;
    res.status(200).send(pokedex)
    console.log(pokedex)
});

app.get('/api/pokedex', (req, res) => {
    res.status(200).send(pokedex)
});

app.put('/api/pokedex/:key', (req, res) => {
    let index = null;
    pokedex.forEach((pokemon, i) => {
        if(pokemon.key === (req.params.key)) index=i;
    });
    pokedex[index] = {
        name: req.body.name || pokedex[index].name
    };
    res.status(200).send(books);
});

app.delete("/api/pokedex/:key", (req, res) => {
    let index = null;
    pokedex.forEach((pokemon, i) => {
        if (pokemon.key === Number(req.params.key)) index=i;
    });
    pokedex.splice(index, 1);
    res.status(200).send(pokedex);
});

app.listen(3005, () => {
    console.log('Gotta Catch em all!');
});