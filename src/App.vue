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
  <div>
    <Header></Header>
    <MainApp></MainApp>
    <Footer></Footer>
  </div>
</template>

<style lang="scss">
  @use './styles/master.scss';
</style>
