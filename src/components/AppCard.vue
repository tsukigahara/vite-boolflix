<script>
import { store } from '../store.js'
export default {
    props: {
        // got an Object from props
        item: Object
    },
    data() {
        return {
            store,
            imgCheck: true, // boolean for item with no poster image (false=noimage)

        }
    },
    methods: {

        // get img url for moviedb.org
        getImage(size, file_path) {
            if (file_path == null) {
                this.imgCheck = false;
            }
            else {
                this.imgCheck = true;
                return store.img_base_url + size + file_path;
            }
            //size value: original, w{width in px}
        },

        //return flag icon class 
        getFlagcode(value) {
            if (value === 'en') {
                value = 'gb';
            }
            return 'fi fi-' + value;
            //for flag-icon libraries
        }
    },
}
</script>

<template>
    <!-- card -->
    <div class="card bg-light">
        <!-- card image -->
        <img :src="getImage('w500', item.poster_path)" class="card-img" :alt="item.title" v-if="imgCheck">
        <!-- if poster_path is null show only card infos -->
        <div class="card-img-overlay bg-dark bg-opacity-75 text-light" :class="imgCheck == true ? 'my_hover' : ''">
            <h5 class="card-title">{{ item.title }}</h5>
            <h6 class="card-title">{{ item.original_title }}</h6>
            <p class="card-text"><span :class="getFlagcode(item.original_language)"></span> {{
                    item.original_language.toUpperCase()
            }}</p>
            <p class="card-text"><small>{{ (item.vote_average / 2).toFixed(1) }}/5 ({{ item.vote_count }}
                    reviews)</small>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// import flag icon library
@import "/node_modules/flag-icons/css/flag-icons.min.css";

div {
    cursor: pointer;
}

.card {
    height: 295px;
}

.my_hover {
    opacity: 0;
    transition: 0.5s;

    &:hover {
        opacity: 1;
    }
}
</style>
