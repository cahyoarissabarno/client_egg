<template>
    <div class="table-responsive">
        <h2>User Table</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">User ID</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user._id">
                <th scope="row">{{user._id}}</th>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
                <td>{{user.created_at}}</td>
                <td>
                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editUser">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="editUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                ...
                </div>
                <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Understood</button>
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
                message: ''
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
        }
    }
</script>