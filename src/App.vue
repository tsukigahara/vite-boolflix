<script>
// import Component
import AppCardgroup from './components/AppCardgroup.vue'
import AppSearch from './components/AppSearch.vue'
import AppControls from './components/AppControls.vue'
import AppLoading from './components/AppLoading.vue'

// import store
import { store } from './store.js'

//import axios library
import axios from 'axios'

/////////////////////////////////////////////////////////////////////
export default {
  components: {
    AppCardgroup,
    AppSearch,
    AppControls,
    AppLoading,
  },
  data() {
    return {
      store,
      loading: true,
    };
  },
  methods: {

    // get data from api
    getApiData() {
      //get API
      var url = store.apiURL + store.apiURLPath + store.apiKEY + store.query + '&page=' + store.pageCount;
      console.log(url)
      axios.get(url)
        .then(function (response) {
          // data of api
          store.apiInfo = response.data.page;
          store.apiData = response.data.results;

          console.log('api info: ', store.apiInfo);
          console.log('api data: ', store.apiData);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          // loading page booalean
          this.loading = false
        });

    },
    getQuery(type, media_type, time_window) {
      //media_type: all, movie, tv, person, (multi)
      //time_window: day, week
      switch (type) {
        case "trending":
          store.apiURLPath = 'trending/' + media_type + '/' + time_window;
          break;
        case "search":
          store.apiURLPath = 'search/' + media_type;
          store.query = '&query=' + encodeURI(store.searchInput);
          break;
        default:
          break;
      }
      this.getApiData();
    }
  },
  mounted() {
    //load on mount
    this.getQuery('trending', 'all', 'week');
  },


}
</script>

<template>
  <header class="container">
    <AppLoading v-if="loading" />
    <AppSearch @search="getQuery('search', 'multi')" />
  </header>
  <main class="container mb-5">
    <!-- card grid -->
    <AppCardgroup />
    <!-- page controls -->
    <!-- <AppControls @next="pageChange('next')" @prev="pageChange('prev')" /> -->
  </main>
</template>

<style lang="scss" scoped>

</style>
