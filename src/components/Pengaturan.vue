<template>
    <div class="container-fluid" style="height: 100vh; max-width: 2000px;">
        <div class="row min-vh-100 flex-column flex-md-row">
            <!-- Nav Here -->
            <Navigation></Navigation>
            <main class="col px-0 flex-grow-1">
                <div class="row">
                    <div class="col-md px-5">
                        <div class="mt-4" id="page-content-wrapper">
                            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                                <div class="d-flex align-items-center">
                                    <h1 class="display-6 fw-bold m-0">Pengaturan</h1>
                                </div>
                            </nav>
                        </div>
                        <div class="row row-cols-1 mt-3 row-cols-md-3 g-4">
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lampu 1 ({{device[0].lamp1}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk LED 1</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device[0].lamp1 == 'off'" @click="setLamp1('on')" class="btn btn-light fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device[0].lamp1 == 'on'" @click="setLamp1('off')" class="btn btn-light fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lampu 2 ({{device[0].lamp2}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk LED 2</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device[0].lamp2 == 'off'" @click="setLamp2('on')" class="btn btn-light fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device[0].lamp2 == 'on'" @click="setLamp2('off')" class="btn btn-light fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                      <h5 class="card-title fw-bold">Motor ({{device[0].motor}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur jalannya motor</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device[0].motor == 'off'" @click="setMotor('on')" class="btn btn-light fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device[0].motor == 'on'" @click="setMotor('off')" class="btn btn-light fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
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
    import Navigation from '../components/Navigation.vue'
    import axios from 'axios'

    export default {
        name: 'Pengaturan',
        data(){
            return {
                device: null
            }
        },
        components:{
            Navigation
        },
        mounted(){
            axios.get(`${process.env.VUE_APP_API_URL}/api/device/dashboard/${this.$route.params.device_id}`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.device = res.data.getDevice
                }
            },err => {
                console.log(err)
            });
        },
        created(){
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }
        }
    }
</script>