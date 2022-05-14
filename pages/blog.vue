<template>
  <div>
    <Nav current="Blog" />
    <!-- <PageHeader title="Blog" img="/images/custom/blogs/blog.jpg" /> -->
    <!-- <BlogSidebar :articles="articles" /> -->
	<h1 class="tezlikle">Tezliklə <span class="gelecek">gələcək</span></h1>
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogSidebar from "../components/BlogSidebar";
  export default {
    components: {
      BlogSidebar,
      Footer,
      PageHeader,
      Nav
    },
	async asyncData({ $content, params }) {
		const articles = await $content('blogs', params.slug)
		 	.only(['title', 'description', 'img', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			articles
		}
	},
    head(){
      return {
        title: "Linoor | Blog Sidebar"
      }
    }
  }
</script>

<style>
.tezlikle {
	padding: 300px 0;
	margin: 0;
	text-align: center;
	color: white;
	background-color: #222429 !important;
}

.gelecek {
	color: yellow;
}
</style>
