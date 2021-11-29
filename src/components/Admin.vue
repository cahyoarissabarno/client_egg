<template>
    <div>
        Admin Page 
        <br>
        <h2>Create New Device ID</h2>
        <input type="number" v-model="device_id">
        <button @click="createDevice">Create</button>
        <button @click="logout">Logout</button>   
        
        <AdminDevice></AdminDevice>
        <AdminUser></AdminUser>

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
                message:''
            }
        },
        methods: {
            createDevice(){
                let device = {
                    device_id: this.device_id
                }
                axios.post(`${process.env.VUE_APP_API_URL}/api/admin/device`, device, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res => {
                    this.message= ''
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