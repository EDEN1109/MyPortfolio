<template>
    <div class="About">
        <div class="about_container">
            <p class="about_top title_font">ABOUT</p>
            <div class="about_strengthList">
                <div class="about_strengthItem" v-for="strength in $t('aboutMessages.strengthList')" :key="strength.id">
                    <div class="about_strengthImage">
                        <img :src="strength.image"/>
                    </div>
                    <p class="about_strengthText defaultBold_font">{{strength.text}}</p>
                    <p class="about_strengthExplan defaultLight_font">{{strength.explan}}</p>
                </div>
            </div>
            <div class="about_introduce">
                <div class="about_introImage">
                        <img src="../assets/me_color.png"/>
                </div>
                <div class="about_introText">
                    <p class="about_introTitle defaultBold_font">&lt;&lt; {{$t('aboutMessages.introName')}} &gt;&gt;</p>
                    <div class="about_introDetail defaultLight_font">
                        {{$t('aboutMessages.introFirstLine')}}
                        <a href="https://www.google.com/maps/@37.0190952,126.9156497,3a,75y,67.4h,91.32t/data=!3m8!1e1!3m6!1sAF1QipM9Z_Io5TvMVEl3OiiOHBnLLC9vsodtH7ATZx6P!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipM9Z_Io5TvMVEl3OiiOHBnLLC9vsodtH7ATZx6P%3Dw203-h100-k-no-pi-0-ya97.91478-ro-0-fo100!7i8704!8i4352?hl=ko"
                        target="_blank" style="text-decoration:none">
                        {{$t('aboutMessages.introLocate')}}</a>
                        .

                        <div class="antecedents defaultLight_font">
                            <ul>
                            <li v-for="antecedent in $t('aboutMessages.antecedentList')" :key="antecedent.id">
                            <br><br>{{antecedent.date}}
                            <a :href="antecedent.link" target="_blank" style="text-decoration:none">{{antecedent.organization}}</a>
                            {{antecedent.detail}}
                            </li>
                            </ul>
                        </div>

                        <div v-for="introText in $t('aboutMessages.introTextList')" :key="introText.id">
                            <br><br>{{introText}}
                        </div>
                        <br><br><br>
                        <a href="javascript:void(0);" @click="makeFun()" style="text-decoration:none">{{$t('aboutMessages.introMakeFun')}}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        methods: { 
            makeFun() {
                this.$emit('makeFun')
            },
        }
    }
</script>

<style lang="scss">
@media (min-width: 801px) {
    .About {
        width: 100%;
        box-sizing: border-box;
        color: var(--white-color);
        background-color: var(--level1-color);

        .about_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: left;

            .about_top {
                margin: 92px 0px 0px -150px;
                padding: 15px 0px 15px 0px;
                width: 300px;
                left: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                letter-spacing: 2.16px;
                background-color: var(--match1-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .about_strengthList {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                margin-top: 90px;

                .about_strengthItem {
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.3s;
                    }
                    &:hover .about_strengthImage { 
                        transition: 0.3s;                       
                        border-width: 0px 0px 10px 0px;
                    }
                    &:not(:hover) .about_strengthImage { 
                        transition: 0.3s;                       
                        border-width: 0px 0px 0px 0px;
                    }

                    .about_strengthImage {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 80px;
                        height: 80px;
                        padding: 12px;
                        margin-left: 50%;
                        transform: translateX(-50%);
                        border-radius: 20%;
                        border-style: double ;
                        border-color: var(--neon-color);
                        background: var(--point-color);


                        img {
                            width: 70px;
                            height: 70px;
                        }
                    }
                
                    .about_strengthText {
                        width: 350px;
                        text-align: center;
                        margin-top: 10px;
                        font-size: 20px;
                    }
                    .about_strengthExplan {
                        width: 350px;
                        height: 80px;
                        margin-top: 15px;
                        text-align: center;
                        font-size: 16px;
                    }
                }
            }

            .about_introduce {
                width: 100%;
                margin: 100px 0px 0px 0px;
                font-size: 24px;
                display: inline-flex;


                .about_introImage {
                    padding-top: 2.5%;
                    padding-left: 5%;
                    width: 50%;

                    img {
                        position: relative;
                        width: 80%;
                        border-radius: 20%;
                        border-style: double ;
                        border-color: var(--neon-color);
                        -webkit-filter: grayscale(100%);

                        &:hover {
                            transition: 1s;      
                            -webkit-filter: grayscale(0%);
                            border-width: 0px 0px 10px 0px;
                            margin-top: -1%;
                        }
                        &:not(:hover) { 
                            transition: 0.3s;    
                            -webkit-filter: grayscale(100%);
                            border-width: 0px 0px 0px 0px;
                            margin-top: 0%;
                        }
                    }
                }

                .about_introText {
                    width: 50%;
                    height: 100%;
                    padding: 5%;
                    border-width: 10px;
                    border-radius: 15px;
                    border-style: double ;
                    border-color: var(--neon-color);

                    .about_introTitle {
                        width: 100%;
                        text-align: center;
                        font-size: 34px;
                    }
                    .about_introDetail {
                        width: 100%;
                        height: 100%;
                        margin-top: 10%;
                        text-align: center;
                        font-size: 24px;

                        a {
                            color: var(--point-color);
                        }

                        .antecedents {
                            text-align: left;
                        }
                    }   
                }
            }
        }
    }
}
@media (max-width: 800px) {
    .About {
        width: 100%;
        color: var(--white-color);
        background-color: var(--level1-color);

        .about_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-top: 30px;
            padding-bottom: 100px;
            font-size: 24px;
            text-align: left;

            .about_top {
                margin: 5% 0% 5% -75px;
                padding: 15px 0px 15px 0px;
                width: 150px;
                left: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                font-size: 36px;
                letter-spacing: 2.16px;
                color: var(--neon-color);
                -webkit-text-stroke: 0px;
                background-color: var(--match1-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .about_strengthList {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                margin-top: 40px;

                .about_strengthItem {
                    margin-left: 50%;
                    transform: translateX(-50%);

                    .about_strengthImage {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 60px;
                        height: 60px;
                        padding: 12px;
                        margin-left: 50%;
                        transform: translateX(-50%);
                        border-radius: 20%;
                        border-style: double ;
                        border-color: var(--neon-color);
                        background: var(--point-color);


                        img {
                            width: 50px;
                            height: 50px;
                        }
                    }
                
                    .about_strengthText {
                        width: 350px;
                        text-align: center;
                        margin-top: 10px;
                        font-size: 18px;
                    }
                    .about_strengthExplan {
                        width: 350px;
                        height: 80px;
                        margin-top: 15px;
                        text-align: center;
                        font-size: 14px;
                    }
                }
            }

            .about_introduce {
                width: 100%;
                margin: 80px 0px 0px 0px;
                display: block;


                .about_introImage {
                    width: 250px;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    padding-top: 2.5%;

                    img {
                        position: relative;
                        width: 250px;
                        border-radius: 20%;
                        border-style: double ;
                        border-color: var(--neon-color);
                    }
                }

                .about_introText {
                    margin-top: 20px;
                    margin-left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    border-width: 10px;
                    border-radius: 15px;
                    border-style: double ;
                    border-color: var(--neon-color);

                    .about_introTitle {
                        width: 100%;
                        padding-top: 2px;
                        text-align: center;
                        margin-top: 10px;
                        font-size: 18px;
                    }
                    .about_introDetail {
                        width: 90%;
                        height: 95%;
                        padding: 2.5% 5% 2.5% 5%;
                        margin-top: 20px;
                        text-align: center;
                        font-size: 16px;

                        a {
                            color: var(--point-color);
                        }
                        .antecedents {
                            text-align: left;
                        }
                    }   
                }
            }
        }
    }
}
</style>