<template>
    <div class="Home">
        <div class="home_blank"></div>
        <div class="home_container">
            <div class="home_title">
                <h1 class="title_font">GAME DEVELOPER<br>EDEN JIN</h1>
            </div>
            <button class="home_button" @click="start()">See More</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            start() {
                this.$emit('start')
            },
        }
    }
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
    .Home {
        z-index: 2;
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assets/cyber.jpg');
        background-repeat: no-repeat;
        background-size: cover;

        .home_blank {
            z-index: -1;
            position:absolute;
            width: 100%;
            height: 100%;
            background-color: black;
            opacity: 0.7;
        }

        .home_container {
            width: 100%;
            height: 100%;
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
                        border-width: 6px 6px 6px 6px;
                height: 85%;
                font-size: 60px;
            }

            .home_button {
                margin: auto;
                margin-bottom: 10%;
                font-size: 24px;
                padding: 10px 0px 10px 0px;
                width: 150px;
                left: 50%;
                text-align: center;
                letter-spacing: 1px;
                border-width: 3px;
                border-style: solid;
                border-color: var(--neon-color);
                color: var(--white-color);
                background-color: rgba(0, 0, 0, 0.5);
                
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                    -webkit-box-align: center; 
                        -ms-flex-align: center; 
                            align-items: center; 
                -webkit-box-pack: center; 
                    -ms-flex-pack: center;
                        justify-content: center;

                &:hover {
                    transition: 0.3s;
                    background-color: var(--neon-color);
                }
            }
        }        
    }
}

@media (max-width: 800px) {
    .Home {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url('../assets/cyber.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        .home_container {
            width: 100%;
            height: 100%;
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
                height: 85%;
                font-size: 30px;
            }

            .home_button {
                display: none;
            }
        }
    }
}
</style>