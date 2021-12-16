<template>
    <div class="container-fluid">
        <div class="row min-vh-100 flex-column flex-md-row">
            <DemoNavigation></DemoNavigation>
            <main class="col px-0 flex-grow-1">
                <div class="row">
                    <div class="col-md px-5">
                        <div class="row">
                            <div class="mt-4" id="page-content-wrapper">
                                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                                    <div class="d-flex align-items-center">
                                        <h1 class="display-6 fw-bold m-0">Monitoring</h1>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="row my-4">
                            <div class="col-md-4 pt-3">
                                <div class="content-1">
                                    <div class="d-flex align-items-center justify-content-center mb-2">
                                        <img src="../../assets/thermo.png" style="height: 80px;" alt="">
                                        <div class="content-text ms-3">
                                            <h2 class="content-title text-center fw-bold lh-1 mb-1" style="font-size: 40px;">{{sensor.field1}}°C</h2>
                                            <p class="content-text text-center mb-0 lh-1" style="color: #a1a0b4;">Suhu</p>
                                        </div>
                                    </div>
                                    <div v-if="alertTemp != 'Kondisi Aman'" class="alert alert-danger d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                        <i class='bx bx-error' style="font-size: 25px;"aria-label="Warning:"></i>
                                        <div style="font-size: 13px;">
                                          {{ alertTemp }}
                                        </div>
                                    </div>
                                    <div v-if="alertTemp == 'Kondisi Aman'" class="alert alert-success d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                        <i class='bx bx-error' style="font-size: 25px;"aria-label="Warning:"></i>
                                        <div style="font-size: 13px;">
                                          {{ alertTemp }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 pt-3">
                                 <div class="content-2">
                                    <div class="d-flex align-items-center justify-content-center mb-2">
                                        <img src="../../assets/humid.png" style="height: 80px;" alt="">
                                        <div class="content-text ms-3">
                                            <h2 class="content-title text-center fw-bold lh-1 mb-1" style="font-size: 40px;">{{sensor.field2}}%</h2>
                                            <p class="content-text text-center mb-0 lh-1" style="color: #a1a0b4;">Kelembaban</p>
                                        </div>
                                    </div>
                                    <div v-if="alertHumid != 'Kondisi Aman'" class="alert alert-danger d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                        <i class='bx bx-error' style="font-size: 25px;" aria-label="Warning:"></i>
                                        <div style="font-size: 13px;">
                                          {{ alertHumid }}
                                        </div>
                                    </div>
                                    <div v-if="alertHumid == 'Kondisi Aman'" class="alert alert-success d-flex align-items-center justify-content-center mb-0 py-0" role="alert">
                                        <i class='bx bx-error' style="font-size: 25px;" aria-label="Warning:"></i>
                                        <div style="font-size: 13px;">
                                          {{ alertHumid }}
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
                            <h3 class="mt-3 mb-2"><b>Daftar Slot</b></h3>
                        </div>
                        <div class="row row-cols-1 row-cols-md-2 g-3">
                            <div class="col-md" v-for="slot in slots" :key="slot.slot_no">
                              <div class="card" style="border-radius: 10px; background-color: #384ccc;">
                                <div class="card-body">
                                    <div class="row position-relative">
                                        <div class="col-sm-4 text-center">
                                            <p class="card-title text-white">Slot {{ slot.slot_no }} ({{ slot.status }})</p>
                                            <h1 class="card-text text-white text-center my-4 my-sm-0">Hari {{countDate(slot.started_at)}}</h1>
                                        </div>
                                        <div class="col-6 col-sm-4 position-relative text-center">
                                            <h5 class="card-text text-white mb-0 lh-1">Mulai</h5>
                                            <p class="card-text text-white">{{ slot.started_at }}</p>
                                            <h5 class="card-text text-white mb-0 lh-1">Jumlah</h5>
                                            <p class="card-text text-white">{{ slot.egg_sum }} Telur</p>
                                        </div>
                                        <div class="col-1 col-sm-4 position-relative">
                                            <a href="#" class="btn btn-light btn-sm m-1" data-bs-toggle="modal" data-bs-target="#editModal" @click="editSlot(slot.slot_no)">
                                                <span v-if="slot.status == 'Berjalan'">Ubah</span>
                                                <span v-if="slot.status == 'Tidak Digunakan'">Gunakan</span>
                                            </a>
                                            <button v-if="slot.status == 'Berjalan'" class="btn btn-danger btn-sm m-1" @click="endSlot(slot.slot_no)">Hentikan</button>
                                            <!-- <button class="btn btn-danger btn-sm m-1 d-block">Hentikan</button> -->
                                        </div>
                                        <!-- <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 pe-3" aria-label="Close"></button> -->
                                    </div>
                                  </div>
                              </div>
                            </div>

                            <!-- editModal -->
                            <div class="modal fade" id="editModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="jumlahTelur" class="form-label">Jumlah Teur</label>
                                                    <input type="number" v-model="new_egg_sum" class="form-control" id="jumlahTelur">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="tanggal" class="form-label">Tanggal Mulai</label>
                                                    <input type="date" v-model="new_started_at" class="form-control" id="tanggal">
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary" @click="updateSlot" data-bs-dismiss="modal">Kirim</button>
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
    import axios from 'axios';

    export default {
        name: 'DemoDashboard',
        components:{
            DemoNavigation
        },
        data(){
            return {
                device: '',
                user: '',
                slots: [
                    { slot_no: 1, status: "Berjalan", started_at: "2021-12-15", egg_sum: 8 },
                    { slot_no: 2, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" },
                    { slot_no: 3, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" },
                    { slot_no: 4, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" },
                    { slot_no: 5, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" },
                    { slot_no: 6, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" },
                    { slot_no: 7, status: "Tidak Digunakan", started_at: "--", egg_sum: "--" }
                ],
                allData: '',
                sensor: {
                    field1: 39.00,
                    field2: 57.00
                },
                egg_sum: '',
                started_at: '',
                new_egg_sum: '',
                new_started_at: '',
                day: '',
                currentSlot: '',
                alertTemp: '',
                alertHumid: '',
                currentUrl: ''
            }
        },
        mounted(){
            if (this.sensor.field1 > 41.00) { this.alertTemp = 'Suhu Terlalu Tinggi, Periksa Kondisi Lampu' }
            if (this.sensor.field1 < 37.00) { this.alertTemp = 'Suhu Terlalu Rendah, Periksa Kondisi Lampu' }
            if (this.sensor.field2 > 61.00) { this.alertHumid = 'Kelembapan Terlalu Tinggi, Periksa Kondisi Lampu' }
            if (this.sensor.field2 < 38.00) { this.alertHumid = 'Kelembapan Terlalu Rendah, Periksa Kondisi Lampu' }
            else {
                this.alertTemp = 'Kondisi Aman' 
                this.alertHumid = 'Kondisi Aman' 
            }
        },
        methods: {
            countDate(getDate){

                if (getDate == "--") {
                    return this.day = "--"
                }

                let dateTokens = getDate.split("-")
                let milDate = new Date(dateTokens[0], dateTokens[1]-1, dateTokens[2]).getTime()
                let time = Math.abs(new Date().getTime() - milDate)
                let result = Math.ceil(time / (1000*60*60*24))

                return this.day = result
            },
            editSlot(noSlot){
                this.currentSlot = this.slots[noSlot-1]
                this.new_egg_sum = this.currentSlot.egg_sum
                this.new_started_at = this.currentSlot.started_at
            }, 
            updateSlot(){
                let newSlot = {
                    slot_no : this.currentSlot.slot_no,
                    egg_sum : this.new_egg_sum ? this.new_egg_sum : this.currentSlot.egg_sum,
                    started_at : this.new_started_at ? this.new_started_at : this.currentSlot.started_at,
                    status : "Berjalan"
                }
                this.slots.splice(this.currentSlot.slot_no - 1, 1, newSlot)
            },
            endSlot(noSlot){
                this.currentSlot = this.slots[noSlot-1]
                let stopSlot = {
                    slot_no : this.currentSlot.slot_no,
                    egg_sum : "--",
                    started_at : "--",
                    status : "Tidak Digunakan"
                }
                this.slots.splice(this.currentSlot.slot_no - 1, 1, stopSlot)
            }
        }
    }
</script>