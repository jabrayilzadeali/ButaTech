<template>
  <div>
    <Nav current="Blog" />
    <PageHeader title="Blog Single" />
	<!-- {{ page }} -->
    <BlogSingle :contentText="page" />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import BlogSingle from "../components/BlogSingle";
  import Footer from "../components/Footer";
  export default {
    components: {
      Footer,
      PageHeader,
      BlogSingle,
      Nav,
    },
    async asyncData ({ $content }) {
      const page = await $content('home').fetch()

      return {
        page
      }
    },
    head(){
      return {
        title: "Linoor | Blog Single"
      }
    }
  }
</script>
