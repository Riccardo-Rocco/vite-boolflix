
<template>
    <div class="movie-grid">
      <div v-if="store.movieList.length === 0">Nessun film trovato</div>
      <div v-else class="movie-card" v-for="movie in store.movieList" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </template>
  
  <script>
 
  import { store } from '../store';
  import MovieCard from './MovieCard.vue';
  
  export default {
    components: {
      MovieCard,
    },
    setup() {
      return { store };
    },
  };
  </script>
  
  <style scoped>

.movie-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.movie-card {
  width: calc(50% - 20px); 
  max-height: 600px; 
  margin: 10px;
  box-sizing: border-box;
  text-align: center; 
}

.movie-card h3 {
  font-size: 1.2em; 
}
</style>