<template>
    <div class="Home">
        <div class="home_container">
            <div class="home_title">
                <h1 class="title_font">GAMEPLAY PROGRAMMER<br>EDEN JIN</h1>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
    .Home {
        z-index: 2;
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assets/main.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .home_container {
            width: 100%;
            margin: auto;
            font-size: 72px;
            text-align: center;
            .home_title {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                    -webkit-box-align: center; 
                        -ms-flex-align: center; 
                            align-items: center; 
                -webkit-box-pack: center; 
                    -ms-flex-pack: center;
                        justify-content: center;
                padding-top: 15%;
                padding-bottom: 15%;
                font-size: 60px;
            }
        }
    }
}

@media (max-width: 800px) {
    .Home {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assets/main.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .home_container {
            margin: auto;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: center;

            .home_title {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                    -webkit-box-align: center; 
                        -ms-flex-align: center; 
                            align-items: center; 
                -webkit-box-pack: center; 
                    -ms-flex-pack: center;
                        justify-content: center;
                padding-top: 30%;
                font-size: 30px;
            }
        }
    }
}
</style>