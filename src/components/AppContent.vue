<script>
// VUE
import Card from "./Card.vue"
import store from "../../store"
export default {
  name: 'AppContent',
  data() {
    return {
      store,
      open: false,
      selectedProd: {}
    }

  },
  methods: {
    showModal(prodotto) {
        this.selectedProd = prodotto
        this.open = true
      },
      closeModal() {
        this.open = false
        this.selectedPasta = {}
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
          <Card @show="showModal" v-for="(prodotto, i) in store.products" :key="i" :item="prodotto"></Card>
        </div>
      </div>
<!-- MODALE -->
      <div v-if="open" class="modal">
      <div class="card">
        <div class="card__header">
         <img :src="'../../public/img/' + selectedProd.frontImage" alt="">
        </div>
        <div class="card__body">
          <ul>
            <li><em>{{selectedProd.name}}</em></li>
            <li><em>{{selectedProd.price}}&euro;</em></li>
            <li><font-awesome-icon class="color-white" @click="closeModal" :icon="['far', 'circle-xmark']"/></li>
          </ul>
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

ul {
  padding-top: 10px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;  
}

em {
  font-weight: 700;
}
.modal .card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  background-color: lightgrey;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0px 0px 4px rgba(0,0,0,0.1);
}
.modal::after {
  content: '';
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: rgba(0,0,0,0.1);
}

.color-white {
  color: red;
  font-size: 20px;
  cursor: pointer;
}

</style>