<template>
  <section id="video" class="video-area pt-150 pb-150 p-relative" style="background-image:url(/img/bg/vedio-img.png); background-repeat: no-repeat; background-position: center bottom; background-size:cover;">
    <div class="container">                   
      <div class="row">
        <div class="col-12">
          <div class="s-video-wrap">
            <div class="s-video-content">
              <a href="https://www.youtube.com/watch?v=gyGsPlt06bo" class="popup-video"><img src="/img/bg/play-button.png" alt="circle_right"></a>
            </div>
          </div>
          <div class="section-title center-align text-center">
            <h2>
              Take A Tour Of Luxuri
            </h2>
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
