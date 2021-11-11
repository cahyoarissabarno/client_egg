<template>
    <div class="container position-relative" style="max-width: 2000px; height: 100vh;">
        <div class="row d-flex align-items-center justify-content-center" style="height: 100%">
            <div class="col-sm-4">
                <div class="logo mb-5 text-center">
                    <img src="../assets/logo1.png" style="height: 50px;" alt="">
                </div>
                <div class="top text-center mb-4">
                    <h2 class="lh-1">Daftar Perangkat</h2>
                    <h5 class="lh-1">Pilih perangkat yang akan dipantau</h5>
                </div>
                {{message}}
                <div class="button-dev">
                    <div class="d-grid gap-2" v-for="device in devices" :key="device.device_id">
                        <router-link :to="{ name: 'dashboard', params: {device_id: device.device_id} }" 
                        class="btn text-white mt-2 mb-3" style="border-radius: 10px; background-color: #384ccc;">
                            <h4 class="mb-0">{{ device.device_name }}</h4>
                            <p class="mb-0">Device ID {{ device.device_id }}</p>
                        </router-link>
                    </div>
                </div>
                <div class="form-group text-center">
                    Device ID<input type="number" v-model="device_id"><br>
                    Device Name<input type="text" v-model="device_name">
                    <input class="btn text-white mt-4 mb-5 px-3" @click="addDevice" style="border-radius: 30px; background-color: #384ccc;" type="submit" value="Tambah Device Baru">
                    <div class="credit text-center mt-5">Copyright © 2021 The Egg Cracker</div>
                </div> 
            </div>
            
        </div>
        <div class="position-absolute bottom-0 start-0 ">
            <a class='bx bx-left-arrow-alt ms-3'  href="monitor.html" style="color: #384ccc; font-size: 5rem; text-decoration: none;"></a>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Device',
        data(){
            return {
                devices: [],
                user_id: '',
                device_id: '',
                device_name: '',
                message: ''
            }
        },
        created(){
            if (localStorage.getItem('token') === null) {
                this.$router.push('/login')
            }
        },
        mounted(){
            axios.get('http://localhost:3000/api/device/', {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.devices = res.data.allDevice
                    this.user_id = res.data.getUser._id
                }
            },err => {
                this.$router.push('/login')
            });
        },
        methods: {
            addDevice(){
                let newDevice = {
                    user_id: this.user_id,
                    device_id: this.device_id,
                    device_name: this.device_name
                }
                axios.put('http://localhost:3000/api/device/add', newDevice, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    this.message = "Berhasil Menambahkan Device"
                }, err => {
                    this.message = "Menambah Device Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            }
        }
    }
</script>
<style>
    
</style>