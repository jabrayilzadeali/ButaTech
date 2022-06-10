<template>
  <div class="sidebar-page-container">
    <div class="auto-container">
      <div class="row clearfix">

        <!--Content Side-->
        <div class="content-side col-lg-8 col-md-12 col-sm-12">
          <div class="service-details">
            <div class="main-image image">
              <img src="/images/resource/featured-image-16.jpg" alt="">
            </div>
            <div class="text-content">
              <h1 id="service-name">{{ service.title }}</h1>
			  <table class="pricing">
				  <tr>
					  <th>Bəsit</th>
					  <th>Standart</th>
					  <th>Professional</th>
				  </tr>
				  <tr>
					  <td>{{ service.basic }}</td>
					  <td>{{ service.standart}}</td>
					  <td>{{ service.advanced }}</td>
				  </tr>
			  </table>
			  <nuxt-content :document="service" />
              <!-- <p>Need something changed or is there something not quite working the way you envisaged?
                Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.</p> -->
              <!-- <div class="featured">
                <div class="row clearfix">
                  <div class="image-col col-md-6 col-sm-12">
                    <div class="image">
                      <img src="/images/resource/featured-image-17.jpg" alt="">
                    </div>
                  </div>
                  <div class="text-col col-md-6 col-sm-12">
                    <div class="inner">
                      <h4>planning &amp; strategy</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry.</p>
                      <ul>
                        <li>Research beyond the business plan</li>
                        <li>Marketing options and rates</li>
                        <li>The ability to turnaround consulting</li>
                        <li>Customer engagement matters</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- <p>Need something changed or is there something not quite working the way you envisaged?
                Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially
                unchanged.</p>
              <p class="last">Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.</p> -->
            </div>
          </div>
        </div>

        <!--Sidebar Side-->
        <div class="sidebar-side col-lg-4 col-md-12 col-sm-12">
          <aside class="sidebar blog-sidebar">

            <div class="sidebar-widget services">
              <div class="widget-inner">
                <div class="sidebar-title">
                  <h4>All Services</h4>
                </div>
                <ul>
					
                  <li :class="service.title === 'Web Development' ? 'active' : ''"><nuxt-link to="/services/website-development">Website Development</nuxt-link></li>
                  <li :class="service.title === 'Graphic Design' ? 'active' : ''"><nuxt-link to="/services/graphic-design">Graphic Design</nuxt-link></li>
                  <li :class="service.title === 'Programming' ? 'active' : ''"><nuxt-link to="/services/programming">Programming</nuxt-link></li>
                  <li :class="service.title === 'Pcb' ? 'active' : ''"><nuxt-link to="/services/pcb">PCB</nuxt-link></li>
                  <li :class="service.title === 'It' ? 'active' : ''"><nuxt-link to="/services/it">IT</nuxt-link></li>
                  <li :class="service.title === '3d Printer' ? 'active' : ''"><nuxt-link to="/services/3d-printer">3d Printer</nuxt-link></li>
                  <li :class="service.title === 'Android' ? 'active' : ''"><nuxt-link to="/services/android">android</nuxt-link></li>
                  <li :class="service.title === 'Cnc' ? 'active' : ''"><nuxt-link to="/services/cnc">cnc</nuxt-link></li>
                  <li :class="service.title === 'Laser' ? 'active' : ''"><nuxt-link to="/services/laser">Laser</nuxt-link></li>
                </ul>
              </div>
            </div>

            <div class="sidebar-widget call-up">
              <div class="widget-inner">
                <div class="sidebar-title">
                  <h4>Butatech-in köməyinə ehtiyacınız var?</h4>
                </div>
                <!-- <div class="text">Prefer speaking with a human to filling out a form? call corporate
                  office and we will connect you with a team member who can help.</div> -->
                <div class="text">Bizə zəng edin və biz sizə hər şəkildə kömək edəceyik</div>
                <div class="phone"><a href="tel:666888000"><span class="icon flaticon-call"></span>666 888 000</a></div>
              </div>
            </div>


          </aside>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServiceDetails",
		props: {
			service: {
				type: Object
			},
		}
    }

</script>

<style>

h1#service-name {
	font-size: 5.5rem;
}

h1 {
	font-size: 4rem;
}

h2 {
	font-size: 3.2rem;
}

h3 {
	font-size: 2.4rem;
}

h4 {
	font-size: 1.6rem;
}

h5 {
	font-size: 1.2rem;
}

table {
	border-collapse: collapse;
	width: 100%;
}

th, th {
	border: 1px solid #000;
	text-align: center;
	padding: 8px;
}

td {
	text-align: center;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  h1#service-name {
	  font-size: 3.3rem;
  }
  h1 {
	  font-size: 2.6rem;
  }

  h2 {
	  font-size: 2rem;
  }

  h3 {
	  font-size: 1.6rem !important;
  }

  h4 {
	  font-size: 1.2rem;
  }

  h5 {
	  font-size: 1rem;
  }



}

</style>
