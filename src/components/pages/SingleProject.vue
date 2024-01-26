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

        <div class="mt-3 px-5" v-if="project.type">
            <h3 class=" text-center pb-3 ">TYPE</h3>
            <div class="w-100  d-flex flex-row justify-content-center ">
                <div class="text-center btn btn-warning">{{ project.type.name }}</div>
            </div>
        </div>

        <div class="mt-3 px-5 " v-if="project.technologies">
            <h3 class=" text-center  pb-4 ">TECHNOLOGIES</h3>
            <div class="d-flex flex-row justify-content-center gap-4">
                <div v-for="technology in project.technologies" class=" btn btn-success">
                    {{ technology.name }}
                </div>
            </div>
        </div>

       <!-- <button @click="goToNext">prossima</button> -->
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
        // goToNext(){
        //     id = project.id;
        //     projects = getAllProjects();
        //     if(projects.length() === this.id){
        //         nextProject = projects[0]; 
        //         this.id = 1;  
        //     } else {
        //         nextProject = projects[id];
        //         this.id = this.id++;   
        //     } 
        //     nextProject.slug;
        // },
        // getAllProjects(){
        // axios.get(store.apiUrl + "/projects", {params: {page: this.currentPage}}).then((res)=>{
        //     console.log(res);
        //     this.projects = res.data.results.data;
        //     this.currentPage = res.data.results.current_page;
        //     this.lastPage = res.data.results.last_page;
        //     })
        // },
    },
    watch: {
        '$route.params.slug': function (newSlug, oldSlug) {
                if (newSlug !== oldSlug) {
                this.getOneProject();
            }
        }
    },
    created(){
        this.getProjectData();
        
    }
}
</script>

<style lang="scss" scoped>

</style>