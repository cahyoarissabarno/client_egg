<template>
    <aside class="col-12 col-md-3 col-xl-2 p-0 bg-light">
        <nav class="navbar navbar-expand-md navbar-light flex-md-column flex-row sticky-top h-100" id="sidebar">
          <div class="text-center px-3">
            <img src="../../assets/logo1.png" class="navbar-brand img-fluid mb-4 px-4 py-2 d-none d-md-block"/>
          </div>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse align-items-start flex-column w-100 px-4" id="nav">
            <ul class="navbar-nav flex-column">
            <li class="nav-item ">
              <router-link :to="{ name: 'demoDashboard' }" class="nav-link active d-flex align-items-center" aria-current="page" style="color: #384ccc;">
                <i class="fas fa-chart-line"></i>
                <span class="links-name ms-3">Monitoring</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'demoPengaturan' }" class="nav-link d-flex align-items-center" aria-current="page" style="color: #384ccc;">
                <i class="fas fa-cog"></i>
                <span class="links-name ms-3">Pengaturan</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'demoBantuan' }" class="nav-link d-flex align-items-center" aria-current="page" style="color: #384ccc;">
                <i class="fas fa-question-circle"></i>
                <span class="links-name ms-3">Bantuan</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'demoTentang' }" class="nav-link d-flex align-items-center" style="color: #384ccc;">
                <i class="fas fa-info-circle"></i>
                <span class="links-name ms-3">Tentang</span>
              </router-link>
            </li>
            <li class="nav-item mt-3">
              <a @click="toDevice" class="btn btn-light btn-sm text-white my-1" style="background-color: #384ccc;">Ubah Device</a>
            </li>
            <li class="nav-item">
              <button  @click="logout" class="btn btn-light btn-sm text-white my-1" style="background-color: #384ccc;">Logout</button>
            </li>
          </ul>
          </div>
        </nav>   
    </aside>
</template>
<script>
    export default {
        name: 'DemoNavigation',
        methods: {
          toDevice(){
            this.$router.push('/demo/device')
            window.location.reload()
          },
          logout(){
            this.$router.push('/')
            window.location.reload()
          }
        }
    }
</script>