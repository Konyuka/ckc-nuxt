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
                      Do you provide custom stainless steel fabrication?
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse show" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Yes, we specialize in manufacturing custom stainless steel equipment including worktables, sinks,
                    exhaust hoods, and shelving units. All fabrication is done locally in our Nairobi workshop to fit
                    your exact kitchen dimensions.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseOne">
                      Can you design a kitchen layout for my restaurant?
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Absolutely. Our design team creates comprehensive 2D and 3D kitchen layouts that optimize workflow,
                    safety, and efficiency, ensuring compliance with health and safety regulations in Kenya.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo">
                      Do you offer after-sales support and maintenance?
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Yes, we provide extensive after-sales support, including installation, staff training, and ongoing
                    maintenance contracts to ensure your kitchen equipment runs smoothly for years to come.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFour">
                      Do you supply equipment outside of Nairobi?
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    Yes, we supply and install commercial kitchen equipment across Kenya (Mombasa, Kisumu, Eldoret,
                    Nakuru) and throughout the East African region including Uganda, Tanzania, and Rwanda.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <h2 class="mb-0">
                    <button class="faq-btn collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseFive">
                      What brands of equipment do you supply?
                    </button>
                  </h2>
                </div>
                <div id="collapseFive" class="collapse" data-bs-parent="#accordionExample">
                  <div class="card-body">
                    We partner with world-renowned manufacturers to supply high-quality equipment. This includes
                    Rational, Unox, Sirman, Robot Coupe, and other leading global brands known for reliability and
                    performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-5  wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
          <div class="s-video-wrap2" style="background-image:url(/img/bg/video-img3.jpg)">
            <div class="s-video-content text-center">
              <h6><a href="https://www.youtube.com/watch?v=7e90gBu4pas" class="popup-video mb-50"><img
                    src="/img/bg/play-button.png" alt="circle_right"></a></h6>
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
