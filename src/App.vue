<script setup>
// import Component
import AppCardgroup from './components/AppCardgroup.vue'
import AppSearch from './components/AppSearch.vue'
import AppControls from './components/AppControls.vue'
// import state 
import { store } from './store.js'
//import axios library
import axios from 'axios'
</script>

<script>
export default {
  data() {
    return {
      store, // a cosa serve scriverlo qua???? 
      // index: 0 // test value
    };
  },
  methods: {

    // get data from api
    getApiData() {
      //get API
      axios.get(store.apiURL + store.query + store.apiKEY)
        .then(function (response) {
          // data of api
          store.apiInfo = response.data.page;
          store.apiData = response.data.results;

          console.log('api info: ', store.apiInfo);
          console.log('api data: ', store.apiData);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getQuery(type, media_type, time_window) {
      //media_type: all, movie, tv, person
      //time_window: day, week
      switch (type) {
        case "trending":
          store.query = '/trending/' + media_type + '/' + time_window
          break;

        default:
          break;
      }
      this.getApiData();
    }
  },
  mounted() {
    //load on mount
    this.getQuery('trending', 'movie', 'week');
  },

}
</script>

<template>
  <header class="container">
    <AppSearch @search="getApiData" />
  </header>
  <main class="container p-4 mb-5">
    <!-- card grid -->
    <AppCardgroup />
    <!-- page controls -->
    <!-- <AppControls @next="pageChange('next')" @prev="pageChange('prev')" /> -->
  </main>
</template>

<style lang="scss" scoped>

</style>
