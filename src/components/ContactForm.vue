<template>
    <div class="container">
        <div v-if="success" class="alert alert-success text-start" role="alert">
            Messaggio inviato con successo!
        </div>
        <form class="card p-5 needs-validation" @submit.prevent="submitForm($event)"  :class="{'was-validated': !validForm}" novalidate>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" v-model="email">
                <div id="emailHelp" class="form-text">Insert Yout email</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.email" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
        
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" v-model="name">
                <div id="nameHelp" class="form-text">Insert Yout Name</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.name" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
        
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your address</label>
                <input type="text" class="form-control" id="address" aria-describedby="addressHelp" v-model="address">
                <div id="addressHelp" class="form-text">Insert Yout address</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.address" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Your message</label>
                <textarea class="form-control" id="message" aria-describedby="message" v-model="message">
                </textarea>
                <div id="emailHelp" class="form-text">Insert Yout message</div>
                <div class="invalid-feedback" v-for="(error, index) in errors.message" :key="`message-error-${index}`">
                    {{ error }}
                </div>
            </div>
        
            <div class="d-flex flex-row">
                <button type="reset" class="btn btn-danger me-3">reset</button>
                <button type="submit" class="btn btn-primary" :disabled="loading">{{ loading ? 'Sending...' : 'Send' }}</button>
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
            message: '',
            loading: false,
            success: false,
            errors: {},
            validForm: true
        }
    },
    methods: {
        submitForm(e){
            
            //frontend side validation
            if(!this.validateForm(e.target)){
                return;
            };
            const formdata = {
                name: this.name,
                email: this.email,
                address: this.address,
                message: this.message,
            }
            axios.post(`${this.store.apiUrl}/contacts`, formdata).then((res)=>{
                //console.log(res.data);
                if(res.data.success){
                    this.name = '';
                    this.email = '';
                    this.address = '';
                    this.message = '';
                    this.errors = {};
                } else {
                    // in caso di errore
                    this.errors =res.data.errors;
                    this.validForm = false;
                }
                    
            }).catch((err)=>{
                console.log(err);
            }).finally(()=>{
                this.loading = false;
            })
        },
        validateForm(data){
            if(!data.checkValidity())
            this.validForm = false;
            Array.from(data.elements).forEach((el)=>{
                // console.log(el);
                //console.log(el.validity)
                // console.log(el.validity.valid)
                if(!el.validity.valid){
                    this.errors[el.id] = ['The field is required'];
                    if(el.validity.typeMismatch)this.errors[el.id].push('The field must be a valid email');
                }
             });
            return this.validForm;
        },
    }
}
</script>

<style lang="scss" scoped>

</style>