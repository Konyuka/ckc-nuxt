<template>
  <section id="services" class="services-area services-bg  p-relative fix pt-120 pb-90"
    style="background-image: url(/img/bg/service-bg.png); background-size: cover;">
    <div class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-12 col-md-12">
          <div class="section-title p-relative text-center mb-50 wow fadeInLeft  animated" data-animation="fadeInLeft"
            data-delay=".4s">
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> Our Services</h5>
            <h2>
              What We’re Providing
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon1.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Kitchen Design & Planning</a></h5>
              <p>Optimum workflow design with HACCP compliance for commercial kitchens in Kenya.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon2.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Stainless Steel Fabrication</a></h5>
              <p>Custom-fabricated sinks, tables, and exhaust hoods made in Nairobi.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon3.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Kitchen Equipment Supply</a></h5>
              <p>Direct importers of heavy-duty ovens, chillers, and bakery equipment.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon4.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Cold Room Installation</a></h5>
              <p>Industrial cold storage solutions for hotels, butcheries, and hospitals.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon5.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Gas & Exhaust Systems</a></h5>
              <p>Safe and efficient LPG gas line installation and kitchen extraction systems.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="s-single-services mb-30 wow fadeInUp animated" data-animation="fadeInDown animated"
            data-delay=".2s">
            <div class="services-icon">
              <img src="/img/icon/se-icon6.png" alt="icon" />
            </div>
            <div class="second-services-content">
              <h5><a href="/services">Maintenance & Repairs</a></h5>
              <p>24/7 technical support and servicing for all commercial kitchen equipment.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    if (typeof $ === 'undefined') return;

    // Service active hover effect
    $('.s-single-services').on('mouseenter', function () {
      $(this).addClass('active').parent().siblings().find('.s-single-services').removeClass('active');
    });
  }, 100);
})
</script>
