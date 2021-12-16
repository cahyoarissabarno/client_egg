<template>
    <div class="container" style="height: 100vh; max-width: 2000px;">
        <div class="row" style="height: 100%;">
            <div class="col-md-7 d-flex align-items-end justify-content-start" :style="{ 
                'background-size': 'cover',
                'background-position': 'center',
                'backgroundImage': 'url(' + require('@/assets/alat1.png') + ')' }">

                <div class="logo mb-2"><img src="../assets/logo2.png" style="height: 70px;" alt=""></div>
            </div>
            <div class="d-flex align-items-center justify-content-center col-md-5">
                <div class="row">
                    <div class="col-12 p-md-5 px-4 mb-5 pb-5">
                        <h2 class="text-center mt-5">Masuk</h2>
                        <h5 class="text-center mb-4">Masuk dan mulai memecahkan telur!</h5>
                        <div v-if="message != ''"class="alert alert-primary" role="alert">
                            {{message}}
                        </div>
                        <div class="form-group mt-5 mb-3">
                            <label for="inputEmail" class="form-label mb-0">Email</label>
                            <input type="email" v-model="email" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;" placeholder="Masukkan Email">    
                        </div>
                        <div class="form-group mb-4">
                            <label for="inputPassword" class="form-label mb-0">Password</label>
                            <input type="password" v-model="password" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;"  placeholder="Masukkan Password">
                        </div>     
                        <div class="form-group d-flex justify-content-between">
                            <input class="btn text-white" @click="login" style="border-radius: 30px; width: 120px; background-color: #384ccc;" type="submit" value="Masuk">
                            <a class="my-2" href="#" data-bs-toggle="modal" data-bs-target="#forgetPass" style="font-size: 15px; text-decoration: none;">Lupa Password?</a>
                        </div>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="forgetPass" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Lupa Password</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email</label>
                                        <input type="email" v-model="emailReset" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        <div id="emailHelp" class="form-text">
                                            Akan dikirimkan link untuk merubah password melalui email anda, silahkan isikan email yang terdaftar lalu tekan kirim dan cek email anda.
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Keluar</button>
                                <button type="button" class="btn btn-primary" @click="sendMail()" data-bs-dismiss="modal">Kirim</button>
                                </div>
                            </div>
                            </div>
                        </div>           
                        <div class="mt-5">Belum punya akun? Daftar <router-link :to="{ path: '/register'}"> disini.</router-link></div>
                        
                    </div>
                    <div class="col-12 align-self-center text-center mt-md-4">
                        <small>Copyright © 2021 The Egg Cracker</small>
                    </div>
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
                message: '',
                emailReset: ''
            }
        },
        methods: {
            login(){
                let user = {
                    email: this.email,
                    password: this.password
                }
                axios.post(`https://api-egg.herokuapp.com/api/user/login`, user)
                .then(res=>{
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token)
                        if (res.data.role == 'user') {
                            this.$router.push('/device')   
                        }
                        if (res.data.role == 'admin') {
                            this.$router.push('/admin')   
                        }
                    }
                }, err => {
                    this.message = "Login Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            },
            sendMail(){
                let data = {
                    email: this.emailReset
                }
                axios.put(`https://api-egg.herokuapp.com/api/user/reset-password`, data)
                .then(res=>{
                    if (res.status === 200) {
                        this.message = 'Link reset password telah dikirim, silahkan cek email anda'
                    }
                }, err => {
                    this.message = "Terjadi Kesalahan, " + err.response.data.message + " (" + err.response.status +")" 
                    console.log(data)
                })
            }
        }
    }
</script>
<style>
    
</style>