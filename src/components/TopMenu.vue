<template>
    <header class="header-global">
        <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-dark bg-gradient-success ct-navbar">
            <div class="container">
                <a class="navbar-brand mr-lg-5 gadugiFont" href="#">
                    <h5 class="m-1 text-white">KHAZESHGAR <sub style="font-size:8px;">by sneeds.ir</sub></h5>
                    <!--<i class="ni ni-app"></i>-->
                    <!--<img src="./../assets/img/white.png" alt="logo">-->
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global"
                        aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a href="">

                                </a>
                            </div>
                            <div class="col-6 collapse-close">
                                <button type="button" class="navbar-toggler" data-toggle="collapse"
                                        data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
                        <li class="nav-item"><router-link to="/" class="nav-link isansFont">Home</router-link></li>
                        <li class="nav-item"><a href="http://www.sneeds.ir" target="_blank" class="nav-link isansFont">Sneeds.ir</a></li>
                        <li class="nav-item"><router-link to="/analysis" class="nav-link isansFont">Analysis</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "TopMenu",
        data : function(){
            return {

            }
        },
    }
</script>

<style scoped>
.ct-navbar{
    position:fixed;
    z-index: 10;
    max-height:120px;
    width:100%;
}
</style>
