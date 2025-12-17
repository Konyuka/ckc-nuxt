<template>
  <div class="counter-area p-relative">
    <div class="container">
      <div class="row p-relative">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">1547</span>                               
              <p>Project <br>Completed</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">2587</span>                               
              <p>Our Happy <br>Clients</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">1879</span>                               
              <p>Cup <br>Of Coffee</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">2547</span>                               
              <p>Win <br>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    if (typeof $ === 'undefined') return;

    // CounterUp
    $('.count').counterUp({
      delay: 100,
      time: 1000
    });
  }, 100);
})
</script>
