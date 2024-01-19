<template>
  <div>
    ciao
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>

    <button @click="previousPage()">Indietro</button>
    <button @click="nextPage()">Avanti</button>

  </div>
</template>

<script>
import axios from "axios";
import {store} from "./store.js";
export default {
  name: "App",
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
        //console.log(res);
        this.projects = res.data.results.data;
        //console.log(this.projects);
        // setting a different current page
        this.currentPage = res.data.results.current_page;
        this.lastPage = res.data.results.last_page;
        // console.log(this.currentPage)
        // console.log(this.lastPage)
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