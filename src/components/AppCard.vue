<template class="col-lg-8">
        
    <div class="card overflow-hidden rounded-4 ">
        
        <router-link class=" w-100 " :to="{name: 'single-project', params: {slug: project.slug}}">
            <img v-if="project.image" style="width: 100%; height: 300px; object-fit: cover;" :src="`${store.imgPath}${project.image}`" :alt="project.image">
            <img v-if="!project.image" src="../assets/img/avataaars.svg" alt="" style="width: 100%; height: 300px; object-fit: cover;">
        </router-link>

        
    </div> 
    <!-- {{ project.title }} -->

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