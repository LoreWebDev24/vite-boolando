<!-- LOGIC: -->
<script>
// IMPORTS
import axios from 'axios'
import store from '../store'
// COMPONENTS IMPORT ROUTE
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/AppFooter.vue"
// VUE
export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  mounted() {

    axios.get('http://localhost:3000/products')
      .then(res => {
        const products = res.data;
        this.store.products = products;
      });
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
