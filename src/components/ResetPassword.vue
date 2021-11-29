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
                    <h2 class="text-center">Reset Password</h2>
                    <h5 class="text-center mb-4">Silahkan Masukkan Password Baru Anda</h5>
                    <div v-if="message != ''"class="alert alert-primary" role="alert">
                        {{message}}
                    </div>
                    <div class="form-group mb-3">
                        <label for="inputPassword" class="form-label mb-0">Masukkan Password</label>
                        <input type="password" v-model="password" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;"  placeholder="Masukkan Password">
                    </div>   
                    <div class="form-group mb-3">
                        <label for="inputPassword" class="form-label mb-0">Masukkan Ulang Password</label>
                        <input type="password" v-model="password2" class="form-control form-control ms-auto me-auto" style="border-radius: 30px;"  placeholder="Masukkan Ulang Password">
                    </div> 
                             
                    <div class="form-group text-center">
                        <input class="btn text-white mt-3 mb-3" @click="resetPass" style="border-radius: 30px; width: 120px; background-color: #384ccc;" type="submit" value="Kirim">
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
    name: 'ResetPassword',
    data(){
        return {
            password: '',
            password2: '',
            message: ''
        }
    },
    methods: {
        resetPass(){
            let data = {
                password: this.password
            }
            if (this.password == this.password2) {
                axios.put(`${process.env.VUE_APP_API_URL}/api/user/reset-password/${this.$route.params.token}`, data)
                .then(res=>{
                    if (res.status === 200) {
                        this.message = ''
                        this.$router.push('/login')
                    }
                }, err => {
                    this.message = "Terjadi Kesalahan, " + err.response.data.message + " (" + err.response.status +")" 
                })   
            }
            else this.message = 'Password dan Masukan Ulang Password Tidak Sama. Coba Lagi'
        }
    }
}
</script>