<template>
    <div class="Skill">
        <div class="skill_container">
            <p class="skill_top title_font">SKILL</p>
            <div class="skill_list">
                <div class="skill_item" v-for="skill in skillList" :key="skill.id">
                    <div class="skill_image">
                        <img :src="skill.image"/>
                    </div>
                    <div class="proficiency">
                        <p class="proficiency_title">Proficiency</p>
                        {{skill.proficiency}}
                    </div>
                    <div class="skill_text defaultBold_font">
                        <div class="skill_text_wrapper">
                            {{skill.text}}
                            <div class="indicator"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- logo size 220px 220px -->
<script>
    export default {
        data() {
            return {
                skillList: [
                    { image: require('@/assets/Unity_logo.png'), text: 'Unity', proficiency: 'Intermediate'},
                    { image: require('@/assets/Unreal_logo.png'), text: 'Unreal', proficiency: 'Basic'},
                    { image: require('@/assets/CSharp_logo.png'), text: 'C#', proficiency: 'Intermediate'},
                    { image: require('@/assets/C++_logo.png'), text: 'C++', proficiency: 'Intermediate'},]
            }
        },
    }
</script>

<style lang="scss">
@media (min-width: 801px) {
    .Skill {
        width: 100%;
        box-sizing: border-box;
        color: var(--white-color);
        background-color: var(--level2-color);

        .skill_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: left;

            .skill_top {
                margin: 92px 0px 0px -150px;
                padding: 15px 0px 15px 0px;
                width: 300px;
                left: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                letter-spacing: 2.16px;
                background-color: var(--match2-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .skill_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                width: 100%;
                margin-top: 90px;

                .skill_item {
                    &:hover {
                        transform: scale(1.05);
                        transition: 0.3s;
                        
                        .indicator {
                            width: 10%;
                            transform: scaleX(10) translateX(40%);
                            transition:  0.3s;
                            border-style: double;
                            border-width: 0px 0.1px 6px 0.1px;
                            border-color: var(--point-color);
                        }
                    }
                    &:hover .skill_image {
                        opacity: 0.3;
                    }
                    &:hover .proficiency {
                        opacity: 1;
                    }
                    &:not(:hover) .proficiency {
                        opacity: 0;
                    }

                    .skill_image {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 278px;
                        height: 278px;
                        border-radius: 50%;
                        background: #ffffff;
                    }

                    
                    .proficiency {
                        width: 278px;
                        height: 278px;
                        position: absolute;
                        text-align: center;
                        padding-top: 30%;
                        top:0;
                        font-size: 38px;

                        .proficiency_title {
                            font-size: 28px;
                            padding-bottom: 15px;
                        }
                    }

                    .skill_text {
                        width: 100%;
                        height: 80px;
                        margin-top: 10px;
                        text-align: center;
                        font-weight: bold;
                        font-size: 56px;

                        .skill_text_wrapper {
                            display: inline-block;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 800px) {
    .Skill {
        width: 100%;
        color: var(--white-color);
        background-color: var(--level2-color);

        .skill_container {
            width: 80%;
            margin-left: 10%;
            padding-bottom: 50px;
            font-size: 24px;
            text-align: left;

            .skill_top {
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
                background-color: var(--match2-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .skill_list {
                display: block;
                justify-content: space-between;
                flex-wrap: wrap;

                .skill_item {
                    width: 278px;
                    position: relative;
                    margin-top: 50px;
                    margin-left: 50%;
                    transform: translateX(-50%);

                    .skill_image {
                        margin-left: 0%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 278px;
                        height: 278px;
                        border-radius: 50%;
                        background: #ffffff;
                        opacity: 0.3;

                        .image {
                            width: 100%;
                        }
                    }

                    .proficiency {
                        margin-left: 50%;
                        transform: translate( -50%, 0% );
                        width: 278px;
                        height: 278px;
                        position: absolute;
                        text-align: center;
                        padding-top: 100px;
                        top:0;
                        font-size: 36px;

                        .proficiency_title {
                            font-size: 28px;
                            padding-bottom: 15px;
                        }
                    }

                    .skill_text {
                        margin-left: 50%;
                        transform: translate( -50%, 0% );
                        width: 278px;
                        margin-top: 10px;
                        text-align: center;
                        font-size: 30px;
                    }
                }
            }
        }
    }
}
</style>