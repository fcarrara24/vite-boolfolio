<template>
    <div class="container pb-5">
       
        <h2 v-if="project" class="text-center text-uppercase py-4">{{ project.title }}</h2>
        <div v-if="project.image" class="card overflow-hidden rounded-4 m-5">
            <img :src="`${store.imgPath}${project.image}`" :alt="project.image">
        </div>
        <div class="mt-3 px-5" v-if="project.body">
            <span >
                {{ project.body }}
            </span>
        </div>
        <div class="my-3 w-100 d-flex flex-row justify-content-center" v-if="project.github">
            <a :href="project.github" class="text-center">
                {{ project.github }}
            </a>
        </div>

        <!-- <div class="my-5 w-100 d-flex flex-row justify-content-center" v-if="project.github">
            <h3 class="text-center text-uppercase">
                TECONOLOGIE USATE
            </h3>
            
        </div> -->

    </div>
</template>

<script>
import axios from 'axios';
import {store} from "../store.js";

export default {
    name: 'SingleProject',    
    
    data () {

        return {
            store,
            project: null,
        }
    },
    methods: {
        
        getProjectData(){
            console.log(this.$route);
            axios.get(`${this.store.apiUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                if(res.data.results){
                    this.project = res.data.results;
                    console.log(this.project)
                } else {
                    this.$router.push({ name: 'not-found'}); 
                }
            });
        },
        
    },
    created(){
        this.getProjectData();
        
    }
}
</script>

<style lang="scss" scoped>

</style>