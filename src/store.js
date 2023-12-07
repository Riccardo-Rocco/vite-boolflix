
import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive({
  movieList: [],
  tvShowList: [], 
  searchQuery: '',
  apiKey: '997ba6d7129486958f93083c69172965',
  baseURL: 'https://api.themoviedb.org/3',
});

export const actions = {
  async fetchMovies() {
    try {
      const response = await axios.get(`${store.baseURL}/search/movie`, {
        params: {
          query: store.searchQuery,
          api_key: store.apiKey,
        },
      });
      store.movieList = response.data.results;
    } catch (error) {
      console.error('Errore durante il recupero dei film:', error);
    }
  },

  async fetchTVShows() {
    try {
      const response = await axios.get(`${store.baseURL}/search/tv`, {
        params: {
          query: store.searchQuery,
          api_key: store.apiKey,
        },
      });
      store.tvShowList = response.data.results;
    } catch (error) {
      console.error('Errore durante il recupero delle serie TV:', error);
    }
  },
};
