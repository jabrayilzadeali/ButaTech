<template>
  <section class="services-section-three padd-top">
    <div class="auto-container">
      <div class="services">
        <div class="row clearfix">
          <!--Service Block-->
          <div v-for="service of services" :key="service" class="service-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="0ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 0ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <div class="bottom-curve"></div>
              <div class="icon-box"><span :class="service.icon"></span></div>

			<nuxt-link :to="{ name: 'services-slug', params: { slug: service.slug }}">
              <h5><a href="#">{{ service.title }}</a></h5>
			</nuxt-link>
              <div class="text">{{ service.description }}</div>

			<nuxt-link :to="{ name: 'services-slug', params: { slug: service.slug }}">
              <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
			</nuxt-link>
			  
            </div>
          </div>

          <!--Service Block-->
          <div class="service-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 300ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <div class="bottom-curve"></div>
              <div class="icon-box"><span class="flaticon-digital"></span></div>
              <h5><a href="#">MARKETING <br>STRATEGY</a></h5>
              <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
              <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
            </div>
          </div>

          <!--Service Block-->
          <div class="service-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 600ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <div class="bottom-curve"></div>
              <div class="icon-box"><span class="flaticon-instant-camera"></span></div>
              <h5><a href="#">Digital <br>Products</a></h5>
              <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
              <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
            </div>
          </div>

          <!--Service Block-->
          <div class="service-block-two col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp animated" data-wow-delay="900ms" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-delay: 900ms; animation-name: fadeInUp;">
            <div class="inner-box">
              <div class="bottom-curve"></div>
              <div class="icon-box"><span class="flaticon-monitor"></span></div>
              <h5><a href="#">Website <br>Development</a></h5>
              <div class="text">Lorem ipsum is are many variations of pass of majority.</div>
              <div class="link-box"><a href="#"><span class="fa fa-angle-right"></span></a></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "ServicesPage",
	props: {
		services: {
			type: Array
		}
	}
  }

</script>

<style scoped>

</style>
