<template>
  <header :class="`main-header header-style-one ${sticky ? 'fixed-header' : ''}`">

    <!-- Header Upper -->
    <div class="header-upper">
      <div class="inner-container clearfix">
        <!--Logo-->
        <div class="logo-box">
          <div class="logo">
            <a href="/" title="Linoor - Digital Agency Template" id="thm-logo-container">
              <!-- <img src="/images/logo-background.png" alt=""> -->
              <!-- <div class="left-top-curve"></div> -->
              <!-- <div class="left-top-curve"></div> -->
              <img src="/images/logoV3.png" id="thm-logo" alt="Butatech" title="Butatech" >
              <span class="logo-text"></span>
            </a>
          </div>
        </div>
        <div class="nav-outer clearfix">
          <!--Mobile Navigation Toggler-->
          <div class="mobile-nav-toggler">
            <span @click="mobileToggle = !mobileToggle" class="icon flaticon-menu-2"></span><span class="txt">Menu</span>
          </div>

          <!-- Main Menu -->
          <nav class="main-menu navbar-expand-md navbar-light">
            <div class="collapse navbar-collapse show clearfix">
              <ul class="navigation clearfix">
                <li :class="`${current === 'Home' ? 'current' : ''} dropdown`"><a href="/">Ev</a>
                  <!-- <ul>
                    <li><nuxt-link to="/">Home Style 01</nuxt-link></li>
                    <li><nuxt-link to="/index-2">Home Style 02</nuxt-link></li>
                    <li><nuxt-link to="/index-3">Home Style 03</nuxt-link></li>
                  </ul> -->
                </li>
                <li :class="`${current === 'About' ? 'current' : ''}`"><nuxt-link to="/about">Haqqımızda</nuxt-link></li>
                <!-- <li class="dropdown"><a href="/team">Pages</a>
                  <ul>
                    <li><nuxt-link to="/team">Our Team</nuxt-link></li>
                    <li><nuxt-link to="/testimonials">Testimonials</nuxt-link></li>
                    <li><nuxt-link to="/faqs">FAQs</nuxt-link></li>
                    <li><nuxt-link to="/not-found">404 Page</nuxt-link></li>
                  </ul>
                </li> -->
                <li :class="`${current === 'Service' ? 'current' : ''} dropdown`"><nuxt-link to="/service">Servislərimiz</nuxt-link>
                  <!-- <ul>
                    <li><nuxt-link to="/services">All Services</nuxt-link></li>
                    <li><nuxt-link to="/web-development">Website Development</nuxt-link></li>
                    <li><nuxt-link to="/graphic-designing">Graphic Designing</nuxt-link></li>
                    <li><nuxt-link to="/digital-marketing">Digital Marketing</nuxt-link></li>
                    <li><nuxt-link to="/seo">SEO & Content Writting</nuxt-link></li>
                    <li><nuxt-link to="/app-development">App Development</nuxt-link></li>
                    <li><nuxt-link to="/ui-designing">UI/UX Designing</nuxt-link></li>
                  </ul> -->
                </li>
                <li :class="`${current === 'Product' ? 'current' : ''} dropdown`"><nuxt-link to="/product">Lahiyə</nuxt-link>
                  <!-- <ul>
                    <li><nuxt-link to="/product">Product</nuxt-link></li>
                    <li><nuxt-link to="/product-single">Product Single 01</nuxt-link></li>
                    <li><nuxt-link to="/product-single-2">Product Single 02</nuxt-link></li>
                  </ul> -->
                </li>
                <li :class="`${current === 'Blog' ? 'current' : ''} dropdown`">
					<nuxt-link to="/blog">Blog</nuxt-link>
                </li>
                <li :class="`${current === 'Contact' ? 'current' : ''} dropdown`"><nuxt-link to="/contact">Əlaqə</nuxt-link></li>
              </ul>
            </div>
          </nav>
        </div>

        <div class="other-links clearfix">
          <div class="link-box">
            <div class="call-us">
              <a class="link" href="tel:6668880000">
                <span class="icon"></span>
                <span class="sub-text">Əlaqə nömrəsi</span>
                <span class="number">666 888 0000</span>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>
    <!--End Header Upper-->

	<!-- added fixed top mobile-nav__container -->
    <nav class="mobile-nav__container fixed-top">
      <!-- content is loading via js -->

      <div :class="`collapse navbar-collapse ${mobileToggle ? 'show' : ''} clearfix`">
        <ul class="navigation clearfix">
          <li :class="`${current === 'Home' ? 'current' : ''}`"><a href="/">Ev<div ></div></a>
            <!-- <ul class="sub-menu">
              <li><nuxt-link to="/">Home Style 01</nuxt-link></li>
              <li><nuxt-link to="/index-2">Home Style 02</nuxt-link></li>
              <li><nuxt-link to="/index-3">Home Style 03</nuxt-link></li>
            </ul> -->
          </li>
          <li :class="`${current === 'About' ? 'current' : ''}`"><nuxt-link to="/about">Haqqımızda</nuxt-link></li>
          <!-- <li class="dropdown"><a href="#">Pages<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div></a>
            <ul class="sub-menu">
              <li><nuxt-link to="/team">Our Team</nuxt-link></li>
              <li><nuxt-link to="/testimonials">Testimonials</nuxt-link></li>
              <li><nuxt-link to="/faqs">FAQs</nuxt-link></li>
              <li><nuxt-link to="/not-found">404 Page</nuxt-link></li>
            </ul>
          </li> -->
          <li :class="`${current === 'Service' ? 'current' : ''}`"><nuxt-link to="/service">Servis<div class="dropdown-btn"></div></nuxt-link>
            <!-- <ul class="sub-menu">
              <li><nuxt-link to="/services">All Services</nuxt-link></li>
              <li><nuxt-link to="/web-development">Website Development</nuxt-link></li>
              <li><nuxt-link to="/graphic-designing">Graphic Designing</nuxt-link></li>
              <li><nuxt-link to="/digital-marketing">Digital Marketing</nuxt-link></li>
              <li><nuxt-link to="/seo">SEO & Content Writting</nuxt-link></li>
              <li><nuxt-link to="/app-development">App Development</nuxt-link></li>
              <li><nuxt-link to="/ui-designing">UI/UX Designing</nuxt-link></li>
            </ul> -->
          </li>
          <li :class="`${current === 'Product' ? 'current' : ''}`"><nuxt-link to="/product">Məhsul<div class="dropdown-btn"></div></nuxt-link>
            <!-- <ul class="sub-menu">
              <li><nuxt-link to="/product">Product</nuxt-link></li>
              <li><nuxt-link to="/product-single">Product Single 01</nuxt-link></li>
              <li><nuxt-link to="/product-single-2">Product Single 02</nuxt-link></li>
            </ul> -->
          </li>
          <li :class="`${current === 'Blog' ? 'current' : ''}`"><nuxt-link to="/blog">Blog<div class="dropdown-btn"></div></nuxt-link>
            <!-- <ul class="sub-menu">
              <li><nuxt-link to="/blog">Blog Sidebar</nuxt-link></li>
              <li><nuxt-link to="/blog-grid">Blog Grid View</nuxt-link></li>
              <li><nuxt-link to="/blog-single">Blog Single</nuxt-link></li>
            </ul> -->
          </li>
          <li :class="`${current === 'Contact' ? 'current' : ''}`"><nuxt-link to="/contact">Əlaqə</nuxt-link></li>
        </ul>
      </div>
	
      <!-- <li v-if="!mobileToggle">Okay Buddy</li> -->
    </nav>
    <div @click="mobileToggle = !mobileToggle" v-if="mobileToggle" class="navbar-overlay"></div>

  </header>
</template>

<script>
  export default {
    name: "Nav",
    props: {
      current: {
        type: String
      }
    },
    data(){
      return {
		color: [0, 255, 0, 1],
        sticky: false,
        mobileToggle: false,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);

      const mobileNav = document.querySelector('.mobile-nav__container');
      const dropdownMenu = mobileNav.querySelectorAll('.dropdown');
      
      for (let i = 0; i < dropdownMenu.length; i++) {
        dropdownMenu[i].addEventListener("click", function() {
        this.classList.toggle('open');
        this.classList.toggle('current');
        });
      }


    },
    methods: {
      handleScroll() {
        if (window.scrollY > 230) {
          this.sticky = true
        } else if (window.scrollY < 230) {
          this.sticky = false
        }
      },
      whichPage() {
        return document.URL
      }
    }
  }
</script>

<style>
	.fixed-header .header-upper {
	/* background: #e4d7d762; */

	/* From https://css.glass */
	background: rgba(111, 110, 110, 0.42);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(7.7px);
	-webkit-backdrop-filter: blur(7.7px);
	border: 1px solid rgba(111, 110, 110, 0.19);

	/* background: linear-gradient(90deg, rgba(215,215,233,0.7035189075630253) 0%, rgba(21,25,37,0.7231267507002801) 100%); */
	/* -webkit-box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.08);
	-moz-box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.08);
	-ms-box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.08);
	-o-box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.08);
	box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.08); */
	}
</style>