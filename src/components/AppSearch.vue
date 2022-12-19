<script setup>
//import state
import { store } from '../store.js'
</script>

<script>
export default {
    emits: [
        'search'
    ]

}
</script>

<template>
    <div class="input-group my-4">
        <!-- search input -->
        <input type="text" class="form-control" v-model="store.searchInput" @keyup.enter="$emit('search')">
        <button type="button" class="btn btn-outline-secondary" @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
