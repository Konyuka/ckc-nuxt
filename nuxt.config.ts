// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  site: {
    url: 'https://commercialkitchen.co.ke',
    name: 'Beyond Commercial Kitchen',
    description: 'Premier commercial kitchen equipment, design, and fabrication solutions in Nairobi, Mombasa, Kisumu, and across Kenya.',
    defaultLocale: 'en',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/seo'
  ],
  app: {
    head: {
      title: 'Beyond Commercial Kitchen - Premier Kitchen Equipment, Design, and Fabrication Solutions',
      bodyAttrs: {
        class: 'dark'
      },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        { src: '/js/vendor/modernizr-3.5.0.min.js' },
        { src: '/js/vendor/jquery.min.js' },
        { src: '/js/popper.min.js' },
        { src: '/js/bootstrap.min.js' },
        { src: '/js/slick.min.js' },
        { src: '/js/ajax-form.js' },
        { src: '/js/paroller.js' },
        { src: '/js/wow.min.js' },
        { src: '/js/js_isotope.pkgd.min.js' },
        { src: '/js/imagesloaded.min.js' },
        { src: '/js/parallax.min.js' },
        { src: '/js/jquery.waypoints.min.js' },
        { src: '/js/jquery.counterup.min.js' },
        { src: '/js/jquery.scrollUp.min.js' },
        { src: '/js/jquery.meanmenu.min.js' },
        { src: '/js/parallax-scroll.js' },
        { src: '/js/jquery.magnific-popup.min.js' },
        { src: '/js/element-in-view.js' },
        { src: '/js/element-in-view.js' }
      ],
      link: [
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: '/css/animate.min.css' },
        { rel: 'stylesheet', href: '/css/magnific-popup.css' },
        { rel: 'stylesheet', href: '/fontawesome/css/all.min.css' },
        { rel: 'stylesheet', href: '/css/dripicons.css' },
        { rel: 'stylesheet', href: '/css/slick.css' },
        { rel: 'stylesheet', href: '/css/meanmenu.css' },
        { rel: 'stylesheet', href: '/css/default.css' },
        { rel: 'stylesheet', href: '/css/style.css' },
        { rel: 'stylesheet', href: '/css/responsive.css' }
      ]
    }
  }
})
