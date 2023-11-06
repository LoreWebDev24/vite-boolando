<script>
      export default {
    name: 'Footer',
    data() {
      return {
      }
    }
  }
</script>


<template>  
       <footer>
            <div class="container">
                <div class="row footer__row">
                    <div class="col-6">
                        <h4>Boolando s.r.l.</h4>
                            <ul>
                                <li class="footer-link"><a href="#">Informazioni Legali</a></li>
                                <li class="footer-link"><a href="#">Informativa sulla privacy</a></li>
                                <li class="footer-link"><a href="#">Diritto di recesso</a></li>
                            </ul>
                    </div>
                    <div class="col-6">
                        <h4 class="footer-link">Trovaci anche su:</h4>
                        <ul>
                            <li class="footer-link"><a href="#">Socials</a></li>                 
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
</template>


<style scoped>

footer{
    height: 100px;
    background-color: #1A1A1A ;
	color: white;
	padding: 10px 35px;
}
.footer__row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

h4 {
	text-align: left;
	padding-bottom: 20px;
}

p > span {
	color: black;
	line-height: 1em ;
	font-size: 1em;
	font-weight: bolder;
	text-decoration-line: line-through;
}

.footer-link {
	padding-right: 10px;
	text-align: left;
}

.container {
    max-width: 1150px;
}

</style>