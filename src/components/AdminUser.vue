<template>
    <div class="row my-3">
        <div class="col-md table-responsive-md">
            <h4>Tabel User</h4>
            <table id="data_user" class="table table-responsive table-hover text-center" style="width:100%">
                <thead class="table text-white table-borderless" style="background-color: #384ccc;">
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in users" :key="index">
                        <th>{{user._id}}</th>
                        <td>{{user.username}}</td>
                        <td>{{user.email}}</td>
                        <td>{{user.created_at}}</td>
                        <td>
                            <a href="#" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#editUser" style="font-weight: 600;" @click="editUser(index)">
                                <i class="bi bi-pencil-square"></i>&nbsp;Edit
                            </a> 
                            <a href="#" class="btn btn-danger btn-sm" style="font-weight: 600;" @click="delUser(user._id)"><i class="bi bi-trash-fill"></i>&nbsp;Delete</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="modal fade" id="editUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Edit User</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3 row">
                        <label for="username" class="col-sm-3 col-form-label">Username</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" id="username" v-model="username">
                        </div>
                        <label for="email" class="col-sm-3 col-form-label">Email</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="email" v-model="email">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="updateUser">Perbarui</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        name: 'AdminUser',
        data(){
            return {
                users: null,
                message: '',
                username: '',
                email: '',
                userId: ''
            }
        },
        mounted(){
            axios.get(`https://api-egg.herokuapp.com/api/admin/user`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.users = res.data.allUser
                    console.log(this.users)
                }
            },err => {
                this.message = "Terjadi Kesalahan"
            });
        },

        methods: {
            editUser(index){
                this.username = this.users[index].username
                this.email = this.users[index].email
                this.userId = this.users[index]._id
            }, 
            updateUser(){
                let upUser = {
                    username: this.username,
                    email: this.email
                }
                axios.put(`https://api-egg.herokuapp.com/api/admin/user/${this.userId}`, upUser, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    this.message = "Berhasil Mengubah User"
                    this.$router.go()
                }, err => {
                    this.message = "Mengubah User Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            },
            delUser(id){
                axios.delete(`https://api-egg.herokuapp.com/api/admin/user/${id}`, {
                    headers: { token: localStorage.getItem('token') }
                })
                .then(res=>{
                    this.message = "Berhasil Menghapus User"
                    this.$router.go()
                }, err => {
                    this.message = "Menghapus User Gagal," + this.message + " " + err.response.data.message + " (" + err.response.status +")" 
                })
            }
        }
    }
</script>