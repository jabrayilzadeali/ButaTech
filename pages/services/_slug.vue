<template>
	<div>
		<Nav current="Service"/>
		<PageHeader :title="service.title" img="/images/custom/service/graphic-design/graphic-design.jpg"/>
		
		<section>
		<div class="container py-5">
			<!-- FOR DEMO PURPOSE -->
			<header class="text-center mb-5 text-white">
			<div class="row">
				<div class="col-lg-7 mx-auto">
				<h1>Qiymət cədvəli</h1>
				<!-- <p>Easily create a classy pricing table in Bootstrap&nbsp;4.<br> <a href="https://bootstrapious.com/snippets" class="text-reset">Bootstrap snippet by Bootstrapious</a></p> -->
				</div>
			</div>
			</header>
			<!-- END -->

			<div class="row text-center align-items-end">
				<!-- Pricing Table-->
				<div class="col-lg-4 mb-5 mb-lg-0">
					<div class="bg-white p-5 rounded-lg shadow">
						<h1 class="h6 text-uppercase font-weight-bold mb-4">Bəsit</h1>
						<h2 class="h1 font-weight-bold">
							{{ service.basic }} <svg class="manat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 64V98.65C314.8 113.9 384 192.9 384 288V448C384 465.7 369.7 480 352 480C334.3 480 320 465.7 320 448V288C320 228.4 279.2 178.2 224 164V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V164C104.8 178.2 64 228.4 64 288V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V288C0 192.9 69.19 113.9 160 98.65V64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64z"/></svg>
							<span class="text-small font-weight-normal ml-2">/ saat</span>
						</h2>
						<div class="custom-separator my-4 mx-auto bg-primary"></div>
						<ul class="list-unstyled my-5 text-small text-left">
							<li class="mb-3" v-for="item in service.basic_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
							<li class="mb-3 text-muted" v-for="item in service.standart_features.split(',')" :key="item">
								<i class="fa fa-times mr-2"></i>
								<del>{{ item }}</del>
							</li>
							<li class="mb-3 text-muted" v-for="item in service.advanced_features.split(',')" :key="item">
								<i class="fa fa-times mr-2"></i>
								<del>{{ item }}</del>
							</li>
						</ul>
						<a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Əlaqə</a>
					</div>
				</div>
				<!-- END -->

				<!-- Pricing Table-->
				<div class="col-lg-4 mb-5 mb-lg-0">
					<div class="bg-white p-5 rounded-lg shadow">
						<h1 class="h6 text-uppercase font-weight-bold mb-4">Pro</h1>
						<h2 class="h1 font-weight-bold">
							{{ service.standart }}  <svg class="manat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 64V98.65C314.8 113.9 384 192.9 384 288V448C384 465.7 369.7 480 352 480C334.3 480 320 465.7 320 448V288C320 228.4 279.2 178.2 224 164V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V164C104.8 178.2 64 228.4 64 288V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V288C0 192.9 69.19 113.9 160 98.65V64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64z"/></svg>
							<span class="text-small font-weight-normal ml-2">/ saat</span>
						</h2>
						<div class="custom-separator my-4 mx-auto bg-primary"></div>
						<ul class="list-unstyled my-5 text-small text-left font-weight-normal">
							<li class="mb-3" v-for="item in service.basic_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
							<li class="mb-3 text-muted" v-for="item in service.standart_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
							<li class="mb-3 text-muted" v-for="item in service.advanced_features.split(',')" :key="item">
								<i class="fa fa-times mr-2"></i>
								<del>{{ item }}</del>
							</li>
						</ul>
						<a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Əlaqə</a>
					</div>
				</div>
				<!-- END -->

				<!-- Pricing Table-->
				<div class="col-lg-4">
					<div class="bg-white p-5 rounded-lg shadow">
						<h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
						<h2 class="h1 font-weight-bold">
							{{ service.advanced }} <svg class="manat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 64V98.65C314.8 113.9 384 192.9 384 288V448C384 465.7 369.7 480 352 480C334.3 480 320 465.7 320 448V288C320 228.4 279.2 178.2 224 164V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V164C104.8 178.2 64 228.4 64 288V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V288C0 192.9 69.19 113.9 160 98.65V64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64z"/></svg>
							<span class="text-small font-weight-normal ml-2">/ saat</span>
						</h2>
						<div class="custom-separator my-4 mx-auto bg-primary"></div>
						<ul class="list-unstyled my-5 text-small text-left font-weight-normal">
							<li class="mb-3" v-for="item in service.basic_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
							<li class="mb-3 text-muted" v-for="item in service.standart_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
							<li class="mb-3 text-muted" v-for="item in service.advanced_features.split(',')" :key="item">
								<i class="fa fa-check mr-2 text-primary"></i>
								{{ item }}
							</li>
						</ul>
						<a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">Əlaqə</a>
					</div>
				</div>
				<!-- END -->

				<!-- 
				<div class="col-lg-4">
					<div class="bg-white p-5 rounded-lg shadow">
						<div class="card__custom">
							<div 
							 	class="card__inner"
								v-on:click="cardFlipAnimation(this, 'card__inner')"
								>
								<figure class="front">
									<h1>Pro Tier</h1>
									<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, temporibus.</p>
								</figure>
								<figure class="back">
									<h1>Cool you nailed it</h1>
									<button>Please buy me</button>
								</figure>
							</div>
						</div>
					</div>
				</div> -->
			</div>


			<div class="row">
				<div class="col-lg-4">
					<div 
						class="card__inner enterprise bg-white rounded-lg shadow"
						>
						<figure class="front p-5">
							<h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
							<h2 class="h1 font-weight-bold">
								{{ service.advanced }} <svg class="manat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 64V98.65C314.8 113.9 384 192.9 384 288V448C384 465.7 369.7 480 352 480C334.3 480 320 465.7 320 448V288C320 228.4 279.2 178.2 224 164V448C224 465.7 209.7 480 192 480C174.3 480 160 465.7 160 448V164C104.8 178.2 64 228.4 64 288V448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V288C0 192.9 69.19 113.9 160 98.65V64C160 46.33 174.3 32 192 32C209.7 32 224 46.33 224 64z"/></svg>
								<span class="text-small font-weight-normal ml-2">/ saat</span>
							</h2>
							<div class="custom-separator my-4 mx-auto bg-primary"></div>
							<ul class="list-unstyled my-5 text-small text-left font-weight-normal">
								<li class="mb-3" v-for="item in service.basic_features.split(',')" :key="item">
									<i class="fa fa-check mr-2 text-primary"></i>
									{{ item }}
								</li>
								<li class="mb-3 text-muted" v-for="item in service.standart_features.split(',')" :key="item">
									<i class="fa fa-check mr-2 text-primary"></i>
									{{ item }}
								</li>
								<li class="mb-3 text-muted" v-for="item in service.advanced_features.split(',')" :key="item">
									<i class="fa fa-check mr-2 text-primary"></i>
									{{ item }}
								</li>
							</ul>
							<button 
								class="btn btn-primary btn-block p-2 shadow rounded-pill"
								v-on:click="cardFlipAnimation(this, 'enterprise')"
								>
								Əlaqə
							</button>
						</figure>
						<figure class="back p-5">
							<h1 class="h6 text-uppercase font-weight-bold mb-4">Enterprise</h1>
							<form class="text-left">
								<div class="form-group">
									<label for="costumer-name">Ad</label>
									<input type="text" class="form-control" id="costumer-name" placeholder="Şahin">
								</div>
								<div class="form-group">
									<label for="costumer-email">Email</label>
									<input type="email" class="form-control" id="costumer-email" aria-describedby="emailHelp" placeholder="sahin@butatech.com">
								</div>
								<div class="form-group">
									<label for="exampleFormControlTextarea1">Məlumat</label>
									<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
								</div>
								<input type="submit" class="btn btn-block rounded-pill my-3 p-2 btn-dark" value="Göndər">
							</form>
							<button 
								class="btn btn-danger btn-block my-3 p-2 shadow rounded-pill"
								v-on:click="cardFlipAnimation(this, 'enterprise')"
								>
								Geri
							</button>
						</figure>
					</div>
				</div>
				<!-- END -->
			</div>
		</div>
		</section>
		<ServiceDetails :service="service" />
		<!-- <BlogSingle :article="article" /> -->
		<Footer />
	</div>
</template>

<script>
	import Nav from "../../components/Nav";
	import PageHeader from "../../components/PageHeader";
	import Footer from "../../components/Footer";
	import ServiceDetails from '../../components/ServiceDetails.vue';
	export default {
		components: {
      PageHeader,
      Footer,
      Nav,
      ServiceDetails
    },
	data: {
		isCardFlipped: false
	},

	methods: {
		cardFlipAnimation(el, el_name) {
			console.log('ok')
			this.isCardFlipped = !this.isCardFlipped;
			// el.classList.toggle('change')
			this.$el.querySelector(`.${el_name}`).classList.toggle('is_flipped')
			console.log(this.isCardFlipped)
			return this.isCardFlipped
		}
	},
	  
    // async asyncData ({ $content, params }) {
    //   const services = await $content('services', params.slug)
    //     .only(['title', 'description', 'icon', 'slug'])
    //     .sortBy('createdAt', 'asc')
    //     .fetch();



    //   return {
    //     service, services
    //   }
    // },
	// computed: {
	// 	splitedString() {
	// 		console.log(service.basic_features)
	// 		// const newArr = service.basic_features.split(' ')
	// 		// return newArr
	// 		return 'ok'
	// 	}
	// },
    async asyncData({ $content, params }) {

        const service = await $content('services', params.slug).fetch();
        console.log(params)
        console.log(params.slug)
		// basic_features = service.basic_features.split(' ')
      return {
        service
      }
    },
    head(){
      return {
        title: "ButaTech | Nuxt Content Blog"
      }
    }
  }
</script>

<style scoped>
	.card__custom {
		background-color: transparent;
		border: 1px solid #f1f1f1;
		perspective: 1000px; /* Remove this if you don't want the 3D effect */
	}

	/* This container is needed to position the front and back side */
	.card__inner {
		position: relative;
		width: 100%;
		height: 660.23px;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;
	}

	.card__inner.is_flipped {
		transform: rotateY(180deg);
	}

	/* Position the front and back side */
	.front, .back {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden; /* Safari */
		backface-visibility: hidden;
	}

	/* Style the front side (fallback if image is missing) */
	.front {
		/* background-color: #bbb; */
		color: black;
	}

	/* Style the back side */
	.back {
		transform: rotateY(180deg);
	}


	/* .card__face--front {
		background-color: blue;
	}

	.card__face--back {
		background-color: #f2f;
		transform: rotateY(180deg);
	} */

	/* .card-flip-me > div {
		width: 100%;
		height: 100%;
		position: absolute;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	}

	.card-flip-me .front {
		background-color: blue;
		color: white;
	}

	.card-flip-me .back {
		background-color: red;
		color: white;
		transform: rotateY(180deg);
	} */




	.nuxt-content {
		font-size: 55px;
		width: 90% !important;
		margin: auto;
		display: block;
	}

	.manat {
		width: 2rem;
		margin-bottom: 12px;
	}

	/* @media (max-width: 800px) {
		.nuxt-content {
			width: 800px;
			margin: auto;
		}
	} */

	/* article {
	display: block;
	margin: 0 auto;
	padding: 50px 30px;
	max-width: 800px;
	}
	h1 {
	font-size: 28px;
	font-weight: 900;
	margin-bottom: 30px;
	} */

</style>

