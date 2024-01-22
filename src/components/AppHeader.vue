<template>
    
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <!-- <a class="navbar-brand" href="#">Navbar</a> -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item" v-for="item in menu" :key="index">
                    <router-link class="nav-link" active-class="active" :to="{name: item.name}">
                        {{ item.label }}
                    </router-link>
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                </li>

                
                  
                    <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
                
            </ul>
            </div>
        </nav>
</template>

<script>
export default {
    name: "AppHeader",
    data () {
        

        return {
            menu: [
                {
                    label: "home",
                    name: 'home'
                },
                {
                    label: "projects",
                    name: 'projects'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

</style>