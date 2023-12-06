
<template>
  <div id="app">
    <header>
    
      <SearchBar />
    </header>
    <main>
     
      <MovieList />
    </main>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import MovieList from './components/MovieList.vue';

export default {
  components: {
    SearchBar,
    MovieList,
  },
};
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  text-align: center;
}

header {
  background-color: #333;
  color: white;
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

main {
  padding-top: 60px;
}
</style>
