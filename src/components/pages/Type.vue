<template>
    <h1>type</h1>
    
    <ul>
        <li v-for="mytype in mytypes" :key="mytype.id">
            {{ mytype.name }}
        </li>
    </ul>

    <button @click="previousPage()">Indietro</button>
    <button @click="nextPage()">Avanti</button>
</template>

<script>
import axios from "axios";
import {store} from "../store.js";
export default {
    name: "type",
    data () {
        return {
            store,
            mytypes: [],
            currentPage: 1,
            lastPage: 0,
        }
    },
    methods:{
        getAllmytypes(){
            axios.get(store.apiUrl + "/types", {params: {page: this.currentPage}}).then((res)=>{
            console.log(res);
            this.mytypes = res.data.results.data;
            this.currentPage = res.data.results.current_page;
            this.lastPage = res.data.results.last_page;
            })
        },

        nextPage(){
            if(this.currentPage < this.lastPage){
                this.currentPage+=1;
                this.getAllmytypes();
            }
        },
        
        previousPage(){
            if(this.currentPage > 0){
                this.currentPage-=1;
                this.getAllmytypes();
            }
        }
        
    },
    mounted()
    {
        this.getAllmytypes();
    }

    
}
</script>

<style lang="scss" scoped>

</style>