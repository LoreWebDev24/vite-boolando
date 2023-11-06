<script>
      export default {
    name: 'MainApp',
    data() {
      return {
      }
    }
  }
</script>

<template>
    <div>
        <main>
        <div class="container">
            <div class="row">

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p>
                        </div>
                        <div class="badges-wrapper">
                            <div class="price-off just-price-off">
                                <span>-50%</span>
                            </div>
                            <div class="sustainable sustainable-top">
                                <span>Sostenibity</span>
                            </div>
                        </div>
                            <figure>
                                <img src="../../public/img/1.webp" alt="">
                                <img class="img-b" src="../../public/img/1b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Levi's</p>
                            <p class="item">RELAXED FIT TEE UNISEX</p>
                            <p class="price">14,99 <span>€ 29,99 €</span></p>
                        </div> 
                    </div>  
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p>        
                        </div>
                        <div class="badges-wrapper">
                            <div class="price-off just-price-off">
                                <span>-30%</span>
                            </div>
                        </div>
                            <figure>
                                <img src="../../public/img/2.webp" alt="">
                                <img class="img-b" src="../../public/img/2b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Guess</p>
                            <p class="item">ROSES TEE</p>
                            <P class="price">20,99 <span>€ 29,99 €</span></p>
                        </div> 
                    </div>  
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p>
                        </div>
                        <div class="badges-wrapper">
                            <div class="price-off just-price-off">
                                <span>-30%</span>
                            </div>
                        </div>
                            <figure>
                                <img src="../../public/img/3.webp" alt="">
                                <img class="img-b" src="../../public/img/3b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Come Zucchero Filato</p>
                            <p class="item">VOGLIA DI COLORI PASTELLO</p>
                            <P class="price">129,99 € <span>184,99 €</span></p>
                        </div> 
                    </div>  
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p>    
                        </div>
                        <div class="badges-wrapper">
                            <div class="price-off just-price-off">
                                <span>-50%</span>
                            </div>
                            <div class="sustainable sustainable-top">
                                <span>Sostenibity</span>
                            </div>
                        </div>
                            <figure>
                                <img src="../../public/img/4.webp" alt="">
                                <img class="img-b" src="../../public/img/4b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Levi's</p>
                            <p class="item">TEE UNISEX</p>
                            <P class="price">14,99 € <span>29,99 €</span></p>
                        </div> 
                    </div>  
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p> 
                        </div>
                        <!-- <div class="badges-wrapper">
                            NO BADGES
                        </div> -->
                            <figure>
                                <img src="../../public/img/5.webp" alt="">
                                <img class="img-b" src="../../public/img/5b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Maya Deluxe</p>
                            <p class="item">STRIP BODICE</p>
                            <P class="price">99,99 €</p>
                        </div> 
                    </div>  
                </div>

                <div class="col-4">
                    <div class="card">
                        <div class="card-top">
                        <div class="heart">
                            <p class="heart-size">&#9829;</p>
                        </div>
                        <div class="badges-wrapper">
                            <div class="sustainable sustainable-top">
                                <span>Sostenibity</span>
                            </div>
                        </div>
                            <figure>
                                <img src="../../public/img/6.webp" alt="">
                                <img class="img-b" src="../../public/img/6b.webp" alt="">
                            </figure> 
                        </div>
                        <div class="card-description">
                            <p class="griff">Esprit</p>
                            <p class="item">MAGLIONE BLACK</p>
                            <P class="price">29,99 €</p>
                        </div> 
                    </div>  
                </div>
            </div>
        </div>
    </main>     
    </div>
</template>

<style>

main {
	padding-top: 100px;
	padding-bottom: 100px;
}
    .card-top {
	position: relative;
}

.card:hover img {
	display:none ;
}

.card:hover .img-b {
	display:block ;
}

.card:hover .heart-size {
	color: red;
}

.col {
	justify-content: center;
	display: flex;
}

.col-6 {
	flex-basis: calc((100% / 12) * 6);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.col-4 {
	flex-basis: calc((100% / 12) * 4);
	padding-left: 20px;
	padding-bottom: 60px;
}

.col-2 {
	flex-basis: calc((100% / 12) * 2);
}

.griff {
	line-height: 1em;
	font-size: 12px;
	color: grey;
	padding-top: 5px;
}

.item {
	font-weight: bolder;
	line-height: 1.2em ;
}

.price {
	color: red;
	line-height: 1em ;
	font-size: 1em;
	font-weight: bolder;
}

.badges-wrapper {
	position: absolute;
	bottom: 0;
	display: flex;
	gap: 5px;
	
}

.price-off{
	background-color: red;
	color: white;
	font-weight: bolder;
	padding-left: 10px;
	padding-right: 10px;
}

.sustainable {
	background-color: #008000 ;
	color: white;
	font-weight: bolder;
	padding-left: 10px;
	padding-right: 10px;
}

.just-sustainable {
	background-color: #008000 ;
	color: white;
	font-weight: bolder;
	padding-left: 10px;
	padding-right: 10px;
}

.heart-size {
	font-size: 32px;
	padding-left: 10px;
	padding-right: 10px;
}

.heart {
	position: absolute;
	top: 2%;
	right: 0;
	background-color: white;
	cursor: pointer;
}

h4 {
	text-align: center;
	padding-bottom: 20px;
}

p > span {
	color: black;
	line-height: 1em ;
	font-size: 1em;
	font-weight: bolder;
	text-decoration-line: line-through;
}

</style>