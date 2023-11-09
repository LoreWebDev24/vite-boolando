<script>
  // VUE
export default {
    name: 'AppHeader',
    data() {
        return {
            menusLeft: ['Woman', 'Man', 'Kid'],
            menusRight: ['Log', 'Liked', 'Cart']
        }
    }
}
</script>

<template>
    <header class="sticky">
        <div class="header__container">
            <div class="row header__row">
                <div class="col col-2 ">
                    <ul>
                        <li v-for="(menuLeft, i) in menusLeft" :key="i"><a href="">{{ menuLeft }}</a></li>
                    </ul>
                </div>
                <div class="logo-col">
                    <img class="logo" src="../../public/img/boolean-logo.png" alt="">
                </div>
                <div class="col col-2">
                    <ul>
                        <!-- <li v-for="(menuRight, i) in menusRight" :key="i"><a href="">{{ menuRight }}</a></li> -->
                        <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>

header {
    height: 80px;
    background-color: #FF6900;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
}

.sticky {
    position: sticky;
    z-index: 999;
    top: 0;
    left: 0;
}

.logo {
    width: 30%;
    display: block;
}

.header__container {
    max-width: 1200px;
    margin: 0 auto;
}

.header__row {
    flex-wrap: nowrap;
}

.logo-col {
    display: flex;
    justify-content: center;
    flex-basis: calc((100% / 12) * 8);
}

.col-2 {
    flex-basis: calc((100% / 12) * 2);
}

ul {
    display: flex;
    gap: 40px;
}

</style>