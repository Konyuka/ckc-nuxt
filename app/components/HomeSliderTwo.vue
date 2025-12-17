<template>
  <section id="home" class="slider-area fix p-relative">                      
    <div class="slider-active-two" style="background: #333333;">   
      <div class="single-slider slider-bg d-flex align-items-center" style="background-image: url(/img/slider/slider_img_bg02.png); background-size: cover;">  
        <div class="container">   
          <div class="row justify-content-center align-items-center">                              
            <div class="col-lg-7 col-md-12">
              <div class="slider-content s-slider-content mt-20">
                <h2 data-animation="fadeInUp" data-delay=".4s">Design Your Dream Home With Us</h2>
                <p data-animation="fadeInDown" data-delay=".4s">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>    
              </div>
              <div class="slider-btn mt-30 ml">     
                <NuxtLink to="/contact" class="btn ss-btn mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover Now</NuxtLink>  
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
      <!-- Add more slides if present in original, currently only one visible in snippet -->
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    setTimeout(() => {
        if (typeof $ !== 'undefined' && $.fn.slick) {
            $('.slider-active-two').slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 5000,
                dots: false,
                fade: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                        }
                    }
                ]
            });
            // Init animations
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
    }, 100);
})
</script>
