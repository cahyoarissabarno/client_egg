<template>
    <div class="col-2 bg-light" id="sidebar-wrapper">
        <div class="sidebar-heading d-flex justify-content-center mt-4 mb-5">
            <a href="#"><img src="../assets/logo1.png" width="150"></a>
        </div>
        <nav class="nav flex-column">
            <a class="nav-link active d-flex align-items-center" href="monitor.html" style="color:#a1a0b4">
                <i class='bx bx-line-chart fs-4'></i>
                <span class="links-name ms-3">Monitoring</span></a>
            <a class="nav-link d-flex align-items-center" aria-current="page" href="#" style="color: #384ccc;">
                <i class='bx bx bx-cog fs-4'></i>
                <span class="links-name ms-3">Pengaturan</span></a>
            <a class="nav-link d-flex align-items-center" href="help.html" style="color: #a1a0b4">
                <i class='bx bxs-help-circle fs-4'></i>
                <span class="links-name ms-3">Bantuan</span></a>
            <a class="nav-link d-flex align-items-center" href="#" style="color: #a1a0b4">
                <i class='bx bxs-info-circle fs-4'></i>
                <span class="links-name ms-3">Tentang</span></a>
            <a class="nav-link d-flex align-items-center" href="device-list.html" style="color: #a1a0b4">
                <i class='bx bx-log-out fs-4'></i>
                <span class="links-name ms-3">Device List</span></a>
        </nav> 
        <button @click="logout">logout</button>  
    </div>
</template>
<script>
    export default {
        name: 'Navigation',
        methods: {
            logout(){
                localStorage.clear();
                this.$router.push('/login')
            }
        }
    }
</script>