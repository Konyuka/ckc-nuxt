<template>
  <section id="portfolio" class="pt-120 fix">
    <div class="container">   
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-12">
          <div class="section-title p-relative mb-50 wow fadeInLeft  animated" data-animation="fadeInLeft" data-delay=".4s">
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> What’s New</h5>
            <h2>Completed Projects</h2>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 text-right">
          <div class="slider-btn">                                          
            <NuxtLink to="/projects" class="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Read More</NuxtLink>					
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">                  
      <div class="portfolio ">                       
        <div class="galler-outer">
          <div class="home-blog-active wow fadeInUp  animated" data-animation="fadeInUp" data-delay=".4s">
            <div class="grid-item financial">
              <a class="popup-image" href="/img/gallery/protfolio-img01.png">
                <figure class="gallery-image">                            
                  <img src="/img/gallery/protfolio-img01.png" alt="img" class="img">                                    
                  <figcaption>                                       
                    <h4>Intirior</h4>
                    <p>Aenean lorem quam, ultricies ut aliquet a, semper quis ligula. Nulla nisi ipsum, cursus pretium feugiat.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div class="grid-item financial banking">
              <a class="popup-image" href="/img/gallery/protfolio-img02.png">
                <figure class="gallery-image">                            
                  <img src="/img/gallery/protfolio-img02.png" alt="img" class="img">      
                  <figcaption>                                       
                    <h4>Intirior</h4>
                    <p>Aenean lorem quam, ultricies ut aliquet a, semper quis ligula. Nulla nisi ipsum, cursus pretium feugiat.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div class="grid-item insurance">
              <a class="popup-image" href="/img/gallery/protfolio-img03.png">
                <figure class="gallery-image">                               
                  <img src="/img/gallery/protfolio-img03.png" alt="img" class="img">      
                  <figcaption>                                       
                    <h4>Intirior</h4>
                    <p>Aenean lorem quam, ultricies ut aliquet a, semper quis ligula. Nulla nisi ipsum, cursus pretium feugiat.</p>
                  </figcaption>
                </figure>
              </a>
            </div>
            <div class="grid-item insurance">
              <a class="popup-image" href="/img/gallery/protfolio-img01.png">
                <figure class="gallery-image">                               
                  <img src="/img/gallery/protfolio-img01.png" alt="img" class="img">      
                  <figcaption>                                       
                    <h4>Intirior</h4>
                    <p>Aenean lorem quam, ultricies ut aliquet a, semper quis ligula. Nulla nisi ipsum, cursus pretium feugiat.</p>     
                  </figcaption>
                </figure>
              </a>
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
        if (typeof $ !== 'undefined') {
             // Slick slider or similar for home-blog-active if needed? 
             // The HTML says `home-blog-active`. I checked main.js usually this init slick.
             // I will add slick init here just in case.
             $('.home-blog-active').slick({
                dots: false,
                infinite: true,
                arrows: true,
                speed: 300,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
            });
            $('.popup-image').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        }
    }, 100);
})
</script>
