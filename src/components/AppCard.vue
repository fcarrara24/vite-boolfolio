<template>
    <div class="card">
        
        <router-link class="btn btn-primary" :to="{name: 'single-project', params: {slug: project.slug}}">
            {{ project.title }}
        </router-link>
        <img v-if="project.image" :src="`${store.imgPath}${project.image}`" :alt="project.image">
    </div>
</template>

<script>
import { store } from "./store.js";
export default {
    name: 'AppCard',
    props: ['project'],
    data () {
        

        return {
            store,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>