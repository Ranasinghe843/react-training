import React from 'react';
import './../styles/blog.css';
import { useState, useEffect} from 'react';

function Post(props) {
  return (
    <div>
      {/* For checkpoint 1: You need link this prop to some data in App.js */}
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
}

function Comment(props) {

    const [pokemon, setPokemon] = useState()

    const handleFetch = (response) => {
        console.log(response.status);
        return response.json();
    }

    const handleResponse = (response) => {
        const respPoke = response.results.map((item) => 
        <>
        <h3>{item.name}</h3>
        <p>{item.url}</p>
        </>
        );
        setPokemon(respPoke);
    }

    const handleError = (error) => {
        console.log(error);
        setPokemon(<li>Network Error!</li>)
    }

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
        fetch(url)
        .then(handleFetch)
        .then(handleResponse)
        .catch(handleError)
    }, [])

    return (
      <div>
        {/* For checkpoint 1: You need link this prop to some data in App.js */}
        {pokemon}
      </div>
    );
  }

  function Avatar(props) {
    return (
      <div>
        {/* For checkpoint 1: You need link this prop to some data in App.js */}
        <img className='avatar' src={props.img} width="200" height="200" alt="Me"></img>
      </div>        
    );
  }

  export { Post, Comment, Avatar };