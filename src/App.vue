<!-- LOGIC: -->
<script>
// IMPORTS

   import AppHeader from "./components/AppHeader.vue"
   import AppContent from "./components/AppContent.vue"
   import AppFooter from "./components/AppFooter.vue"
  // VUE
  export default {
    data() {
      return {
      }
    },
    components: {
      AppHeader,
      AppContent,
      AppFooter
    }
  }

</script>

<!-- template -->
<template>
    <AppHeader></AppHeader>
    <AppContent></AppContent>
    <AppFooter></AppFooter>
</template>

<!-- style -->
<style lang="scss">
  @use './styles/master.scss';
</style>
