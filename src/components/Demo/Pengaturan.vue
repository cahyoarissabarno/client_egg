<template>
    <div class="container-fluid" style="height: 100vh; max-width: 2000px;">
        <div class="row min-vh-100 flex-column flex-md-row">
            <!-- Nav Here -->
            <DemoNavigation></DemoNavigation>
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
                                        <h5 class="card-title fw-bold">Lampu 1 ({{lamp1}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk Lampu 1</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="lamp1 == 'off'" @click="setPart('lamp1', 'on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="lamp1 == 'on'" @click="setPart('lamp1', 'off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                        <h5 class="card-title fw-bold">Lampu 2 ({{lamp2}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur pencahayaan untuk Lampu 2</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="lamp2 == 'off'" @click="setPart('lamp2', 'on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="lamp2 == 'on'" @click="setPart('lamp2', 'off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md">
                                <div class="card" style="border-radius: 10px;">
                                    <div class="card-body">
                                      <h5 class="card-title fw-bold">Motor ({{motor}})</h5>
                                        <p class="card-text" style="color: #a1a0b4">Mengatur jalannya motor</p>
                                        <div class="but pt-2 text-center">
                                            <a v-if="motor == 'off'" @click="setPart('motor','on')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Nyalakan</a>
                                            <a v-if="motor == 'on'" @click="setPart('motor','off')" class="btn btn-outline-dark fw-bold" style="color: #384ccc;">Matikan</a>
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
    import DemoNavigation from '../Demo/Navigation.vue'
    import axios from 'axios'

    export default {
        name: 'DemoPengaturan',
        data(){
            return {
                lamp1: 'on',
                lamp2: 'on',
                motor: 'on'
            }
        },
        components:{
            DemoNavigation
        },
        methods:{
            setPart(part, status){
                if (part == 'lamp1') { this.lamp1 = status }
                if (part == 'lamp2') { this.lamp2 = status }
                if (part == 'motor') { this.motor = status }
            }
        },
        mounted(){
            this.getDevice()
        },
    }
</script>