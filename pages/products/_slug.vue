<template>
  <div>
	  <Nav current="Products" />
	  <PageHeader title="Product" />
	  <!-- {{ product }} -->
	  <GallerySingleTwo :product="product" />
	  <Footer />
  </div>
</template>
<script>
  import Nav from "../../components/Nav";
  import PageHeader from "../../components/PageHeader";
  import Footer from "../../components/Footer";
  import GallerySingleTwo from "../../components/GallerySingleTwo";
  export default {
    components: {
      GallerySingleTwo,
      Footer,
      PageHeader,
      Nav
    },
    async asyncData ({ $content, params }) {
      const product = await $content('products', params.slug).fetch();
	  console.log(params)
	  console.log(params.slug)

      return {
        product
      }
    },
    head(){
      return {
        title: "Linoor | Portfolio Single 2"
      }
    }
  }
</script>

