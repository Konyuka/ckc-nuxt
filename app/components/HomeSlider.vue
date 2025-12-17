<template>
  <section id="home" class="slider-area fix p-relative">                      
    <div class="slider-active-two" style="background: #333333;">   
      <div class="single-slider slider-bg d-flex align-items-center" style="background-image: url(/img/slider/slider_bg.png); background-size: cover;">   
        <div class="container">      
          <div class="slider-price">
            <ul>
              <li><a href="#">FB</a></li>
              <li><a href="#">LG</a></li>
              <li><a href="#">TW</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Design Your Dream Home With Us</p>
              </li>
              <li>
                <span>02</span>
                <p>Stylish New York Apartment</p>
              </li>
              <li>
                <span>03</span>
                <p>Combine Modern Kitchen</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">                              
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Design Your Dream Home With Us</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>    
              </div>
              <div class="slider-btn mt-30 ml">     
                <a href="#" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover Now</a>  
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
      <div class="single-slider slider-bg d-flex align-items-center" style="background-image: url(/img/slider/slider_img_bg02.png); background-size: cover;">  
        <div class="container">      
          <div class="slider-price">
            <ul>
              <li><a href="#">FB</a></li>
              <li><a href="#">LG</a></li>
              <li><a href="#">TW</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Design Your Dream Home With Us</p>
              </li>
              <li>
                <span>02</span>
                <p>Stylish New York Apartment</p>
              </li>
              <li>
                <span>03</span>
                <p>Combine Modern Kitchen</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">                              
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Design Your Dream Home With Us</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>    
              </div>
              <div class="slider-btn mt-30 ml">     
                <a href="#" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover Now</a>  
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
      <div class="single-slider slider-bg d-flex align-items-center" style="background-image: url(/img/slider/slider_img_bg03.png); background-size: cover;">  
        <div class="container">      
          <div class="slider-price">
            <ul>
              <li><a href="#">FB</a></li>
              <li><a href="#">LG</a></li>
              <li><a href="#">TW</a></li>
            </ul>
          </div>
          <div class="number-content">
            <ul>
              <li>
                <span>01</span>
                <p>Design Your Dream Home With Us</p>
              </li>
              <li>
                <span>02</span>
                <p>Stylish New York Apartment</p>
              </li>
              <li>
                <span>03</span>
                <p>Combine Modern Kitchen</p>
              </li>
            </ul>
          </div>
          <div class="row justify-content-center align-items-center">                              
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Design Your Dream Home With Us</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>    
              </div>
              <div class="slider-btn mt-30 ml">     
                <a href="#" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover Now</a>  
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
