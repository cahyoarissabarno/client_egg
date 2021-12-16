<template>
  <!-- <div class="container" style="
    max-width: 2000px;
    height: 100vh;
    background-image: url(img/img2.png);
    background-size: cover;
    background-position: left;"> -->

<div class="container" :style="{
  'max-width': '2000px',
  'height': '100vh',
  'background-size': 'cover',
  'background-position': 'left',
  'backgroundImage': 'url(' + require('@/assets/img2.png') + ')' }">
      <div class="row" style="height: 100%;">
        <div class="col-md-6 d-flex align-items-center">
          <div class="land ms-5 me-5" style="color:white;">
            <div class="logo mb-5">
              <img src="../assets/logo2.png" style="height: 50px;" alt="">
            </div>
            <div>
              <h1 class="display-3 lh-1 fw-bold">THE EGG CRACKER</h1>
            </div>
            <div class="mt-4">
              <p>
                The Egg Cracker adalah inkubator untuk menjaga telur tetap hangat 
                dan berada dalam kelembaban yang tepat yang juga dilengkapi dengan mekanisme berputar 
                untuk memutar telur sehingga penghangatan lebih merata.
              </p>
            </div>
            <!-- <a class="btn btn-light mt-3 mb-5" style="color: #384ccc; border-radius: 30px; width: 120px;" role="button">
            </a> -->
            <div class="row">
              <div class="col-md-3">
                <router-link :to="{ path: '/device'}" class="btn btn-light mx-2 my-2 fw-bold" style="color: #384ccc; border-radius: 30px; width: 120px;" role="button"> 
                  Mulai
                </router-link>
              </div>
              <div class="col-md-9">
                <router-link :to="{ path: '/demo/device'}" class="btn btn-outline-light mx-2 my-2 px-4 fw-bold" style="border-radius: 30px;" role="button"> 
                  Coba Website Demo
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>       
  </div>
</template>

<script>
  export default {
      name: 'LandingPage'
  }
</script>