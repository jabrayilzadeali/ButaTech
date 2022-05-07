<template>
  <div>
    <Nav current="Contact" />
    <PageHeader title="Əlaqə" img="/images/custom/contact/contact.jpg" />
    <FaqSection />
    <ContactPage />
    <Footer />
  </div>
</template>
<script>
  import Nav from "../components/Nav";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import ContactPage from "../components/ContactPage";
	import FaqSection from '../components/FaqSection.vue';
  export default {
    components: {
      ContactPage,
      FaqSection,
      Footer,
      PageHeader,
      Nav
    },
    head(){
      return {
        title: "Linoor | Əlaqə"
      }
    }
  }
</script>
