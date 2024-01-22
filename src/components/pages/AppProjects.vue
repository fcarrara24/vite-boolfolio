<template>
    <div>
      <h1>projects</h1>
      <div class="container">
        
        <div class="row">
          <div class="col-12 col-md-4 col-lg-3" v-for="project in projects" :key="project.id">
        
            <AppCard :project="project">
            </AppCard>
          </div>
        </div>
      </div>

      <button @click="previousPage()">Indietro</button>
      <button @click="nextPage()">Avanti</button>
  
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import {store} from "../store.js";
  import AppCard from '../AppCard.vue'

  export default {
    components: {
      AppCard
    },
    name: "AppProjects",
    data () {
      return {
        store,
        projects: [],
        currentPage: 1,
        lastPage: 0,
      }
    },
    methods: {
      getAllProjects(){
        axios.get(store.apiUrl + "/projects", {params: {page: this.currentPage}}).then((res)=>{
          console.log(res);
          this.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
        })
      },
  
      nextPage(){
        if(this.currentPage < this.lastPage){
          this.currentPage+=1;
          this.getAllProjects();
        }
       
      },
      previousPage(){
        if(this.currentPage > 0){
          this.currentPage-=1;
          this.getAllProjects();
        }
      }
    },
  
    created(){
      this.getAllProjects();
    },
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>