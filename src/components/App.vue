<template>
  <AppNavbar/>
  <AppHeader/>
  <router-view></router-view>
  <!-- <Project/> -->
  <!-- <Type/>
  <Technology/> -->
</template>

<script>
// import Project from './page/Project.vue'
// import AppProjects from './pages/AppProjects.vue'
// import Type from './page/Type.vue'
// import Technology from './page/Technology.vue'
import AppHeader from './parts/AppHeader.vue';
import AppNavbar from './parts/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    // Project,
    // Type,
    // Technology,
    // AppProjects,
    AppNavbar,
    AppHeader
},
  data () {
    return {}
  }
}
</script>

  
<style lang="scss" scoped>

</style>