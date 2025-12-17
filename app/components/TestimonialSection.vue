<template>
  <section id="testimonial" class="testimonial-area text-center p-relative fix pt-120 pb-100"
    style="background-color: #1e1e1e;background-image: url(/img/bg/testimonial-bg.png); background-size: cover;">
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
              <img src="https://goldenstoolkitchen.com/wp-content/uploads/2022/01/golden-logo.svg" alt="Golden Stool">
            </div>
            <div class="testimonial-item">
              <img src="/img/db.jpg" alt="Dohn Café">
            </div>
            <div class="testimonial-item">
              <img
                src="https://media.istockphoto.com/id/1415397771/vector/teapot-logo-teahouse-logo-design.jpg?s=612x612&w=0&k=20&c=eOa2TDw60gIS3x-pfZM0Wnli048xnproGh1Ic-Xfzhg="
                alt="Fahari Tea">
            </div>
            <div class="testimonial-item">
              <img
                src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/qekxwuihiwpua1rhmxzw"
                alt="Saffron Grill">
            </div>
            <div class="testimonial-item">
              <!-- Placeholder for The Boma Hotel -->
              <img src="/img/icon/se-icon1.png" alt="The Boma Hotel">
            </div>
            <div class="testimonial-item">
              <!-- Placeholder for Coastal Spices -->
              <img src="/img/icon/se-icon3.png" alt="Coastal Spices">
            </div>
          </div>
          <div class="slider testimonial-for">
            <!-- Testimonial 1: Golden Stool -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“I had the pleasure of working with Beyond Commercial Kitchen on our restaurant project, and I
                  couldn't be more impressed. Despite my frequent travels, they managed the project seamlessly. From
                  kitchen design to equipment selection, their expertise was exceptional. Golden Stool now has a
                  functional kitchen that perfectly complements our menu.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Martin Yeboha</h6>
                    <span>Golden Stool Restaurant</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimonial 2: Dohn Café -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“We had strict timelines to upgrade our cafe's kitchen. The team displayed excellent project
                  management skills and attention to detail. They listened to our requirements and provided valuable
                  recommendations. Thanks to their expertise, our kitchen is now more efficient and functional.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Gideon</h6>
                    <span>Dohn Café</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimonial 3: Fahari Tea -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“I can confidently recommend them for their excellent service. Throughout the process, they provided
                  valuable guidance and support. Despite my busy schedule, they managed the project effectively,
                  ensuring we got a kitchen that meets our needs. Their expertise and transparency was highly
                  appreciated.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Tinega</h6>
                    <span>Fahari Tea Restaurant</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimonial 4: Saffron Grill -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“This being our first restaurant we had no knowledge of the process. The team provided guidance
                  throughout, understanding our budget constraints and matching us with reliable suppliers. We truly got
                  value for our money. Would highly recommend them.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Mukhtar</h6>
                    <span>Saffron Grill</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimonial 5: The Boma Hotel (New) -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“Beyond Commercial Kitchen transformed our banquet operations. Their custom stainless steel
                  fabrication for our buffet line was world-class, delivered on time and perfectly fitted to our space
                  in Nairobi.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Sarah Kamau</h6>
                    <span>Production Manager, The Boma Hotel</span>
                  </div>
                </div>
              </div>
            </div>
            <!-- Testimonial 6: Coastal Spices (New) -->
            <div class="single-testimonial-outer">
              <div class="single-testimonial">
                <p>“Sourcing specific heavy-duty equipment in Mombasa can be tough, but their supply chain is seamless.
                  From consultation to installation, they handled everything professionally. Highly recommended for
                  commercial kitchen gear.”</p>
                <div class="testi-author">
                  <div class="ta-info">
                    <h6>Chef Ali</h6>
                    <span>Head Chef, Coastal Spices Mombasa</span>
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
    if (typeof $ === 'undefined') return;

    // Testimonial
    $('.testimonial-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.testimonial-nav'
    });
    $('.testimonial-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.testimonial-for',
      dots: false,
      arrows: true,
      centerMode: true,
      focusOnSelect: true,
      variableWidth: false,
      prevArrow: '<button type="button" class="slick-prev testimonial-arrow"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next testimonial-arrow"><i class="fas fa-chevron-right"></i></button>',
    });
  }, 100);
})
</script>

<style scoped>
/* Testimonial nav wrapper for proper centering */
.testimonial-nav {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto 30px;
  padding: 0 100px;
}

/* Uniform image sizing for testimonial nav */
.testimonial-nav .testimonial-item {
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.testimonial-nav .testimonial-item img {
  width: 180px !important;
  height: 180px !important;
  object-fit: contain;
  background-color: #fff;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  border: 4px solid #f47629;
  margin: 0 auto;
}

/* Arrow styling - positioned on sides of viewport */
:deep(.testimonial-arrow) {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f47629, #ff9a5a);
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  display: flex !important;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 20px rgba(244, 118, 41, 0.4);
  transition: all 0.3s ease;
}

:deep(.testimonial-arrow:hover) {
  transform: translateY(-50%) scale(1.1);
  box-shadow: 0 8px 30px rgba(244, 118, 41, 0.6);
}

:deep(.slick-prev.testimonial-arrow) {
  left: 0;
}

:deep(.slick-next.testimonial-arrow) {
  right: 0;
}

/* Ensure slick track centers content */
:deep(.slick-track) {
  display: flex;
  align-items: center;
  justify-content: center;
}

:deep(.slick-slide) {
  display: flex !important;
  justify-content: center;
}

@media (max-width: 768px) {
  .testimonial-nav {
    padding: 0 60px;
  }

  .testimonial-nav .testimonial-item img {
    width: 140px !important;
    height: 140px !important;
  }

  :deep(.testimonial-arrow) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
}
</style>
