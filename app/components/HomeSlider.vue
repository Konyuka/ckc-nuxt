<template>
  <section id="home" class="slider-area fix p-relative">
    <div class="slider-active-two" style="background: #333333;">
      <!-- Slide 1 -->
      <div class="single-slider slider-bg d-flex align-items-center"
        style="background-image: url(/img/slider/slider_bg.png); background-size: cover;">
        <div class="container">
          <div class="slider-price">
            <ul>
              <li><a href="#">KE</a></li>
              <li><a href="#">TZ</a></li>
              <li><a href="#">UG</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Premium Kitchen Equipment</p>
              </li>
              <li>
                <span>02</span>
                <p>Custom SS Fabrication</p>
              </li>
              <li>
                <span>03</span>
                <p>Expert Design & Layout</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Transforming Culinary Spaces in Kenya</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Top-tier commercial kitchen equipment, design, and
                  fabrication services for hotels, restaurants, and institutions in Nairobi, Mombasa, Eldoret, and
                  beyond.</p>
              </div>
              <div class="slider-btn mt-30 ml">
                <a href="/projects" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">View Our
                  Projects</a>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 p-relative">
            </div>
          </div>
          <!-- Lines -->
          <div class="content-lines-wrapper">
            <div class="content-lines-inner">
              <div class="content-lines"></div>
            </div>
          </div>
          <!-- Lines -->
        </div>
      </div>
      <!-- Slide 2 -->
      <div class="single-slider slider-bg d-flex align-items-center"
        style="background-image: url(/img/slider/slider_img_bg02.png); background-size: cover;">
        <div class="container">
          <div class="slider-price">
            <ul>
              <li><a href="#">KE</a></li>
              <li><a href="#">TZ</a></li>
              <li><a href="#">UG</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Premium Kitchen Equipment</p>
              </li>
              <li>
                <span>02</span>
                <p>Custom SS Fabrication</p>
              </li>
              <li>
                <span>03</span>
                <p>Expert Design & Layout</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Masterful Stainless Steel Fabrication</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Custom-built worktables, sinks, hoods, and shelving
                  designed to fit your unique kitchen workflow perfectly.</p>
              </div>
              <div class="slider-btn mt-30 ml">
                <a href="/services" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Explore
                  Services</a>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 p-relative">
            </div>
          </div>
          <!-- Lines -->
          <div class="content-lines-wrapper">
            <div class="content-lines-inner">
              <div class="content-lines"></div>
            </div>
          </div>
          <!-- Lines -->
        </div>
      </div>
      <!-- Slide 3 -->
      <div class="single-slider slider-bg d-flex align-items-center"
        style="background-image: url(/img/slider/slider_img_bg03.png); background-size: cover;">
        <div class="container">
          <div class="slider-price">
            <ul>
              <li><a href="#">KE</a></li>
              <li><a href="#">TZ</a></li>
              <li><a href="#">UG</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Premium Kitchen Equipment</p>
              </li>
              <li>
                <span>02</span>
                <p>Custom SS Fabrication</p>
              </li>
              <li>
                <span>03</span>
                <p>Expert Design & Layout</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Professional Kitchen Consultation</h2>
                <p data-animation="fadeInDown" data-delay=".4s">From concept to commissioning, we guide you through
                  every step of setting up a world-class commercial kitchen.</p>
              </div>
              <div class="slider-btn mt-30 ml">
                <a href="/contact" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Get a Quote</a>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 p-relative">
            </div>
          </div>
        </div>
        <!-- Lines -->
        <div class="content-lines-wrapper">
          <div class="content-lines-inner">
            <div class="content-lines"></div>
          </div>
        </div>
        <!-- Lines -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    if (typeof $ === 'undefined') return;

    function mainSliders() {
      var BasicSlider = $('.slider-active-two');
      // Only init if not already initialized to prevent errors on re-mounts if using keep-alive
      if (BasicSlider.hasClass('slick-initialized')) return;

      BasicSlider.on('init', function (e, slick) {
        var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
      });
      BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
      });
      BasicSlider.slick({
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        responsive: [
          { breakpoint: 1200, settings: { dots: false, arrows: false } }
        ]
      });

      function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
          var $this = $(this);
          var $animationDelay = $this.data('delay');
          var $animationType = 'animated ' + $this.data('animation');
          $this.css({
            'animation-delay': $animationDelay,
            '-webkit-animation-delay': $animationDelay
          });
          $this.addClass($animationType).one(animationEndEvents, function () {
            $this.removeClass($animationType);
          });
        });
      }
    }
    mainSliders();
  }, 100);
})
</script>
