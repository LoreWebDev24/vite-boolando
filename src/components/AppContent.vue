<script>
  // VUE
      import Card from "./Card.vue"
      import DatabaseJson from "../../db.json"
      export default {
    name: 'AppContent',
    data() {
      return {
        prodotti: DatabaseJson.products
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
                    <Card v-for="(prodotto,i) in prodotti" :key="i" :item="prodotto"></Card>
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