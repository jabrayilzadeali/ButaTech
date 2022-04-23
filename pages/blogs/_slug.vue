<template>
	<div>
		<Nav current="Blog"/>
		<PageHeader title="Blog Post" />
		<article>
			<nuxt-content :document="article" />
		</article>
	</div>
</template>

<script>
	import Nav from "../../components/Nav";
	import PageHeader from "../../components/PageHeader";
  export default {
    components: {
      PageHeader,
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
		display: block;
	}

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
