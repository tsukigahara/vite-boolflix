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

        //return flag-icon library class 
        getFlagcode(value) {
            switch (value) {
                case 'en':
                    value = 'gb'
                    break;
                case 'ja':
                    value = 'jp'
                    break;
                case 'zh':
                    value = 'cn'
                case 'ko':
                    value = 'kr'
                default:
                    break;
            }
            return 'fi fi-' + value;
            //for flag-icon libraries
        }
    },
}
</script>

<template>
    <!-- card -->
    <div class="card h-100" v-if="item.media_type !== 'person'">
        <!-- card image -->
        <img :src="getImage('w500', item.poster_path)" class="card-img" :alt="item.title" v-if="imgCheck">
        <!-- if poster_path is null show only card infos -->
        <div class="card-img-overlay bg-dark bg-opacity-75 text-light" :class="imgCheck == true ? 'my_hover' : ''">
            <!-- title -->
            <h5 class="card-title">{{ item.title }}{{ item.name }}</h5>
            <!-- original title if title is different -->
            <h6 class="card-title" v-if="(item.title !== item.original_title) || (item.original_name !== item.name)">
                {{ item.original_title }}
                {{ item.original_name }}
            </h6>
            <!-- media type -->
            <h6 class="card-title">{{ item.media_type.toUpperCase() }}</h6>
            <!-- language -->
            <p class="card-text"><span :class="getFlagcode(item.original_language)"></span> {{
                    item.original_language.toUpperCase()
            }}</p>
            <!-- reviews -->
            <p class="card-text"><small>{{ (item.vote_average / 2).toFixed(1) }}/5 ({{ item.vote_count }}
                    reviews)</small>
            </p>
        </div>
    </div>

    <!-- person card -->
    <div class="card" v-if="item.media_type == 'person'">
        <!-- card image -->
        <img :src="getImage('w342', item.profile_path)" class="img-card" :alt="item.name" v-if="imgCheck">
        <div class="card-img-overlay bg-dark bg-opacity-75 text-light custom"
            :class="imgCheck == true ? 'my_hover' : ''">
            <!-- name -->
            <h5 class="card-title">{{ item.name }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>
// import flag icon library
@import "/node_modules/flag-icons/css/flag-icons.min.css";

.custom {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
}

.card {
    min-height: 200px !important;
    background-color: black;

    .card-img-overlay {
        overflow-y: auto;
    }
}

div {
    cursor: pointer;
}

.my_hover {
    opacity: 0;
    transition: 0.5s;

    &:hover {
        opacity: 1;
    }
}
</style>
