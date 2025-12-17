<template>
  <section id="team" class="team-area fix p-relative pt-120 pb-90">  
    <div class="container">  
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb-50 ">
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> PROFECTIONAL TEAM</h5>
            <h2>Meet Our Leadership Team</h2>
          </div>
        </div>
      </div>
      <div class="row team-active">                   
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30" >
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team01.jpg" alt="img"> 
                <div class="team-social">
                  <ul>
                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li> 
                    <li> <a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-behance"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-youtube"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-linkedin-in"></i></a></li>   
                  </ul>       
                </div>
              </div>
              <div class="team-info">                                         
                <h4><NuxtLink to="/team">Kristal Leo</NuxtLink></h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30" >
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team02.jpg" alt="img">
                <div class="team-social">
                  <ul>
                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li> 
                    <li> <a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-behance"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-youtube"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-linkedin-in"></i></a></li>   
                  </ul>       
                </div>
              </div> 
              <div class="team-info">                                        
                <h4><NuxtLink to="/team">Reshta Wann</NuxtLink></h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30" >
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team03.jpg" alt="img">
                <div class="team-social">
                  <ul>
                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li> 
                    <li> <a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-behance"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-youtube"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-linkedin-in"></i></a></li>   
                  </ul>       
                </div>
              </div>
              <div class="team-info">                                         
                <h4><NuxtLink to="/team">Amelia Daniel</NuxtLink></h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30" >
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team04.jpg" alt="img">
                <div class="team-social">
                  <ul>
                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li> 
                    <li> <a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-behance"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-youtube"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-linkedin-in"></i></a></li>   
                  </ul>       
                </div>
              </div>
              <div class="team-info">                                        
                <h4><NuxtLink to="/team">Jack Martin</NuxtLink></h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30" >
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team01.jpg" alt="img"> 
                <div class="team-social">
                  <ul>
                    <li><a href="#" tabindex="0"><i class="fab fa-facebook-f"></i></a></li> 
                    <li> <a href="#" tabindex="0"><i class="fab fa-twitter"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-behance"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-youtube"></i></a></li>   
                    <li><a href="#" tabindex="0"><i class="fab fa-linkedin-in"></i></a></li>   
                  </ul>       
                </div>
              </div>
              <div class="team-info">                                         
                <h4><NuxtLink to="/team">Kristal Leo</NuxtLink></h4>
                <p>Designer</p>
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
        if (typeof $ !== 'undefined') {
            $('.team-active').slick({
                dots: false,
                infinite: true,
                arrows: true,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      dots: false
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                   {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
            });
        }
    }, 100);
})
</script>
