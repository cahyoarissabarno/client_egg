<template>
    <div>
        <div class="container">
            <div class="row my-2">
                <div class="col-md">
                    <h3 class="text-center fw-bold text-uppercase mt-3">Halaman Admin</h3>
                    <hr>
                </div>
            </div>
            <div class="col-md">
                <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="bi bi-person-plus-fill"></i>&nbsp;Tambah Device</a>
                <a href="#" @click="logout" target="_blank" class="btn btn-success ms-1"><i class="bi bi-box-arrow-left"></i>&nbsp;Logout</a>
            </div>
            <div class="row my-2">
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="staticBackdropLabel">Tambah Device</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3 row">
                                <label for="inputName" class="col-sm-3 col-form-label">Device ID</label>
                                <div class="col-sm-9">
                                    <input type="number" class="form-control" id="inputName" v-model="device_id">
                                </div>
                              </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                          <button type="button" class="btn btn-primary" @click="createDevice">Tambah</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <a href="#" @click="getTable('user')" class="nav-link" v-bind:class="{active: userBtn}">Tabel User</a>
                </li>
                <li class="nav-item">
                    <a href="#" @click="getTable('device')" class="nav-link" v-bind:class="{active: deviceBtn}">Tabel Device</a>
                </li>
                </li>
            </ul>
            <div v-if="tabels=='device'"><AdminDevice></AdminDevice></div>
            <div v-if="tabels=='user'"><AdminUser></AdminUser></div>
        </div>

    </div>
</template>
<script>
    import axios from 'axios';
    import AdminDevice from './AdminDevice.vue';
    import AdminUser from './AdminUser.vue';

    export default {
        name: 'Admin',
        components:{
            AdminDevice, AdminUser
        },
        data(){
            return {
                device_id: '',
                message:'',
                tabels: 'device',
                userBtn: false,
                deviceBtn: true
            }
        },
        methods: {
            getTable(tab){
                this.tabels = tab
                this.userBtn = !this.userBtn
                this.deviceBtn = !this.deviceBtn
            },
            createDevice(){
                let device = {
                    device_id: this.device_id
                }
                axios.post(`https://api-egg.herokuapp.com/api/admin/device`, device, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res => {
                    this.message= 'Device Berhasil Ditambahkan'
                    this.$router.go()
                },err => {
                    this.message="Create Device Failed"
                });
            },
            logout(){
                localStorage.clear();
                this.$router.push('/login')
            }
        }
    }
</script>
<style>
    
</style>