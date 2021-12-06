<template>
    <div class="row my-3">
        <div class="col-md table-responsive-md">
            <h4>Tabel Device</h4>
            <table id="data_device" class="table table-responsive table-hover text-center" style="width:100%">
                <thead class="table text-white" style="background-color: #384ccc;">
                    <tr>
                        <th scope="col">Device ID</th>
                        <th scope="col">Status</th>
                        <th scope="col">User ID</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr scope="row" v-for="(device, index) in devices" :key="index">
                        <th>{{device.device_id}}</th>
                        <td>{{device.status}}</td>
                        <td v-if="device.user_id">{{getUser(device.user_id)}}</td>
                        <td v-if="!device.user_id"></td>
                        <td>{{device.created_at}}</td>
                        <td>
                            <a href="#" class="btn btn-warning btn-sm" style="font-weight: 600;" data-bs-toggle="modal" data-bs-target="#editDevice" @click="editDevice(index)">
                                <i class="bi bi-pencil-square"></i>&nbsp;Edit
                            </a> 
                            <a href="#" class="btn btn-danger btn-sm" style="font-weight: 600;" @click="delDevice(device._id)">
                                <i class="bi bi-trash-fill"></i>&nbsp;Delete
                            </a>
                        </td>
                        </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="editDevice" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Edit Device</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3 row">
                        <label for="device_id" class="col-sm-3 col-form-label">Device ID</label>
                        <div class="col-sm-9">
                            <input type="number" class="form-control" id="device_id" v-model="device_id">
                        </div>
                        <label for="user_id" class="col-sm-3 col-form-label">User ID</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="user_id" v-model="user_id">
                        </div>
                        <label for="device_name" class="col-sm-3 col-form-label">Device Name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="device_name" v-model="device_name">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="updateDevice">Perbarui</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'AdminDevice',
        data(){
            return {
                devices: null,
                message: '',
                email: '',
                device_id: '',
                user_id: '',
                device_name: '',
                deviceId: ''
            }
        },
        mounted(){
            axios.get(`https://api-egg.herokuapp.com/api/admin/device`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.devices = res.data.devices
                }
            },err => {
                this.message = "Terjadi Kesalahan"
            });
        },
        methods : {
            getUser(userId){
                axios.get(`https://api-egg.herokuapp.com/api/admin/user/${userId}`, {
                headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    // console.log(res)
                    this.email = res.data.getUser.email
                }, err => {
                    this.message = "Terjadi Kesalahan get email user"
                })
                return this.email
            },
            editDevice(index){
                this.device_id = this.devices[index].device_id
                this.user_id = this.devices[index].user_id
                this.device_name = this.devices[index].device_name
                this.deviceId = this.devices[index]._id
            }, 
            updateDevice(){
                let upDevice = {
                    user_id: this.user_id,
                    device_id: this.device_id,
                    device_name: this.device_name
                }
                axios.put(`https://api-egg.herokuapp.com/api/admin/device/${this.deviceId}`, upDevice, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    this.message = "Berhasil Mengubah Device"
                    this.$router.go()
                }, err => {
                    this.message = "Mengubah Device Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            },
            delDevice(id){
                axios.delete(`https://api-egg.herokuapp.com/api/admin/device/${id}`, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    this.message = "Berhasil Menghapus Device"
                    this.$router.go()
                }, err => {
                    this.message = "Menghapus Device Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            }
        }
    }
</script>