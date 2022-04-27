<template>
  <div>
    <Nav current="Blog" />
    <PageHeader title="Blog Sidebar" />
    <BlogSidebar :articles="articles" />
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
