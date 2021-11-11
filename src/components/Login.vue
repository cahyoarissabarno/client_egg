<template>
    <div class="container" style="height: 100vh; max-width: 2000px;">
        <div class="row" style="height: 100%;">
            <div class="col-md-7 d-flex align-items-end justify-content-start" :style="{ 
                'background-size': 'cover',
                'background-position': 'center',
                'backgroundImage': 'url(' + require('@/assets/alat1.png') + ')' }">

                <div class="logo mb-2"><img src="../assets/logo2.png" style="height: 70px;" alt=""></div>
            </div>
            <div class="col-md-5">
                <div class="user-login position-relative mt-auto mb-auto" style="padding: 145px 70px;">
                    <h2 class="text-center">Masuk</h2>
                    <h5 class="text-center mb-4">Masuk dan mulai memecahkan telur!</h5>
                    <p>{{message}}</p>
                    <div class="form-group mb-3">
                        <label for="inputEmail" class="form-label mb-0">Email</label>
                        <input type="email" v-model="email" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan Email">    
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputPassword" class="form-label mb-0">Password</label>
                        <input type="password" v-model="password" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;"  placeholder="Masukkan Password">
                    </div>     
                    <div class="form-group d-flex justify-content-end">
                        <a class="no-pass" href="#" style="font-size: 15px; text-decoration: none;">Lupa Password?</a>
                    </div>           
                    <div class="form-group text-center">
                        <input class="btn text-white mt-3 mb-3" @click="login" style="border-radius: 30px; width: 120px; background-color: #384ccc;" type="submit" value="Masuk">
                    </div> 
                    <div class="signup text-center">Belum punya akun? Daftar <router-link :to="{ path: '/register'}"> disini.</router-link></div>
                    <div class="credit text-center position-absolute bottom-0 start-50 translate-middle-x">Copyright © 2021 The Egg Cracker</div>
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Login',
        data(){
            return {
                email: '',
                password: '',
                message: ''
            }
        },
        methods: {
            login(){
                let user = {
                    email: this.email,
                    password: this.password
                }
                axios.post('http://localhost:3000/api/user/login', user)
                .then(res=>{
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token)
                        this.$router.push('/device')
                    }
                }, err => {
                    this.message = "Login Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            }
        }
    }
</script>
<style>
    
</style>