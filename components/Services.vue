<template>
  <section class="services-section">
    <div class="auto-container">
      <div class="row clearfix">
        <!--Title Block-->
        <div class="the-height title-block col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <div class="inner">
            <div class="sec-title">
              <h2>Problemlərinizi mükəmməl <br>Həll edəciyik<span class="dot">.</span></h2>
              <div class="lower-text">We are committed to providing our customers with exceptional
                service while offering our employees the best training.</div>
            </div>
          </div>
        </div>
        <!--Service Block-->
        <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"
             data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="flaticon-responsive"></span></div>
            <h6><nuxt-link to="/services/website-development">Website <br>Development</nuxt-link></h6>
          </div>
        </div>
        <!--Service Block-->
        <div class=" service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
             data-wow-delay="300ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="flaticon-computer"></span></div>
            <h6><nuxt-link to="/services/graphic-design">Graphic <br>Dizayn</nuxt-link></h6>
          </div>
        </div>
        <!--Service Block-->
        <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="0ms"
             data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="flaticon-development"></span></div>
            <h6><nuxt-link to="/services/programming">Programlaşdırma</nuxt-link></h6>
          </div>
        </div>
        <!--Service Block-->
        <div class="service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
             data-wow-delay="300ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="fas fa-microchip"></span></div>
            <h6><nuxt-link to="/services/pcb">PCB</nuxt-link></h6>
          </div>
        </div>
        <!--Service Block-->

        <div class="the-height service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
             data-wow-delay="600ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="flaticon-app-development"></span></div>
            <h6><nuxt-link to="/it">IT</nuxt-link></h6>
          </div>
        </div>
        <!--Service Block-->
        <div class=" service-block col-xl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInLeft"
             data-wow-delay="900ms" data-wow-duration="1500ms">
          <div class="inner-box">
            <div class="bottom-curve"></div>
            <div class="icon-box"><span class="flaticon-success"></span></div>
            <h6><nuxt-link to="/service">Bütün Servislər</nuxt-link></h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Services"
    }
</script>

<style scoped>
.the-height {
	height: 280px !important;
}

.custom-svg {
  width: 64px;
}

.custom-svg path {
  fill: hsl(219, 100%, 73%);
}

</style>
