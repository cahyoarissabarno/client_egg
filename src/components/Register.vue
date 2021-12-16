<template>
    <div class="container" style="height: 100vh; max-width: 2000px;">
        <div class="row" style="height: 100%;">
            <div class="col-md-7 d-flex align-items-end justify-content-start"
            :style="{ 
                'background-size': 'cover',
                'background-position': 'center',
                'backgroundImage': 'url(' + require('@/assets/alat2.png') + ')' }">

                <div class="logo mb-2">
                    <img src="../assets/logo2.png" style="height: 70px;" alt="">
                </div>
            </div>
            <div class="col-md-5">
                <div class="user-regis position-relative mt-auto mb-auto" style="padding: 50px 30px;">
                    <h2 class="text-center mb-4">Daftar</h2>
                    <p>{{message}}</p>
                    <div class="form-group mb-3">
                        <label for="inputEmail" class="form-label mb-0" >Email</label>
                        <input type="email" v-model="email" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan Email">    
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputPassword" class="form-label mb-0">Password</label>
                    <input type="password" v-model="password" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan Password">
                    </div> 
                    <div class="form-group mb-3">
                        <label for="inputUsername" class="form-label mb-0">Username</label>
                        <input type="text" v-model="username" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan Username">    
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputAPI" class="form-label mb-0">Device ID</label>
                        <input type="text" v-model="device_id" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan API Key">    
                        <div class="form-text">*Temukan Device ID pada produk</div>
                    </div>
                    <div class="form-group text-center">
                        <input class="btn text-white mt-3 mb-3" style="border-radius: 30px; width: 120px; background-color: #384ccc;" type="submit" value="Daftar" @click="register">
                    </div> 
                    <div class="signup text-center mb-md-5">
                        Sudah punya akun? Masuk <router-link :to="{ path: '/login'}"> disini.</router-link>
                    </div>
                    <small class="text-center position-absolute bottom-0 start-50 translate-middle-x w-100 mb-2">Copyright © 2021 The Egg Cracker</small>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Register',
        data(){
            return {
                username: '',
                email: '',
                password: '',
                device_id: '',
                message: ''
            }
        },
        methods: {
            register(){
                let newUser = {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    device_id: this.device_id
                }
                axios.post(`https://api-egg.herokuapp.com/api/user/register`, newUser)
                .then(res=>{
                    this.message = ''
                    this.$router.push('/login')
                }, err => {
                    this.message = ''
                    this.message = "Registrasi Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")"
                })
            }
        }
    }
</script>
<style>
    
</style>