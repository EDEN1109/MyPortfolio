<template>
    <div class="Project">
        <div class="project_container">
            <p class="project_top title_font">PROJECT</p>
            <div class="project_list">
                <div class="project_item" v-for="project in projectList" :key="project.id">
                    <div class="project_imagebox">
                        <img class="project_image" :src="project.image"/>
                        <a class="project_link" :href="project.link" target="_blank" style="text-decoration:none">Go to Detail</a>
                    </div>
                    <p class="project_title">{{project.title}}</p>
                    <p class="project_content defaultLight_font">{{project.content}}</p>
                    <p class="project_tag">{{project.tag}}</p>
                    <p class="project_date">{{project.date}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projectList: [
                    {image: require('@/assets/finger.png'), link: 'https://github.com/EDEN1109', title: 'Finger Game', content: '손가락을 이용하여 진행하는 게임으로 지능발달에 도움이 된다.', tag:'#Unity #CS #PC', date: '2019. 05. ~ 2019. 09.'},
                    {image: require('@/assets/eyetracking.png'), link: 'https://github.com/EDEN1109', title: 'Eye-Tracking Game', content: '안구인식을 통해 진행하는 게임으로 안구운동에 도움이 된다.', tag:'#Unity #CS #PC', date: '2019. 10. ~ 2020. 01.'}, 
                    {image: require('@/assets/mosquito.png'), link: 'https://github.com/EDEN1109', title: 'I AM MOSQUITO', content: '모기가 되어 야생에서 살아남는 게임으로 제작중에 있다.', tag:'#Unreal #C++ #PC #Mobile #Online', date: 'Web. 2020. 04. ~'}
                ]
            }
        },
        methods: {
          go(link) {
              this.$emit('go', link)
          },
        },
    }
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
    .Project {
        width: 100%;
        box-sizing: border-box;
        color: var(--white-color);
        background-color: var(--level3-color);

        .project_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: left;

            .project_top {
                margin: 92px 0px 0px -200px;
                padding: 15px 0px 15px 0px;
                width: 400px;
                left: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                letter-spacing: 2.16px;
                background-color: black;
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);  
            }

            .project_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .project_item {
                    width: 45%;
                    margin-left: 5%;
                    margin-top: 100px;
                    display: inline-block;

                    .project_imagebox {
                        position: relative;
                        &:hover .project_image{
                            transition: 0.3s;
                            opacity: 0.3;
                        } 
                        &:hover .project_link{
                            transition: 0.3s;
                            opacity: 1;
                        }

                        .project_image {
                            width: 90%;
                            margin: 0px;
                        }

                        .project_link {
                            position: absolute;
                            transform: translate( -50%, -50% );
                            top: 50%;
                            left: 45%;
                            padding: 10px;
                            opacity: 0;
                            text-align: center;
                            font-size: 30px;
                            color: var(--point-color);
                        }
                    }

                    .project_title {
                        margin: 10px 10% 0px 0px;
                        font-weight: 500;
                        font-size: 36px;
                    }

                    .project_content {
                        margin: 10px 10% 0px 0px;
                        font-size: 28px;
                        word-break: break-all;
                    }

                    .project_tag {
                        margin: 15px 10% 0px 0px;
                        font-size: 24px;
                        color: var(--tag-color);
                        word-break: break-all;
                    }

                    .project_date {
                        margin: 20px 10% 0px 0px;
                        font-size: 24px;
                        color: var(--tag-color);
                    }
                }
            }
        }
    }
}
@media (max-width: 800px) {
    .Project {
        width: 100%;
        box-sizing: border-box;
        color: var(--white-color);
        background-color: var(--level3-color);

        .project_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-top: 30px;
            padding-bottom: 100px;
            font-size: 24px;
            text-align: left;

            .project_top {
                margin: 5% 0% 5% -100px;
                padding: 15px 0px 15px 0px;
                width: 200px;
                left: 50%;
                display: inline-block;
                position: relative;
                text-align: center;
                font-size: 36px;
                letter-spacing: 2.16px;
                color: var(--neon-color);
                -webkit-text-stroke: 0px;
                background-color: var(--match3-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .project_list {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .project_item {
                    width: 80%;
                    margin-left: 10%;
                    margin-top: 50px;
                    display: inline-block;

                    .project_imagebox {
                        position: relative;

                        .project_image {
                            width: 90%;
                            margin: 0px;
                            opacity: 0.3;
                        }

                        .project_link {
                            position: absolute;
                            transform: translate( -50%, -50% );
                            top: 50%;
                            left: 45%;
                            padding: 10px;
                            opacity: 1;
                            text-align: center;
                            font-size: 20px;
                            color: var(--point-color);
                        }
                    }


                    .project_title {
                        margin: 10px 0px 0px 0px;
                        font-weight: 500;
                        font-size: 24px;
                    }

                    .project_content {
                        margin: 10px 0px 0px 0px;
                        font-size: 16px;
                        word-break: break-all;
                    }

                    .project_tag {
                        margin: 15px 10% 0px 0px;
                        font-size: 12px;
                        color: var(--tag-color);
                        word-break: break-all;
                    }

                    .project_date {
                        margin: 20px 0px 0px 0px;
                        font-size: 12px;
                        color: var(--tag-color);
                    }
                }
            }
        }
    }
}
</style>