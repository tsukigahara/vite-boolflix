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
        <input type="text" class="form-control bg-dark text-light border-danger " v-model="store.searchInput"
            @keyup.enter="$emit('search')" placeholder="Search">
        <button type="button" class="btn btn-danger" @click="$emit('search')">Search</button>
    </div>
</template>

<style lang="scss" scoped>
.form-control {
    &:focus {
        box-shadow: 0 0 0 0.25rem rgb(253 13 13 / 25%) !important;
    }
}
</style>
