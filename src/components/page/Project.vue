<template>
    <div>
      <h1>projects</h1>
      
      <ul>
        <li v-for="project in projects" :key="project.id">
          
          
        </li>
      </ul>
  
      <button @click="previousPage()">Indietro</button>
      <button @click="nextPage()">Avanti</button>
  
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import {store} from "../store.js";
  export default {
    name: "Project",
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
  
    mounted(){
      this.getAllProjects();
    },
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>