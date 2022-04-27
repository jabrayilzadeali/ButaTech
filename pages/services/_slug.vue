<template>
	<div>
		<Nav current="Service"/>
		<PageHeader title="Service Page" />
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
	  
    async asyncData ({ $content, params }) {
      const service = await $content('services', params.slug).fetch();
	  console.log(params)
	  console.log(params.slug)

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

	.nuxt-content{
		font-size: 55px;
		width: 90% !important;
		margin: auto;
		display: block;
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

