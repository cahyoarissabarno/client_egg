<template>
    <div class="container position-relative" style="max-width: 2000px; height: 100vh;">
        <div class="row d-flex align-items-center justify-content-center" style="height: 100%">
            <div class="col-sm-4">
                <div class="logo mb-5 text-center">
                    <img src="../../assets/logo1.png" style="height: 50px;" alt="">
                </div>
                <div class="top text-center mb-4">
                    <h2 class="lh-1">Daftar Perangkat</h2>
                    <h5 class="lh-1">Pilih perangkat yang akan dipantau</h5>
                </div>
                {{message}}
                <div class="button-dev">
                    <div class="d-grid gap-2" v-for="device in devices" :key="device.device_id">
                        <router-link :to="{ name: 'demoDashboard' }" 
                        class="btn text-white mt-2 mb-3" style="border-radius: 10px; background-color: #384ccc;">
                            <h4 class="mb-0">{{ device.device_name }}</h4>
                            <p class="mb-0">Device ID {{ device.device_id }}</p>
                        </router-link>
                    </div>
                </div>
                <div class="form-group text-center">
                    <button type="button" class="btn text-white mt-4 mb-5" style="border-radius: 30px; width: 120px; background-color: #384ccc;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Tambah Alat
                    </button>
                    <div class="credit text-center mt-1">Copyright © 2021 The Egg Cracker</div>
                      
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="staticBackdropLabel">Tambahkan Alat</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3 row">
                                    <label for="inputName" class="col-sm-3 col-form-label">Nama Alat</label>
                                    <div class="col-sm-9">
                                        <input type="text" v-model="device_name" class="form-control" id="inputName">
                                      </div>
                                  </div>
                                  <div class="mb-3 row">
                                    <label for="inputAPI" class="col-sm-3 col-form-label">Device ID</label>
                                    <div class="col-sm-9">
                                      <input type="text" v-model="device_id" class="form-control" id="inputAPI">
                                    </div>
                                  </div>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                              <button type="button" class="btn btn-primary" @click="addDevice" data-bs-dismiss="modal">Tambah</button>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        name: 'DemoDevice',
        data(){
            return {
                devices: [
                    { 
                        device_id: 12345,
                        device_name: "Alat 1"
                    }
                ],
                device_id: '',
                device_name: '',
                message: ''
            }
        },
        methods: {
            addDevice(){
                let newDevice = {
                    device_id: this.device_id,
                    device_name: this.device_name
                }
                this.devices.push(newDevice)
            }
        }
    }
</script>
<style>
    
</style>