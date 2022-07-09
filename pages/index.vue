<template>
  <div>
    <Nav current="Ev" />
	<Banner />
    <!-- <BannerTwo /> -->
    <!-- <ServicesTwo /> -->
    <Services />
    <FeaturedSection />
    <GalleryCarousel :products="products" />
    <WhyUsSection />
    <Testimonial />
    <!-- <Features /> -->
    <QuoteSection/>
    <BrandsSection />
    <!-- <FunFacts /> -->
    <!-- <BlogSection :articles="articles" /> -->
    <!-- <FluidSection /> -->
    <CallToAction />
    <Footer />
  </div>
</template>


<script>
  import Nav from "../components/Nav";
  import Footer from "../components/Footer";
//   import BannerTwo from "../components/BannerTwo";
  import Banner from "../components/Banner";
//   import FunFacts from "../components/FunFacts";
//   import ServicesTwo from "../components/ServicesTwo";
  import Services from "../components/Services";
  import FeaturedSection from "../components/FeaturedSection";
  import GalleryCarousel from "../components/GalleryCarousel";
  import WhyUsSection from "../components/WhyUsSection";
  import Testimonial from "../components/Testimonial";
//   import Features from "../components/Features";
  import QuoteSection from "../components/QuoteSection";
  import BrandsSection from "../components/BrandsSection";
//   import BlogSection from "../components/BlogSection";
//   import FluidSection from "../components/FluidSection";
  import CallToAction from "../components/CallToAction";

  export default {
    components: {
    //   FluidSection,
	  CallToAction,
    //   BlogSection,
      BrandsSection,
      QuoteSection,
    //   Features,
      Testimonial,
      WhyUsSection,
      GalleryCarousel,
      FeaturedSection,
    //   ServicesTwo,
      Services,
    //   FunFacts,
    //   BannerTwo,
	  Banner,
      Footer,
      Nav
    },
	async asyncData({ $content, params }) {

		// const articles = await $content('blogs', params.slug)
		//  	.only(['title', 'description', 'img', 'slug'])
		// 	.sortBy('createdAt', 'asc')
		// 	.limit(3)
		// 	.fetch();

		const products = await $content('products', params.slug)
		 	.only(['title', 'description', 'tags', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		return {
			products
		}
	},
    head(){
      return {
        title: "ButaTech | Home"
      }
    }
  }

</script>