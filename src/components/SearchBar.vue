<template>
    <div class="search-bar">
      <div class="logo">BOOFLIX</div>
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
    align-items: center; 
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    color: #ff0000;
  }
  
  .search-bar input {
    height: 30px;
  }
  
  .search-bar button {
    height: 30px;
  }
  </style>
  