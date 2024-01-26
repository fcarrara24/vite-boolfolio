<template>
    <div class="container py-3 d-flex justify-content-between align-items-center my-3">
      <h1>Post List</h1>
      <select name="type" id="type" class="form-control" style="max-width:300px;" v-model="selectedType" @change="setParams()">
          <option value="">--Choose type--</option>
          <option :value="typo.id" v-for="typo in store.types"  >{{ typo.name }}</option>
      </select>
    </div>

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
        <nav class="d-flex justify-content-center align-items-center my-4">
            <ul class="pagination">
                <li class="page-item" :class="{'disabled' : currentPage === 1}">
                  <button @click="previousPage" class="page-link " :disabled="currentPage === 1">indietro</button>
                </li>
                <li class="page-item" v-for="n in lastPage">
                  <button @click="getPage(n)" class="page-link " :disabled="currentPage === n">{{ n }}</button>
                </li>

                <li class="page-item" :class="{'disabled' : currentPage === lastPage}">
                  <button @click="nextPage" class="page-link " :disabled="currentPage === lastPage">avanti</button>
                </li>
            </ul>

           
        </nav>

        <div class="d-flex flex-row justify-content-center w-100 gap-5 pb-3 ">
         
          
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
        lastPage: null,
        total: 0,
        selectedType: ''
      }
    },
    methods: {
      setParams(pageNum=1){
           
          const params = new URLSearchParams();
          params.append('page', pageNum);
          if(this.selectedType){
              params.append('type', this.selectedType);     
          }
          console.log(params);
          this.getAllProjects(params);
      },
      getAllProjects(params){
        axios.get(store.apiUrl + "/projects", {params}).then((res)=>{
          console.log(res);
          this.projects = res.data.results.data;
          this.currentPage = res.data.results.current_page;
          this.lastPage = res.data.results.last_page;
          this.total = res.data.results.total
        })
      },
      getAllType(){
        axios.get(store.apiUrl + "/types")
        .then((res)=>{
          this.store.types=res.data
        })
      },
      getPage(page){
        axios.get(store.apiUrl + "/projects", {params: {page: page}}).then((res)=>{
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
      },
      getAllTypes(){
        axios.get(`${this.store.apiUrl}/types`).then((res)=>{
            console.log(res.data);
            this.store.types = res.data;
        }).catch((err)=>{
            
        })
      }
    },
  
    created(){
      // this.getAllProjects();
      this.getAllTypes();
      this.setParams();

    },
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>