<template>
  <section id="team" class="team-area fix p-relative pt-120 pb-90" style="background: #1e1e1e;">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center mb-50 ">
            <h5><span class="line"> <img src="/img/bg/circle_right.png" alt="circle_right"></span> PROFECTIONAL TEAM
            </h5>
            <h2>Meet Our Leadership Team</h2>
          </div>
        </div>
      </div>
      <div class="row team-active">
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30">
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team01.jpg" alt="img">
                <div class="team-social">
                </div>
              </div>
              <div class="team-info">
                <h4><a href="#">John Kamau</a></h4>
                <p>Technical Director</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30">
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team02.jpg" alt="img">
                <div class="team-social">
                </div>
              </div>
              <div class="team-info">
                <h4><a href="#">Sarah Ochieng</a></h4>
                <p>Design Lead</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30">
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team03.jpg" alt="img">
                <div class="team-social">
                </div>
              </div>
              <div class="team-info">
                <h4><a href="#">David Mwangi</a></h4>
                <p>Head of Fabrication</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3">
          <div class="single-team mb-30">
            <div class="team-thumb">
              <div class="brd">
                <img src="/img/team/team04.jpg" alt="img">
                <div class="team-social">
                </div>
              </div>
              <div class="team-info">
                <h4><a href="#">James Njoroge</a></h4>
                <p>Projects Manager</p>
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
    if (typeof $ === 'undefined') return;

    // team-active
    $('.team-active').slick({
      dots: true,
      infinite: true,
      arrows: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="far fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="far fa-chevron-right"></i></button>',
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }, 100);
})
</script>
