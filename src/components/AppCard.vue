<template class="col-lg-8">
        
    <div class="card overflow-hidden rounded-4 ">
        
        <router-link class=" w-100 h-100" :to="{name: 'single-project', params: {slug: project.slug}}">
            <img v-if="project.image" style="width: 100%; height: 300px; object-fit: cover;" :src="`${store.imgPath}${project.image}`" :alt="project.image">
            <div v-if="!project.image" class="centered d-flex flex-column justify-content-center " style="width: 100%; height: 300px; background-color: #0d6efd;">
                <h2 class=" my-title text-white text-uppercase text-decoration-none ">{{ project.title }}</h2>
            </div>
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
.my-title {
    &:hover{
        text-decoration: none;
        color: black;
    }
}
</style>