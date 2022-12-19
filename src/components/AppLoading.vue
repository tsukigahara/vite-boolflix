<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCircleNotch)

export default {
    components: {
        FontAwesomeIcon,
    }
}
</script>

<template>
    <div class="spinner">
        <font-awesome-icon icon="fa-solid fa-circle-notch" size="2x" spin />
    </div>
</template>

<style lang="scss" scoped>
.spinner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: white;
}
</style>
