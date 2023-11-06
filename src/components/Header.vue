<script>
      export default {
    name: 'Header',
    data() {
      return {
      }
    }
  }
</script>

<template>
  <div>
    <header class="sticky">
        <div class="header__container">
            <div class="row header__row">
                <div class="col col-2 ">
                    <ul>
                        <li><a href="">Woman</a></li>
                        <li><a href="">Man</a></li>
                        <li><a href="">kid</a></li>
                    </ul>
                </div>
                <div class="logo-col">
                    <img class="logo" src="../../public/img/boolean-logo.png" alt="">
                </div>
                <div class="col col-2">
                    <ul>
                        <li>
                            <a href="#">Log</a>
                        </li>
                        <li>
                            <a href="#">Liked</a>
                        </li>
                        <li>
                            <a href="#">Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>                        
  </div>
</template>

<style scoped>

    header {
    height: 80px;
    background-color: #FF6900 ;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 5px;
}

.sticky {
	position: sticky;
	top: 0;
	z-index: 999;
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

</style>