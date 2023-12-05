
<template>
    <div>
      <div v-if="store.movieList.length === 0">Nessun film trovato</div>
      <div v-else>
        <div v-for="movie in store.movieList" :key="movie.id">
          <h3>{{ movie.title }}</h3>
          <p>Titolo Originale: {{ movie.original_title }}</p>
          <p>Lingua: {{ movie.original_language }}</p>
          <p>Voto: {{ movie.vote_average }}</p>
          <hr />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import { store } from '../store';
  
  export default {
    setup() {
      return { store };
    },
  };
  </script>
  