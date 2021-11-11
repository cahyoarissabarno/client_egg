<template>
    <div class="container position-relative"  id="wrapper" style="height: 100vh; max-width: 2000px;">
        <div class="row" style="height: 100%;">
            <Navigation></Navigation>
            <div class="col-md-10 px-4">
                <div class="row">
                    <div class="mt-4" id="page-content-wrapper">
                        <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                            <div class="d-flex align-items-center">
                                <i class="bx bx-align-left primary-text fs-3 me-3" id="menu-toggle"></i>
                                <h1 class="display-6 fw-bold m-0">Monitoring</h1>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col-md-4 pt-3">
                        <div class="content-1">
                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <img src="img/thermo.png" style="height: 80px;" alt="">
                                <div class="content-text ms-3">
                                    <h2 class="content-title text-center fw-bold lh-1 mb-1" style="font-size: 40px;">{{sensor.field1}}°C</h2>
                                    <p class="content-text text-center mb-0 lh-1" style="color: #a1a0b4;">Suhu</p>
                                </div>
                            </div>
                            <div class="alert alert-danger d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                <i class='bx bx-error' style="font-size: 25px;"aria-label="Warning:"></i>
                                <div style="font-size: 13px;">
                                  Suhu Terlalu Tinggi, Periksa Kondisi Lampu
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 pt-3">
                         <div class="content-2">
                            <div class="d-flex align-items-center justify-content-center mb-2">
                                <img src="img/humid.png" style="height: 80px;" alt="">
                                <div class="content-text ms-3">
                                    <h2 class="content-title text-center fw-bold lh-1 mb-1" style="font-size: 40px;">{{sensor.field2}}%</h2>
                                    <p class="content-text text-center mb-0 lh-1" style="color: #a1a0b4;">Kelembaban</p>
                                </div>
                            </div>
                            <div class="alert alert-danger d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                <i class='bx bx-error' style="font-size: 25px;" aria-label="Warning:"></i>
                                <div style="font-size: 13px;">
                                  Kelembaban Terlalu Rendah, Periksa Sumber Air
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 pt-3">
                        <div class="card" style="border-radius: 10px; border-color: #a1a0b4;">
                            <div class="card-body d-flex align-items-center">
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <div class="content-3">
                                        <p class="content-title text-center lh-1 mb-2" style="color: #a1a0b4;">Target Suhu</p>
                                        <h3 class="content-text text-center fw-bold lh-1" style="color: #a1a0b4;">38-40°C</h3>
                                    </div>
                                </div>
                                <div class="col-6 d-flex align-items-center justify-content-center">
                                    <div class="content-4">
                                        <p class="content-title text-center lh-1 mb-2" style="color: #a1a0b4;">Target Kelembaban</p>
                                        <h3 class="content-text text-center fw-bold lh-1" style="color: #a1a0b4;">55-60%</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h3 class="">Gelombang</h3>
                </div>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col-md">
                      <div class="card" style="border-radius: 10px; background-color: #384ccc;">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="card-title text-white">Gelombang 1</p>
                                    <h1 class="card-text text-white text-center">Hari 17</h1>
                                </div>
                                <div class="col-sm-4">
                                    <h5 class="card-text text-white mb-0 lh-1">Mulai</h5>
                                    <p class="card-text text-white">3 Oktober 2021</p>
                                    <h5 class="card-text text-white mb-0 lh-1">Jumlah</h5>
                                    <p class="card-text text-white">10 Telur</p>
                                </div>
                                <div class="col-sm-4 d-flex align-items-end flex-column bd-highlight">
                                    <div class="cls bd-highlight pb-4">
                                        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
                                    </div>
                                    <div class="but bd-highlight pt-4">
                                        <a href="#" class="btn btn-light btn-sm" style="color: #384ccc;">Edit</a>
                                        <a href="#" class="btn btn-light btn-sm" style="color: #384ccc;">Reset</a>
                                      </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="card" style="border-radius: 10px; background-color: #384ccc;">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-4">
                                    <p class="card-title text-white">Gelombang 2</p>
                                    <h1 class="card-text text-white text-center">Hari 11</h1>
                                </div>
                                <div class="col-sm-4">
                                    <h5 class="card-text text-white mb-0 lh-1">Mulai</h5>
                                    <p class="card-text text-white">9 Oktober 2021</p>
                                    <h5 class="card-text text-white mb-0 lh-1">Jumlah</h5>
                                    <p class="card-text text-white">5 Telur</p>
                                </div>
                                <div class="col-sm-4 d-flex align-items-end flex-column bd-highlight">
                                    <div class="cls bd-highlight pb-4">
                                        <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
                                    </div>
                                    <div class="but bd-highlight pt-4">
                                        <a href="#" class="btn btn-light btn-sm" style="color: #384ccc;">Edit</a>
                                        <a href="#" class="btn btn-light btn-sm" style="color: #384ccc;">Reset</a>
                                      </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="card" style="border-radius: 10px; background-color: #384ccc;">
                        <div class="card-body d-flex align-items-center justify-content-center">
                            <h5 class="card-title mb-0"><a class="text-white" href="#" style="text-decoration: none;">Tambah Gelombang</a></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
    </div>
</template>
<script>
    import Navigation from '../components/Navigation.vue'
    import axios from 'axios';

    export default {
        name: 'Device',
        components:{
            Navigation
        },
        data(){
            return {
                device: [],
                user: [],
                allData: null,
                sensor: null
            }
        },
        created(){
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }
        },
        mounted(){
            axios.get(`http://localhost:3000/api/device/dashboard/${this.$route.params.device_id}`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.device = res.data.getDevice,
                    this.user = res.data.getUser
                }
            },err => {
                console.log(err)
            });

            // get data every 100ms
            this.interval = setInterval(() => {
                axios
                .get(`https://api.thingspeak.com/channels/${this.$route.params.device_id}/feeds.json?results=2`)
                .then(response => (
                    this.allData = response.data.feeds,
                    this.sensor = this.allData[this.allData.length-1],
                    console.log(this.sensor)
                ))
            }, 100 );
        }
    }
</script>