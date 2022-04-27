<template>
  <div>
    <Nav current="Blog"/>
    <PageHeader title="Blog Posts" />
	<Search />
	<!-- {{ articles }} -->
    <BlogPage :articles="articles" />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import Search from "../components/Search";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import BlogPage from "../components/BlogPage";
  export default {
    components: {
      BlogPage,
      Footer,
      PageHeader,
      Nav,
	  Search
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
        title: "Linoor | Blog Posts"
      }
    }
  }
</script>

<style>
	input {
		display: flex;
		border: 1px solid black;
		width: 50%;
		/* height: 700px; */
		margin: auto;
		margin-top: 30px;
	}

	.news-section {
		padding-top: 30px;
	}

	.search-results {
		display: flex;
		width: 50%;
		/* height: 700px; */
		margin: auto;

	}
</style>
