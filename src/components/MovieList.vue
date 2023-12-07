
<template>
    <div>
      <h2>Risultati della Ricerca Film:</h2>
      <MovieCard v-for="movie in store.movieList" :key="movie.id" :movie="movie" />
      
      <h2>Risultati della Ricerca Serie TV:</h2>
      <SeriesCard v-for="series in store.tvShowList" :key="series.id" :series="series" />
    </div>
  </template>
  
  <script>
  import MovieCard from './MovieCard.vue';
  import SeriesCard from './SeriesCard.vue';
  import { store } from '../store';
  
  export default {
    components: {
      MovieCard,
      SeriesCard,
    },
    setup() {
      return { store };
    },
  };
  </script>
  