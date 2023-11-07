<script>
  // VUE
      import Card from "./Card.vue"
      export default {
    name: 'AppContent',
    data() {
      return {
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
                    <Card v-for="n in 6" :key="n"></Card>
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