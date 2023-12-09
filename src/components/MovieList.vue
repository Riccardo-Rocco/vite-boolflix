<template>
    <div>
      <h2 v-if="store.isSearchPerformed">Risultati della Ricerca Film:</h2>
      <div class="card-container movie-container" ref="movieContainer">
        <MovieCard v-for="movie in store.movieList" :key="movie.id" :movie="movie" />
      </div>
  
      <h2 v-if="store.isSearchPerformed">Risultati della Ricerca Serie TV:</h2>
      <div class="card-container series-container" ref="seriesContainer">
        <SeriesCard v-for="series in store.tvShowList" :key="series.id" :series="series" />
      </div>
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
  
  <style scoped>
  .card-container {
    display: flex;
    gap: 0;
    overflow-x: auto;
    white-space: nowrap; 
  }
  </style>
  