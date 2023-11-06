<script>
   import Header from "./components/Header.vue"
   import MainApp from "./components/MainApp.vue"
   import Footer from "./components/Footer.vue"
  // VUE
  export default {
    data() {
      return {
      }
    },
    components: {
      Header,
      MainApp,
      Footer
    }
  }

</script>

<template>
    <Header></Header>
    <MainApp></MainApp>
    <Footer></Footer>
</template>

<style lang="scss">
  @use './styles/master.scss';
</style>
