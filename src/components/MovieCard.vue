
<template>
    <div class="movie-card">
      <h3>{{ movie.title }}</h3>
      <p>Titolo Originale: {{ movie.original_title }}</p>
      <p>Lingua: {{ movie.original_language }}</p>
      <p>Voto: {{ movie.vote_average }}</p>
     
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: Object, 
    },
  };
  </script>
  
  <style scoped>
 
  .movie-card {
    
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
  }
  </style>
  