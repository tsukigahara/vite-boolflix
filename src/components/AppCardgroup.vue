<script setup>
//import state
import { store } from '../store.js'
// import component
import AppCard from './AppCard.vue'

</script>

<script>
export default {

}
</script>

<template>
    <!-- cardgroup wrapper -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5 g-4 py-5">
        <!-- vfor to generate cards -->
        <!-- store.charaList is an Array -->
        <div class="col" v-for="(obj, index) in store.apiData" :key="index">
            <!-- props obj to AppCard-->
            <AppCard :item="obj" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>
