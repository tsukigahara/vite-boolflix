import { reactive } from 'vue'

export const store = reactive({
    //data to share HERE
    apiInfo: {},
    apiData: [],
    apiURL: 'https://api.themoviedb.org/3/',
    searchInput: '',
    selectInput: '',
    query: '',
    pageCount: 1,
    apiKEY: '?api_key=' + '3e27b9bb97ddf0c4830c10c7a9ed9700',
    img_base_url: 'https://image.tmdb.org/t/p/'
})