<template>
  <div>
    <header class="header-area header-three">  
      <div id="header-sticky" class="menu-area">
        <div class="container-fluid second-menu">
          <div class="row align-items-center">
            <div class="col-lg-1 col-md-12 d-none d-lg-block">
              <a href="#" class="menu-tigger" @click.prevent="openOffcanvas"><img src="/img/bg/toggle-menu.png" alt="logo"></a>
            </div>
            <div class="col-lg-1 col-md-12">
              <div class="logo">
                <NuxtLink to="/"><img src="/img/logo/logo.png" alt="logo"></NuxtLink>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-7 text-center">
              <div class="main-menu text-xl-right">
                <nav id="mobile-menu">
                  <ul>
                    <li class="has-sub">
                      <NuxtLink to="/">Home</NuxtLink>
                      <ul>                          
                        <li><NuxtLink to="/">Home Page 01</NuxtLink></li>
                        <li><NuxtLink to="/index-2">Home Page 02</NuxtLink></li>                          
                      </ul>
                    </li>
                    <li><NuxtLink to="/about">About Us</NuxtLink></li>        
                    <li class="has-sub">
                      <NuxtLink to="/services">Services</NuxtLink>
                      <ul>                          
                        <li><NuxtLink to="/services">Services</NuxtLink></li>
                        <li><NuxtLink to="/services">Services Details</NuxtLink></li>
                      </ul>
                    </li>  
                    <li><NuxtLink to="/projects">Project</NuxtLink></li>                         
                    <li class="has-sub"><a href="#">Pages</a>
                      <ul>                                        
                        <li><NuxtLink to="/team">Our Team</NuxtLink></li>
                        <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                        <li><NuxtLink to="/faq">Faq</NuxtLink></li>
                      </ul>
                    </li>
                    <li class="has-sub"> 
                      <NuxtLink to="/blog">Blog</NuxtLink>
                      <ul>
                        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                        <li><NuxtLink to="/blog-details">Blog Details</NuxtLink></li>
                      </ul>
                    </li>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>                                               
                  </ul>
                </nav>
              </div>
            </div>  
            <div class="col-xl-2 col-lg-2 col-md-3 text-center d-none d-lg-block">
              <div class="right-menu">
                <ul>
                  <li>
                    <div class="text">
                      <span>Request For free tour</span>
                      <strong>+888 777 999 00</strong>
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

    <!-- offcanvas-area -->
    <div class="offcanvas-menu">
      <span class="menu-close" @click="closeOffcanvas"><i class="fas fa-times"></i></span>
      <form role="search" method="get" id="searchform" class="searchform" action="#">
        <input type="text" name="s" id="search" value="" placeholder="Search"  />
        <button><i class="fa fa-search"></i></button>
      </form>

      <div id="cssmenu3" class="menu-one-page-menu-container">
        <ul class="menu">
          <li class="menu-item"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/about">About Us</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/services">Services</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/pricing">Pricing </NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/team">Team </NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/projects">Cases Study</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li class="menu-item"><NuxtLink to="/contact">Contact</NuxtLink></li>
        </ul>
      </div>  
      
      <div id="cssmenu2" class="menu-one-page-menu-container">
        <ul id="menu-one-page-menu-12" class="menu">
          <li class="menu-item"><a href="#home"><span>+8 12 3456897</span></a></li>
          <li class="menu-item"><a href="#howitwork"><span>info@example.com</span></a></li>
        </ul>
      </div>                
    </div>
    <div class="offcanvas-overly" @click="closeOffcanvas"></div>
    <!-- offcanvas-end -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

const openOffcanvas = () => {
    document.querySelector('.offcanvas-menu').classList.add('active');
    document.querySelector('.offcanvas-overly').classList.add('active');
}

const closeOffcanvas = () => {
    document.querySelector('.offcanvas-menu').classList.remove('active');
    document.querySelector('.offcanvas-overly').classList.remove('active');
}

onMounted(() => {
    // MeanMenu initialization
    setTimeout(() => {
        if (typeof $ !== 'undefined' && $.fn.meanmenu) {
             $('#mobile-menu').meanmenu({
                meanScreenWidth: "991",
                meanMenuContainer: '.mobile-menu',
                meanMenuClose: '<span>X</span>',
                meanMenuCloseSize: '18px',
                meanMenuOpen: '<span></span><span></span><span></span>',
                meanRevealPosition: 'right',
                meanRevealPositionDistance: '0',
            });
        }
    }, 100);
     
    // Sticky Header
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header-sticky');
        if (window.scrollY > 0) {
            header.classList.add('sticky-menu');
        } else {
            header.classList.remove('sticky-menu');
        }
    });
})
</script>
