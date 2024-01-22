<template>
    

    <section class="page-section portfolio" id="portfolio">
            <div class="container">
              <!-- Portfolio Section Heading-->
              <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
              <!-- Icon Divider-->
              <div class="divider-custom">
                  <div class="divider-custom-line"></div>
                  <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                  <div class="divider-custom-line"></div>
              </div>
              <!-- Portfolio Grid Items-->
              <div class="row justify-content-center" >
                <div class="col-12 col-md-6 col-lg-4 py-3" v-for="project in projects">
                  <AppCard :project="project"/>
                </div>
              </div>
                
            </div>
        </section>



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