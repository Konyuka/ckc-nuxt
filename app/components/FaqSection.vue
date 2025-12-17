<template>
  <section class="event event03 pt-150 pb-120 p-relative fix">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-7  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div class="faq-wrap pl-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button class="faq-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                      01 Cras turpis felis, elementum sed mi at arcu ?
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse show" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                      02 Vestibulum nibh risus, in neque eleifendulputate sem ?
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                      03 Donec maximus, sapien id auctor ornare ?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                  </div>
                </div>
              </div>   
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                      04 Vestibulum nibh risus, in neque eleifendulputate sem ?
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                     Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                      05 Donec maximus, sapien id auctor ornare ?
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Our community is being called to reimagine the future. As the only university where a renowned design school comes together with premier colleges, we are making learning more relevant and transformational. We are enriched by the wide range.
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>      
        <div class="col-lg-5 col-md-5  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div class="s-video-wrap2" style="background-image:url(/img/bg/video-img3.jpg)">
            <div class="s-video-content text-center">
              <h6><a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="popup-video mb-50"><img src="/img/bg/play-button.png" alt="circle_right"></a></h6> 
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
    $('.popup-video').magnificPopup({
      type: 'iframe'
    });
  }, 100);
})
</script>
