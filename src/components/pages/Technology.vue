<template>
    <h1>technology</h1>
    <ul>
      <li v-for="technology in technologies" :key="technology.id">
        {{ technology.name }}
      </li>
    </ul>

    <button @click="previousPage()">Indietro</button>
    <button @click="nextPage()">Avanti</button>
</template>

<script>
import axios from "axios";
import {store} from "../store.js";
export default {
    name: "Technology",
    data () {
        return {
            store,
            technologies: [],
            currentPage: 1,
            lastPage: 0,
        }
    },
    methods:{
        getAllTechnologies(){
            axios.get(store.apiUrl + "/technologies", {params: {page: this.currentPage}}).then((res)=>{
            console.log(res);
            this.technologies = res.data.results.data;
            this.currentPage = res.data.results.current_page;
            this.lastPage = res.data.results.last_page;
            })
        },

        nextPage(){
            if(this.currentPage < this.lastPage){
                this.currentPage+=1;
                this.getAllTechnologies();
            }
        },

        previousPage(){
            if(this.currentPage > 0){
                this.currentPage-=1;
                this.getAllTechnologies();
            }
        }
        
    },
    mounted(){
        this.getAllTechnologies();
    }
    
}
</script>

<style lang="scss" scoped>

</style>