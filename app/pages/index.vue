<template>
  <main>
    <!-- Slider -->
    <HomeSlider />

    <!-- About -->
    <AboutSection />

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

    <!-- Blog -->
    <BlogSection />
  </main>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    // Global WOW init if needed centrally, or keep it per component if specific
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }, 100);
})
</script>
