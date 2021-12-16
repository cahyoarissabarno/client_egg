<template>
    <div class="container-fluid" style="height: 100vh; max-width: 2000px;">
        <div class="row min-vh-100 flex-column flex-md-row">
          <!-- Nav Here -->
          <DemoNavigation></DemoNavigation>
            <main class="col px-0 flex-grow-1">
                <div class="row">
                    <div class="col-md px-5">
                        <div class="row">
                            <div class="mt-4" id="page-content-wrapper">
                                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                                    <div class="d-flex align-items-center">
                                        <h1 class="display-6 fw-bold m-0">Tentang</h1>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="row row-cols-1 mt-3 row-cols-md-3 g-4">
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">The Egg Cracker</h5>
                                        <p class="card-text my-0">Akun: {{ email }}</p>
                                        <p class="card-text my-0">Username: {{ username }}</p>
                                        <p class="card-text my-0">Device ID: {{ device_id }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    import DemoNavigation from '../Demo/Navigation.vue'
    import axios from 'axios'

    export default {
        name: 'DemoTentang',
        components:{
            DemoNavigation
        },
        data(){
            return {
                device_id: '12345',
                username: 'Pengguna',
                email: 'pengguna@email.com'
            }
        },
    }
</script>