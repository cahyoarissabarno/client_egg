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
                        {{message}}
                        <div class="row row-cols-1 mt-3 row-cols-md-3 g-4">
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lampu 1 ({{device.lamp1}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk Lampu 1</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device.lamp1 == 'off'" @click="setPart('lamp1', 'on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device.lamp1 == 'on'" @click="setPart('lamp1', 'off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lampu 2 ({{device.lamp2}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk Lampu 2</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device.lamp2 == 'off'" @click="setPart('lamp2', 'on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device.lamp2 == 'on'" @click="setPart('lamp2', 'off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                      <h5 class="card-title fw-bold">Motor ({{device.motor}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur jalannya motor</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="device.motor == 'off'" @click="setPart('motor','on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="device.motor == 'on'" @click="setPart('motor','off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
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
                device: '',
                lamp1: '',
                lamp2: '',
                motor: '',
                setting: '',
                message: ''
            }
        },
        components:{
            Navigation
        },
        created(){
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }
        },
        methods:{
            getDevice(){
                axios.get(`https://api-egg.herokuapp.com/api/device/dashboard/${this.$route.params.device_id}`, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res => {
                    if (res.status === 200) {
                        this.device = res.data.getDevice[0]
                    }
                },err => {
                    console.log(err)
                });
            },
            setPart(part, status){
                if (part == 'lamp1') { this.setting = { device_id: this.device.device_id, lamp1: status } }
                if (part == 'lamp2') { this.setting = { device_id: this.device.device_id, lamp2: status } }
                if (part == 'motor') { this.setting = { device_id: this.device.device_id, motor: status } }

                axios.put(`https://api-egg.herokuapp.com/api/device/${part}`, this.setting, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res => {
                    if (res.status === 200) {
                        this.getDevice()
                        this.message = res.data.message
                    }
                },err => {
                    this.message = "terjadi kesalahan"
                });
            }
        },
        mounted(){
            this.getDevice()
        },
    }
</script>