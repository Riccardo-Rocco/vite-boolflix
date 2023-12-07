<template>
    <div class="movie-card" @mouseover="showInfo = true" @mouseleave="showInfo = false">
      <div class="image-container">
        <img :src="getCoverUrl(movie.poster_path)" alt="Movie Cover" />
        <div class="overlay" v-show="showInfo">
          <h3>{{ movie.title }}</h3>
          <p>Titolo Originale:</p>
          <h4>{{ movie.original_title }}</h4>
          <div v-if="movie.original_language">
            Lingua: <img :src="getFlagUrl(movie.original_language)" alt="Flag" class="flag" />
          </div>
          <p>Voto: <font-awesome-icon v-for="star in getStars(movie.vote_average)" :icon="['fas', 'star']" :key="star" /></p>
        </div>
      </div>
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
      movie: Object,
    },
    data() {
      return {
        showInfo: false,
      };
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
      getCoverUrl(posterPath) {
        if (!posterPath) {
          
          return '/flags/default-cover.jpg';
        }
        
        return `https://image.tmdb.org/t/p/w342/${posterPath}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .movie-card {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 8px;
    text-align: center;
    height: 510px;
   min-width: 342px;
   white-space: normal;
  }
  .flag {
    max-width: 30px;
    border: 2px solid black;
    border-radius: 4px;
  }
  .image-container {
    position: relative;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .overlay h3, .overlay h4, .overlay p {
    margin: 0;
  }
  
  .movie-card:hover .overlay {
    opacity: 1;
  }
  </style>
  