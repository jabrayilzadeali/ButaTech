<template>
  <div>
    <Nav />
	<Banner />
    <!-- <BannerTwo /> -->
    <FunFacts />
    <ServicesTwo />
    <FeaturedSection />
    <GalleryCarousel />
    <WhyUsSection />
    <Testimonial />
    <Features />
    <QuoteSection/>
    <BrandsSection />
    <BlogSection />
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
  import FunFacts from "../components/FunFacts";
  import ServicesTwo from "../components/ServicesTwo";
  import FeaturedSection from "../components/FeaturedSection";
  import GalleryCarousel from "../components/GalleryCarousel";
  import WhyUsSection from "../components/WhyUsSection";
  import Testimonial from "../components/Testimonial";
  import Features from "../components/Features";
  import QuoteSection from "../components/QuoteSection";
  import BrandsSection from "../components/BrandsSection";
  import BlogSection from "../components/BlogSection";
//   import FluidSection from "../components/FluidSection";
  import CallToAction from "../components/CallToAction";
  export default {
    components: {
    //   FluidSection,
	  CallToAction,
      BlogSection,
      BrandsSection,
      QuoteSection,
      Features,
      Testimonial,
      WhyUsSection,
      GalleryCarousel,
      FeaturedSection,
      ServicesTwo,
      FunFacts,
    //   BannerTwo,
	  Banner,
      Footer,
      Nav
    },
    head(){
      return {
        title: "Linoor | Home 2"
      }
    }
  }
</script>
