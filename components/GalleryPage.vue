<template>
  <section class="gallery-section">
    <div class="auto-container">
      <!--MixitUp Galery-->
      <div class="mixitup-gallery">
          <!--Filter-->
          <div class="filters centered clearfix">
            <ul class="filter-tabs filter-btns clearfix">
              <li class="filter mixitup-control-active" data-role="button" data-filter="all">hamısı<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".branding">Brendlər<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".illustration">illüstrasiya<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".photography">Fotoqrafiya<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".web-design">Web Dizayn<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".first">First<sup></sup></li>
              <li class="filter" data-role="button" data-filter=".second">Second<sup></sup></li>
            </ul>
        </div>
        <div class="filter-list row">
          <!-- Gallery Item -->
          <div v-for="product of products" :key="product" :class="`gallery-item mix ${ product.tags } col-lg-4 col-md-6 col-sm-12`">
            <div class="inner-box">
			<nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug }}">
              <img :src="require(`../static/images/gallery/2.jpg`)" alt="">
			</nuxt-link>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>{{ product.tags }}</span></div>
                  <div class="title">
                    <h5><nuxt-link :to="{ name: 'products-slug', params: { slug: product.slug }}">{{ product.title }}</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all photography web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/2.jpg" alt=""></figure>
              <a href="/images/gallery/2.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>all photography web-design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all branding web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/3.jpg" alt=""></figure>
              <a href="/images/gallery/3.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>all branding web-design</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all branding illustration col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/4.jpg" alt=""></figure>
              <a href="/images/gallery/4.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>all branding illustration</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div
            class="gallery-item mix all branding illustration photography web-design col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/5.jpg" alt=""></figure>
              <a href="/images/gallery/5.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>branding illustration photography</span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Gallery Item -->
          <div class="gallery-item mix all illustration photography col-lg-4 col-md-6 col-sm-12">
            <div class="inner-box">
              <figure class="image"><img src="/images/gallery/6.jpg" alt=""></figure>
              <a href="/images/gallery/6.jpg" class="lightbox-image overlay-box"
                 data-fancybox="gallery"></a>
              <div class="cap-box">
                <div class="cap-inner">
                  <div class="cat"><span>all illustration photography </span></div>
                  <div class="title">
                    <h5><nuxt-link to="/portfolio-single">Fimlor Experience</nuxt-link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "GalleryPage",
    data () {
      return {
        mixer: null
      }
    },
	props: {
		products: {
			type: Array
		}
	},
    mounted () {
      const containerEl = document.querySelector('.filter-list')
      this.mixer = new this.mixitup(containerEl, {
      });

      new GLightbox({
        selector: '.lightbox-image',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    },
  }
</script>

<style scoped>

</style>
