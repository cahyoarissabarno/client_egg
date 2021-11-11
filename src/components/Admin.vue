<template>
    <div>
        Admin Page
    <input type="number" v-model="device_id">
    <button @click="createDevice">Create</button>
    <button @click="logout">Logout</button>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'Admin',
        data(){
            return {
                devices: null,
                device_id: '',
                message:''
            }
        },
        created(){
            axios.get('http://localhost:3000/api/device/admin', {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.devices = res.data.devices
                }
            },err => {
                this.$router.push('/login')
            });
        },
        methods: {
            createDevice(){
                let device = {
                    device_id: this.device_id
                }
                axios.post('http://localhost:3000/api/device/admin', device, {
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