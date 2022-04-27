<template>
	<div>
		<Nav current="Blog"/>
		<PageHeader title="Blog Post" />
		<BlogSingle :article="article" />
		<Footer />
	</div>
</template>

<script>
	import Nav from "../../components/Nav";
	import PageHeader from "../../components/PageHeader";
	import BlogSingle from "../../components/BlogSingle";
	import Footer from "../../components/Footer";
  export default {
    components: {
      PageHeader,
      Footer,
      BlogSingle,
      Nav
    },
	  
    async asyncData ({ $content, params }) {
      const article = await $content('blogs', params.slug).fetch();

      return {
        article
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
