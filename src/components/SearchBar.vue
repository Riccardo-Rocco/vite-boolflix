
<template>
    <div class="search-bar">
      <input v-model="store.searchQuery" placeholder="Cerca film o serie TV..." />
      <button @click="searchAll">Cerca</button>
    </div>
  </template>
  
  <script>
  
  import { store, actions } from '../store';
  
  export default {
    setup() {
      const searchAll = async () => {
        await actions.fetchMovies();
        await actions.fetchTVShows();
      };
  
      return { store, searchAll };
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    gap: 10px;
  }
  </style>
  