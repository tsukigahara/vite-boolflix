<script setup>
//import state
import { store } from '../store.js'
</script>

<script>
export default {

}
</script>

<template>
    <div class="text-center my-2">
        <button type="button" class="btn btn-danger mx-2" @click="$emit('show')">Show more</button>
    </div>
</template>

<style lang="scss" scoped>

</style>
