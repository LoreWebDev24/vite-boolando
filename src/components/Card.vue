<script>
// VUE
export default {
	name: 'Card',
	props: {
		item: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			fullPrices: []
		}
	},
	created() {
		for (let i = 0; i < this.item.badges.length; i++) {
			const currentBadge = this.item.badges[i]
			if (currentBadge.type === 'discount') {
				const percentage = Math.abs(parseInt(currentBadge.value)/100) 
				console.log(percentage);
				const denominator = 1 - percentage
				const fullPrice = (this.item.price)/ denominator
				this.fullPrices.push(fullPrice.toFixed(2))
			}
		}
	}
}
</script>

<template>
	<div class="col-4">
		<div class="card">
			<div class="card-top">
				<div class="heart" :class="{ red: item.isInFavorites }">
					<span class="wrapper heart-size hearth">&#9829;</span>
				</div>
				<i @click="$emit('show', item)" class="wrapper-icon fa-solid fa-circle-info"></i>
				<div class="badges-wrapper">
					<div v-for="(badge, i) in item.badges" :key="i"
						:class="(badge.type === 'discount') ? 'price-off' : 'sustainable'">
						<span>{{ badge.value }}</span>
					</div>
				</div>
				<figure>
					<img :src="'../../public/img/' + item.frontImage" alt="">
					<img class="img-b" :src="'../../public/img/' + item.backImage" alt="">
				</figure>
			</div>
			<div class="card-description">
				<ul>
					<li class="griff">{{ item.brand }}</li>
					<li class="item">{{ item.name }}</li>
					<div class="prices-wrapper">
					<li class="price">{{ item.price }}&euro;</li>
					<li v-for="fullPrice in fullPrices" class="price full-price">{{ fullPrice}}&euro;</li>
					</div>		
				</ul>
			</div>
		</div>
	</div>
</template>

<style scoped>
ul {
	display: flex;
	flex-direction: column;
	gap: 1px;
}

.card-top {
	position: relative;
}

.card:hover img {
	display: none;
}

.card:hover .img-b {
	display: block;
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
	line-height: 1.2em;
}

.price {
	color: rgb(128, 17, 17);
	line-height: 1em;
	font-size: 1em;
	font-weight: bolder;
}

.price-full {
	color: red;
	text-decoration: line-through;
}

.badges-wrapper {
	position: absolute;
	bottom: 10px;
	display: flex;
	gap: 5px;
}

.wrapper-icon {
	position: absolute;
	top: 10px;
	left: 10px;
	cursor: pointer;
	color: white;
	font-size: 20px;
}

.prices-wrapper {
	display: flex;
	align-items: center;
	gap: 20px;
}

.price-off {
	background-color: red;
	color: white;
	font-weight: bolder;
	padding-left: 10px;
	padding-right: 10px;
}

.full-price {
	color: red;
	text-decoration: line-through;
}

.sustainable {
	background-color: #008000;
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

/* UTILITY */
.red {
	color: red;
}
</style>