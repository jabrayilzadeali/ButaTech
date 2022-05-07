<template>
  <div>
    <Nav current="Service" />
    <PageHeader title="Servislər" img="images/custom/service/service.jpg" />
    <ServicesPage :services="services" />
    <!-- <WeWorkSection /> -->
    <CallToActionThree />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ServicesPage from "../components/ServicesPage";
//   import WeWorkSection from "../components/WeWorkSection";
  import CallToActionThree from "../components/CallToActionThree";
  export default {
    components: {
      CallToActionThree,
    //   WeWorkSection,
      ServicesPage,
      Footer,
      PageHeader,
      Nav
    },
	async asyncData({ $content, params }) {
		const services = await $content('services', params.slug)
		 	.only(['title', 'description', 'icon', 'slug'])
			.sortBy('createdAt', 'asc')
			.fetch();

		console.log(services)
		return {
			services
		}
	},
    head(){
      return {
        title: "Linoor | Servislər"
      }
    }
  }
</script>
