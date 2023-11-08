<script>
// VUE
import Card from "./Card.vue"
import store from "../../store"
export default {
  name: 'AppContent',
  data() {
    return {
      store,
    }

  },
  components: {
    Card,
  }
}
</script>

<template>
  <div>
    <main>
      <div class="container">
        <div class="row">
          <Card v-for="(prodotto, i) in store.products" :key="i" :item="prodotto"></Card>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
main {
  padding-top: 100px;
  padding-bottom: 50px;
}
</style>