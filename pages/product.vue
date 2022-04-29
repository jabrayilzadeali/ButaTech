<template>
  <div>
    <Nav current="Product" />
    <PageHeader title="Products" img="/images/custom/product/product.jpg" />
	<!-- {{ products }} -->
    <GalleryPage :products="products"/>
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import GalleryPage from "../components/GalleryPage";
  export default {
    components: {
      GalleryPage,
      Footer,
      PageHeader,
      Nav
    },
	async asyncData({ $content, params }) {
		const products = await $content('products', params.slug)
		 	.only(['title', 'description', 'tags', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		console.log(products)
		return {
			products
		}
	},
    head(){
      return {
        title: "Linoor | Products"
      }
    }
  }
</script>
