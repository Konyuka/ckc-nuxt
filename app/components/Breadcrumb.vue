<template>
  <section class="breadcrumb-area d-flex align-items-center" style="background-image:url(/img/bg/bdrc-bg.jpg)">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-xl-12 col-lg-12">
          <div class="breadcrumb-wrap text-center">
            <div class="breadcrumb-title">
              <h2>{{ title }}</h2>    
              <div class="breadcrumb-wrap">
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NuxtLink to="/">Home</NuxtLink></li>
                    <li class="breadcrumb-item active" aria-current="page">{{ subtitle || title }}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String
})
</script>
