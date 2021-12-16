<template>
    <div class="container-fluid"  style="height: 100vh; max-width: 2000px;">
        <div class="row min-vh-100 flex-column flex-md-row">
            <!-- Nav Here -->
            <DemoNavigation></DemoNavigation>
            <main class="col px-0 flex-grow-1">
                <div class="row">
                    <div class="col-md px-5">
                        <div class="row">
                            <div class="mt-4" id="page-content-wrapper">
                                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                                    <div class="d-flex align-items-center">
                                        <h1 class="display-6 fw-bold m-0">Bantuan</h1>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-center" style="height: 80%;">
                            <div class="col-md-6 ps-3 pt-3">
                                <div class="row px-4" style="height: 50%;">
                                    <div class="step"><img src="../../assets/step1.png" style="height:100%; width: 100%; object-fit: contain;"></div>
                                </div>
                                <div class="row px-4" style="height: 50%;">
                                    <div class="step"><img src="../../assets/step2.png" style="height:100%; width: 100%; object-fit: contain;"></div>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-center">
                                <div class="row px-4" style="height: 50%;">
                                    <div class="step"><img src="../../assets/step3.png" style="height:100%; width: 100%; object-fit: contain;"></div>
                                </div>
                                <div class="row">
        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<script>
    import DemoNavigation from '../Demo/Navigation.vue'

    export default {
        name: 'DemoBantuan',
        components:{
            DemoNavigation
        }
    }
</script>