<template>
  <div>
    <!-- header -->
    <header class="header-area header">
      <div id="header-sticky" class="menu-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-2 col-lg-2">
              <div class="logo">
                <a href="/"><img src="/img/logo/logo.png" alt="logo"></a>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8">
              <div class="main-menu text-right text-xl-right">
                <nav id="mobile-menu">
                  <ul>
                    <li>
                      <NuxtLink to="/">Home</NuxtLink>
                    </li>
                    <li>
                      <NuxtLink to="/about">About Us</NuxtLink>
                    </li>
                    <li class="has-sub">
                      <NuxtLink to="/services">Services</NuxtLink>
                      <ul>
                        <li>
                          <NuxtLink to="/services">Services</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/service-details">Services Details</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/projects">Project</NuxtLink>
                    </li>
                    <li class="has-sub"><a href="#">Pages</a>
                      <ul>
                        <li>
                          <NuxtLink to="/team">Our Team</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/team-details">Team Details</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/pricing">Pricing</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/faq">Faq</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li class="has-sub">
                      <NuxtLink to="/blog">Blog</NuxtLink>
                      <ul>
                        <li>
                          <NuxtLink to="/blog">Blog</NuxtLink>
                        </li>
                        <li>
                          <NuxtLink to="/blog-details">Blog Details</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 text-right d-none d-lg-block text-right text-xl-right">
              <div class="login">
                <ul>
                  <li>
                    <div class="second-header-btn">
                      <a href="#" class="btn">Send Request</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-12">
              <div class="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header-end -->

    <!-- Page Content -->
    <slot />

    <!-- footer -->
    <footer class="footer-bg footer-p">
      <div class="footer-top pt-120 pb-90  p-relative"
        style="background-color: #161616;background-image:url(/img/bg/footer_bg.png); background-repeat: no-repeat; background-size: cover;">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-3 col-lg-3 col-sm-6">
              <div class="footer-widget mb-30">
                <div class="f-widget-title mb-30">
                  <img src="/img/logo/logo.png" alt="img">
                </div>
                <p>Nam purus nibh, luctus at cursus vel, efficitur eu dui. Aenean tellus massa, euismod eu dictum in,
                  tincidunt ac lacus. Quisque vitae tellus a nibh sollicitudin viverra id sed libero.</p>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-sm-6">
              <div class="footer-widget mb-30">
                <div class="f-widget-title">
                  <h2>Our Links</h2>
                </div>
                <div class="footer-link">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#"> About Us</a></li>
                    <li><a href="#"> Services </a></li>
                    <li><a href="#"> Contact Us</a></li>
                    <li><a href="#">Blog </a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-sm-6">
              <div class="footer-widget mb-30">
                <div class="f-widget-title">
                  <h2>Our Services</h2>
                </div>
                <div class="footer-link">
                  <ul>
                    <li><a href="#">Architecture</a></li>
                    <li><a href="#">Interior Work</a></li>
                    <li><a href="#">Retail Designs</a></li>
                    <li><a href="#">2D/3D Layouts</a></li>
                    <li><a href="#">Inter Design</a></li>
                    <li><a href="#">Decoration Art</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-sm-6">
              <div class="footer-widget mb-30">
                <div class="f-widget-title">
                  <h2>Our Newsletter</h2>
                </div>
                <div class="footer-link mb-30">
                  <div class="subricbe p-relative" data-animation="fadeInDown" data-delay=".4s">
                    <form action="#" method="post" class="contact-form ">
                      <input type="text" id="email2" name="email2" class="header-input" placeholder="Your Email..."
                        required>
                      <button class="btn header-btn"><i class="far fa-chevron-right"></i></button>
                    </form>
                  </div>
                </div>
                <div class="footer-social">
                  <a href="#"><i class="fab fa-facebook-f"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-top-heiding">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-4 col-md-6">
                <div class="f-contact">
                  <div class="icon">
                    <img src="/img/icon/ft-icon01.png" alt="img">
                  </div>
                  <div class="text">
                    <h3>Call Us Now</h3>
                    <span>+254 115 511 079</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="f-contact">
                  <div class="icon">
                    <img src="/img/icon/ft-icon02.png" alt="img">
                  </div>
                  <div class="text">
                    <h3>Email Address</h3>
                    <span>info@commercialkitchen.co.ke</span>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="f-contact">
                  <div class="icon">
                    <img src="/img/icon/ft-icon03.png" alt="img">
                  </div>
                  <div class="text">
                    <h3>Location</h3>
                    <span>Kindaruma Rd, Nairobi, Kenya</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright-wrap">
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-lg-12">
              Copyright © 2024 <a href="#">Zucbedesign</a>. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- footer-end -->
    <SpeedInsights />
    <Analytics />
  </div>
</template>

<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
import { Analytics } from '@vercel/analytics/nuxt'

import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    if (typeof $ === 'undefined') return;

    // meanmenu
    $('#mobile-menu').meanmenu({
      meanMenuContainer: '.mobile-menu',
      meanScreenWidth: "992"
    });

    // sticky
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 200) {
        $("#header-sticky").removeClass("sticky-menu");
      } else {
        $("#header-sticky").addClass("sticky-menu");
      }
    });

    // offcanvas menu
    $(".menu-tigger").on("click", function () {
      $(".offcanvas-menu,.offcanvas-overly").addClass("active");
      return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
    });

  }, 100);
})
</script>
