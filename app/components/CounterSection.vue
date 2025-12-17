<template>
  <div class="counter-area p-relative">
    <div class="container">
      <div class="row p-relative">
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">20</span><span class="counter-suffix">+</span>
              <p>Kitchen Projects <br>Completed</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">18</span><span class="counter-suffix">+</span>
              <p>Satisfied <br>Clients</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">7</span><span class="counter-suffix">+</span>
              <p>Expert Team <br>Members</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12">
          <div class="single-counter wow fadeInUp animated" data-animation="fadeInDown animated" data-delay=".2s">
            <div class="counter p-relative">
              <span class="count">3</span><span class="counter-suffix">+</span>
              <p>Years of <br>Excellence</p>
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
