<template>
    <div class="table-responsive">
        <h2>Device Table</h2>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Device ID</th>
                <th scope="col">Status</th>
                <th scope="col">User ID</th>
                <th scope="col">Created at</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="device in devices" :key="device._id">
                <th scope="row">{{device._id}}</th>
                <td>{{device.status}}</td>
                <td>{{device.user_id}}</td>
                <td>{{device.created_at}}</td>
                <td>
                    <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editDevice">Edit</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
                </tr>
            </tbody>
        </table>
        <!-- Modal -->
        <div class="modal fade" id="editDevice" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
        name: 'AdminDevice',
        data(){
            return {
                devices: null,
                message: ''
            }
        },
        mounted(){
            axios.get(`${process.env.VUE_APP_API_URL}/api/admin/device`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(res => {
                if (res.status === 200) {
                    this.devices = res.data.devices
                }
            },err => {
                this.message = "Terjadi Kesalahan"
            });
        }
    }
</script>