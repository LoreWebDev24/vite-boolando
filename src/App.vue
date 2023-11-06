<script>
   import Header from "./components/Header.vue"
   import MainApp from "./components/MainApp.vue"
  // VUE
  export default {
    data() {
      return {
      }
    },
    components: {
      Header,
      MainApp

    }
  }

</script>

<template>
  <div>
    <Header></Header>
    <MainApp></MainApp>
  </div>
</template>

<style lang="scss">
  @use './styles/master.scss';
</style>
