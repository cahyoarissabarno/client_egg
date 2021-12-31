<template>
  <div>
    <router-view></router-view>
    <button id="myBtn" title="Go to top" data-bs-toggle="modal" data-bs-target="#exampleModal" class="shadow"><i class="fas fa-headset"></i></button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header" style="background-color: #384ccc; color: whitesmoke;">
            <h5 class="modal-title" id="exampleModalLabel">Hubungi Kami</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <a href="mailto:eggcrackerid@gmail.com">
              <i class="fas fa-envelope"></i><span>  eggcrackerid@gmail.com</span>
            </a>
            <br>
            <a href="https://api.whatsapp.com/send?phone=62895605798426&text=Saya%20tertarik%20dengan%20Egg Cracker.%20%0AMinta%20infonya%20lebih%20lanjut.%20Terima%20Kasih.">
              <i class="fab fa-whatsapp"></i><span>  0895605798426</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
