<template>
    <div class="container">
        <form class="card p-5" @submit.prevent="submitForm">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">Insert Yout email</div>
            </div>
        
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
                <div id="nameHelp" class="form-text">Insert Yout Name</div>
            </div>
        
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your address</label>
                <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
                <div id="addressHelp" class="form-text">Insert Yout address</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your message</label>
                <textarea class="form-control" id="message" aria-describedby="message" v-model="message">
                </textarea>
                <div id="emailHelp" class="form-text">Insert Yout message</div>
            </div>
        
            <div class="d-flex flex-row">
                <button type="reset" class="btn btn-danger">reset</button>
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</template>

<script>
import { store } from "./store";
import axios from "axios";

export default {
    
    name: 'ContactForm',
    data () {
        

        return {
            store,
            name: '',
            email: '',
            address: '',
            message: 'pippo'
        }
    },
    methods: {
        submitForm(){
            console.log('funziona');
            //costruzione oggetto data per fare le variabili 
            const formdata = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message,
            }
            axios.post(`${this.store.apiUrl}/contacts`, formdata).then((res)=>{
                console.log(res.data);
                this.name = '';
                this.email = '';
                this.address = '';
                this.message = '';
            }).catch((err)=>{
                console.log(err);
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>