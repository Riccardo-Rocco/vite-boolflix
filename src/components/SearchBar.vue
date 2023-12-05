
<template>
    <div class="search-bar">
      <input v-model="store.searchQuery" placeholder="Cerca film..." />
      <button @click="searchMovies">Cerca</button>
    </div>
  </template>
  
  <script>
  
  import { store, actions } from '../store';
  
  export default {
    setup() {
      const searchMovies = () => {
        actions.fetchMovies();
      };
  
      return { store, searchMovies };
    },
  };
  </script>
  
  <style>
 
  .search-bar {
    display: flex;
    gap: 10px;
  }
  </style>
  