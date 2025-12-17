<template>
  <main>
    <!-- Slider -->
    <HomeSlider />

    <!-- About -->
    <AboutSection />

    <!-- Trust Badges -->
    <TrustBadgesSection />

    <!-- Services -->
    <ServiceSection />

    <!-- Portfolio/Gallery -->
    <PortfolioSection />

    <!-- Team -->
    <TeamSection />

    <!-- Steps/Process -->
    <ProcessSection />

    <!-- Testimonial -->
    <TestimonialSection />

    <!-- Video -->
    <VideoSection />

    <!-- Counter -->
    <CounterSection />

    <!-- CTA Section -->
    <CtaSection />

    <!-- Blog -->
    <BlogSection />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

// SEO Configuration
useSeoMeta({
  title: 'Commercial Kitchen Equipment & Design in Kenya | Beyond Commercial Kitchen',
  ogTitle: 'Commercial Kitchen Equipment & Design in Kenya | Beyond Commercial Kitchen',
  description: 'Leading commercial kitchen consultants in Kenya. We supply premium kitchen equipment, stainless steel fabrication, and complete kitchen design services in Nairobi, Mombasa, and East Africa.',
  ogDescription: 'Leading commercial kitchen consultants in Kenya. We supply premium kitchen equipment, stainless steel fabrication, and complete kitchen design services in Nairobi, Mombasa, and East Africa.',
  keywords: 'commercial kitchen equipment Kenya, kitchen design Nairobi, stainless steel fabrication Kenya, commercial kitchen consultants, restaurant kitchen equipment, hotel kitchen suppliers, cold room installation Kenya, kitchen exhaust systems',
  ogImage: '/img/slider/slider_bg.png',
  ogType: 'website',
  ogLocale: 'en_KE',
  twitterCard: 'summary_large_image',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: 'https://commercialkitchen.co.ke' }
  ]
})

onMounted(() => {
  setTimeout(() => {
    // Global WOW init if needed centrally, or keep it per component if specific
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, 100);
})
</script>
