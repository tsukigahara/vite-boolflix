<script>
import { store } from '../store.js'
export default {
    props: {
        // got an Object from props
        info: Object
    },
    data() {
        return {
            store,

        }
    },
    methods: {
        getImage(size, file_path) {
            return store.img_base_url + size + file_path
            //size value: original, w{width in px}
        }

    },
}
</script>

<template>
    <!-- card -->
    <div class="card h-100 bg-light">
        <!-- card image -->
        <img :src="getImage('original', info.poster_path)" class="card-img-top" :alt="info.title">
        <!-- card body -->
        <div class="card-body">
            <!-- card title -->
            <h5 class="card-title">{{ info.title }}</h5>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
