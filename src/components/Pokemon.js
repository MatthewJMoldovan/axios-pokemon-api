import axios from 'axios';
import { useState, useEffect } from 'react';


export const Pokemon = (props) => {

    const [allPokemon, setAllPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFetchPokemon = () => {

        axios
          .get('https://pokeapi.co/api/v2/pokemon?limit=808')
          .then((res) => {
            console.log(res.data);
            setAllPokemon(res.data.results);
          })
          .catch((err) =>{
            console.log(err);
          })
      
    }

      return (
        <div>
        <button onClick={(e) => {
          handleFetchPokemon();
        }}>Catch them All!</button>
        {allPokemon.map((pokemon, i) => {
          return(
            <p key={i}>{pokemon.name}</p>
          )
        })}
      </div>
      )

}