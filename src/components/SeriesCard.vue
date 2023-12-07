
<template>
    <div class="series-card">
      <h3>{{ series.name }}</h3>
      <p>Titolo Originale: {{ series.original_name }}</p>
      <div v-if="series.original_language">
        Lingua: <img :src="getFlagUrl(series.original_language)" alt="Flag" />
      </div>
      <p>Voto: <font-awesome-icon v-for="star in getStars(series.vote_average)" :icon="['fas', 'star']" :key="star" /></p>
    </div>
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faStar } from '@fortawesome/free-solid-svg-icons';
  
  library.add(faStar);
  
  export default {
    components: {
      FontAwesomeIcon,
    },
    props: {
      series: Object,
    },
    methods: {
      getFlagUrl(language) {
        const flagFilename = `${language}.png`;
        return this.flagExists(flagFilename)
          ? `/flags/${flagFilename}`
          : '/flags/world.png'; 
      },
      flagExists(flagFilename) {
        const img = new Image();
        img.src = `/flags/${flagFilename}`;
        return img.complete;
      },
      getStars(vote) {
        const stars = Math.min(Math.floor(vote), 5);
        return Array.from({ length: stars });
      },
    },
  };
  </script>
  
  <style scoped>
 
  .series-card {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    text-align: center;
  }
  
  .series-card img {
    max-width: 30px;
    border: 2px solid black;
    border-radius: 4px;
  }
  </style>
  