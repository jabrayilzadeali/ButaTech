<template>

  <div>

    <section class="banner-section banner-one">
      <div class="left-based-text">
        <div class="base-inner">
          <div class="hours">
            <ul class="clearfix">
              <li><span>b.e - c.</span></li>
              <li><span>09:00 - 18:00</span></li>
            </ul>
          </div>
          <div class="social-links">
            <ul class="clearfix">
              <li><a href="#"><span>Twitter</span></a></li>
              <li><a href="#"><span>Facebook</span></a></li>
              <li><a href="#"><span>Youtube</span></a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="banner-carousel">

        <no-ssr> <!-- important to add no-ssr-->
          <carousel :items="1">
        <!-- Slide Item -->
        <div class="slide-item">
          <div class="image-layer" style="background-image: url(/images/main-slider/city1.jpg);"></div>
          <div class="left-top-line"></div>
          <div class="right-bottom-curve"></div>
          <div class="right-top-curve"></div>
          <div class="auto-container">
            <div class="content-box">
              <div class="content">
                <div class="inner">
                  <div class="sub-title">Ən yaxşı freelance Şirkəti</div>
                  <h1>Xəyallarını<br>Gerçəkləşdir</h1>
                  <div class="link-box">
                    <nuxt-link class="theme-btn btn-style-one" to="/about">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Daha çox kəşf elə</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Slide Item -->
        <div class="slide-item">
          <div class="image-layer" style="background-image: url(/images/main-slider/keyboard1.jpg);"></div>
          <div class="left-top-line"></div>
          <div class="right-bottom-curve"></div>
          <div class="right-top-curve"></div>
          <div class="auto-container">
            <div class="content-box">
              <div class="content">
                <div class="inner">
                  <div class="sub-title">ButaTech-ə xoş gəlmişsiniz.</div>
                  <h1>Smart Web <br>Design Agency</h1>
                  <div class="link-box">
                    <nuxt-link class="theme-btn btn-style-one" to="/about">
                      <i class="btn-curve"></i>
                      <span class="btn-title">Daha çoxunu kəşf elə</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          </carousel>
        </no-ssr>

      </div>
    </section>

  </div>

</template>

<script>

  export default {
    name: "Banner",
  }
</script>

<style scoped>

</style>
