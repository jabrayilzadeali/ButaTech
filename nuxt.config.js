
export default {
	target: 'static',
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [

      { rel: 'icon', type: 'image/x-icon', href: '/images/logo.png' },
			{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700&family=Inter:wght@400;700&family=Lexend+Deca&family=Overpass:wght@400;700&family=Poppins:wght@300;400;500;600&family=Red+Hat+Display:wght@500;700;900&display=swap" },
      // { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Teko:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "/css/bootstrap.css" },
      { rel: "stylesheet", href: "/css/animate.css" },
      { rel: "stylesheet", href: "/css/fontawesome-all.css" },
      { rel: "stylesheet", href: "/css/flaticon.css" },
      { rel: "stylesheet", href: "/css/hover.css" },
      { rel: "stylesheet", href: "/css/custom-animate.css" },
      { rel: "stylesheet", href: "/plugins/glightbox/glightbox.min.css" },
      { rel: "stylesheet", href: "/css/style.css" },
      { rel: "stylesheet", href: "/css/rtl.css" },
      { rel: "stylesheet", href: "/css/responsive.css" },
      { rel: "stylesheet", href: "/css/colors/color-default.css" }
    ],

    script: [
      { src: "/plugins/glightbox/glightbox.min.js", body: true },
      { src: "/plugins/accordion/accordion.min.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ffa915', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
		{src:"plugins/drift.js", mode:'client', ssr: false},
    {src: 'plugins/owl.js', ssr: false},
    {src: 'plugins/mixitup.js', ssr: false},
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
		"@nuxt/components",
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
		'@nuxt/content'
  ],
	content: [
		// Option
	],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
