<template>
  <section id="services-area2" class="services-area2 pt-120 pb-90 fix">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="masonry-gallery-huge">
            <div class="grid col2">
              <div class="grid-item hover-zoomin financial">
                <a href="/img/gallery/protfolio-img05.png" class="popup-image">
                  <figure class="gallery-image">
                    <img src="/img/gallery/protfolio-img05.png" alt="img" class="img">
                    <figcaption>
                      <h4>5-Star Hotel Kitchen</h4>
                      <span> Nairobi, Westlands</span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div class="grid-item hover-zoomin banking">
                <a href="/img/gallery/protfolio-img06.png" class="popup-image">
                  <figure class="gallery-image">
                    <img src="/img/gallery/protfolio-img06.png" alt="img" class="img">
                    <figcaption>
                      <h4>Hospital Catering Unit</h4>
                      <span> Mombasa General</span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div class="grid-item hover-zoomin financial">
                <a href="/img/gallery/protfolio-img07.png" class="popup-image">
                  <figure class="gallery-image">
                    <img src="/img/gallery/protfolio-img07.png" alt="img" class="img">
                    <figcaption>
                      <h4>School Dining Hall</h4>
                      <span> International School Kisumu</span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div class="grid-item hover-zoomin banking insurance">
                <a href="/img/gallery/protfolio-img08.png" class="popup-image">
                  <figure class="gallery-image">
                    <img src="/img/gallery/protfolio-img08.png" alt="img" class="img">
                    <figcaption>
                      <h4>Industrial Bakery</h4>
                      <span> Thika Road Industrial Area</span>
                    </figcaption>
                  </figure>
                </a>
              </div>
              <div class="grid-item hover-zoomin financial">
                <a href="/img/gallery/protfolio-img09.png" class="popup-image">
                  <figure class="gallery-image">
                    <img src="/img/gallery/protfolio-img09.png" alt="img" class="img">
                    <figcaption>
                      <h4>Restaurant Bar & Kitchen</h4>
                      <span> Karen, Nairobi</span>
                    </figcaption>
                  </figure>
                </a>
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
  if (typeof $ !== 'undefined' && $.fn.magnificPopup) {
    $('.popup-image').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  if (typeof $ !== 'undefined' && $.fn.isotope) {
    // Isotope initialization for the grid
    // Note: The template usually initializes this in main.js, but since we removed global main.js
    // we might need to verify if this specific grid needs init.
    // The CSS 'masonry-gallery-huge' suggests some masonry layout.

    var $grid = $('.grid').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item'
      }
    });
  }
})
</script>
