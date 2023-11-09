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
<!-- MODALE -->
      <div v-if="open" class="modal">
      <div class="card">
        <div class="card__header">
         <img src="" alt="">
         <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div class="card__body">
          <p>{{ }}</p>
          <p>{{ }}</p>
        </div>
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

.modal::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 40;
  background-color: rgba(0,0,0,0.5);
}
.modal .card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 50;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
}

</style>