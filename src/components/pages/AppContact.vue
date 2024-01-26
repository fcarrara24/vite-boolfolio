<template>
    <h1 class="w-100 text-center text-uppercase py-3">Contact Us</h1>
    
    <ContactForm/>
    
</template>

<script>
import ContactForm from '../ContactForm.vue';

export default {
    name: 'AppContact',
    data() {
        return {};
    },
    components: { ContactForm }
}
</script>

<style lang="scss" scoped>

</style>