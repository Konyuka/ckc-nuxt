<template>
  <section id="testimonial" class="testimonial-area text-center p-relative fix pt-120 pb-100" style="background-color: #1e1e1e;background-image: url(/img/bg/testimonial-bg.png); background-size: cover;">
    <div class="container">
      <div class="row">                    
        <div class="col-lg-12">
          <div class="section-title mb-35"> 
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> Our Testimonial</h5>                         
            <h2>What They Say’s About Us</h2>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-9">
          <div class="slider testimonial-nav">
            <div class="testimonial-item">
              <img src="/img/testimonial/testi_avatar.png" alt="img">
            </div>
            <div class="testimonial-item">
              <img src="/img/testimonial/testi_avatar_02.png" alt="img">
            </div>
            <div class="testimonial-item">
              <img src="/img/testimonial/testi_avatar_03.png" alt="img">
            </div>
            <div class="testimonial-item">
              <img src="/img/testimonial/testi_avatar.png" alt="img">
            </div>
            <div class="testimonial-item">
              <img src="/img/testimonial/testi_avatar_02.png" alt="img">
            </div>
          </div>
          <div class="slider testimonial-for">
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>Ut tellus risus, suscipit lacinia mauris vel, varius sollicitudin purus. Ut mattis ullamcorper sapien, vel fermentum nisi condimentum non. In auctor ac risus ut tempor. Vestibulum pellentesque maximus eleifend. Aliquam vulputate, diam vel pretium accumsan, mi elit eleifend leo.</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Alexis browni JR.</h6>
                    <span>Our Client</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>Ut tellus risus, suscipit lacinia mauris vel, varius sollicitudin purus. Ut mattis ullamcorper sapien, vel fermentum nisi condimentum non. In auctor ac risus ut tempor. Vestibulum pellentesque maximus eleifend. Aliquam vulputate, diam vel pretium accumsan, mi elit eleifend leo.</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Paul M. Matney</h6>
                    <span>Our Client</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>Ut tellus risus, suscipit lacinia mauris vel, varius sollicitudin purus. Ut mattis ullamcorper sapien, vel fermentum nisi condimentum non. In auctor ac risus ut tempor. Vestibulum pellentesque maximus eleifend. Aliquam vulputate, diam vel pretium accumsan, mi elit eleifend leo.</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Alexis browni JR.</h6>
                    <span>Our Client</span>
                  </div>
                </div>
              </div>
            </div>
             <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>Ut tellus risus, suscipit lacinia mauris vel, varius sollicitudin purus. Ut mattis ullamcorper sapien, vel fermentum nisi condimentum non. In auctor ac risus ut tempor. Vestibulum pellentesque maximus eleifend. Aliquam vulputate, diam vel pretium accumsan, mi elit eleifend leo.</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Paul M. Matney</h6>
                    <span>Our Client</span>
                  </div>
                </div>
              </div>
            </div>
             <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>Ut tellus risus, suscipit lacinia mauris vel, varius sollicitudin purus. Ut mattis ullamcorper sapien, vel fermentum nisi condimentum non. In auctor ac risus ut tempor. Vestibulum pellentesque maximus eleifend. Aliquam vulputate, diam vel pretium accumsan, mi elit eleifend leo.</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Alexis browni JR.</h6>
                    <span>Our Client</span>
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

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    setTimeout(() => {
        if (typeof $ !== 'undefined' && $.fn.slick) {
            $('.testimonial-nav').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                asNavFor: '.testimonial-for',
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true,
                 responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: true, 
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
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
            $('.testimonial-for').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                asNavFor: '.testimonial-nav'
            });
        }
    }, 100);
})
</script>
