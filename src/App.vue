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
    getApiData(mode) {
      //get API
      var url = store.apiURL + store.apiURLPath + store.apiKEY + store.query + '&page=' + store.pageCount;
      console.log(url)
      axios.get(url)
        .then(function (response) {
          // data of api

          if (mode == 'push') {
            store.apiInfo = response.data.page;
            response.data.results.forEach(element => {
              store.apiData.push(element);
            });
          }
          else {
            store.apiInfo = response.data.page;
            store.apiData = response.data.results;
          }

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
      // restore pagecount to 1
      store.pageCount = 1;
      //run getapidata
      this.getApiData();
    },
    loadMore() {
      store.pageCount++
      this.getApiData('push');
    }
  },
  mounted() {
    //load on mount
    this.getQuery('trending', 'all', 'week');
  },


}
//MANCA TUTTA L'INTERFACCIA DA FAREEEE
</script>

<template>
  <AppLoading v-if="loading" />
  <header class="container">

    <AppSearch @search="getQuery('search', 'multi')" />
  </header>
  <main class="container mb-5">
    <!-- card grid -->
    <AppCardgroup />
    <!-- page controls -->
    <AppControls @show="loadMore()" />
  </main>
</template>

<style lang="scss" scoped>

</style>
