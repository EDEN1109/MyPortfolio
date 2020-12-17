<template>
    <div class="Contact">
        <div class="contact_container">
            <p class="contact_top title_font">CONTACT</p>

            <div class="contact_list">
                <div class="contact_item" v-for="contact in contactList" :key="contact.id">
                    <div class="contact_icon">
                        <img class="contact_image" :src="contact.image"/>
                        <div class="contact_method defaultLight_font">
                            {{contact.method}}
                        </div>
                    </div>
                    <div class="contact_privacy defaultLight_font">
                        {{contact.privacy}}
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
                contactList: [
                    { image: require('@/assets/email.png'), method: 'Email', privacy: 'eden-1109@naver.com'},
                    { image: require('@/assets/hp.png'), method: 'H.P.', privacy: '+82 - 10 - 4355 -8851'},
                    { image: require('@/assets/blog.png'), method: 'Blog', privacy: 'poison-dog-do-everything.tistory.com'},]
            }
        },
    }
</script>

<style lang="scss" scoped>
@media (min-width: 801px) {
    .Contact {
        width: 100%;
        box-sizing: border-box;
        color: var(--default-color);
        background-color: var(--level1-color);

        .contact_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: left;

            .contact_top {
                margin: 92px 0px 0px -200px;
                padding: 15px 0px 15px 0px;
                width: 400px;
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

            .contact_list {
                width: 100%;
                margin-top: 90px;
                color: var(--white-color);

                .contact_item {
                    margin: 100px 0px 100px 0px;
                    display: flex;

                    .contact_icon {
                        position: relative;
                        margin: 0px 40px 0px 40px;
                        width: 80px;
                        height: 80px;

                        &:hover .contact_image {
                            transition: 0.3s;
                            opacity: 0.3;
                        }
                        &:hover .contact_method {
                            transition: 0.3s;
                            opacity: 1;
                        }

                        .contact_image {
                            position:absolute;
                            width: 80px;
                            height: 80px;
                            padding: 12px;
                            border-radius: 30%;
                            background: var(--neon-color);
                        }

                        .contact_method {

                            width: 80px;
                            height: 80px;
                            padding: 70% 12px 0px 12px;
                            position:absolute;
                            opacity: 0;
                            text-align: center;
                            font-size: 20px;
                        }
                    }

                    .contact_privacy {
                        width: 100%;
                        height: 100%;
                        padding: 30px;
                        margin: 0px 0px 0px 0px;
                        text-align: left;
                        font-size: 30px;
                    }
                }
            }

        }
    }
}
@media (max-width: 800px) {
    .Contact {
        width: 100%;
        box-sizing: border-box;
        color: var(--default-color);
        background-color: var(--level1-color);

        .contact_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 100px;
            font-size: 72px;
            text-align: left;

            .contact_top {
                margin: 92px 0px 0px -200px;
                padding: 15px 0px 15px 0px;
                width: 400px;
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

            .contact_list {
                width: 100%;
                margin-top: 90px;
                color: var(--white-color);

                .contact_item {
                    margin: 50px 0px 50px 0px;
                    display: flex;

                    .contact_icon {
                        position: relative;
                        margin: 0px 40px 0px 40px;
                        width: 50px;
                        height: 50px;

                        .contact_image {
                            position:absolute;
                            width: 50px;
                            height: 50px;
                            padding: 12px;
                            border-radius: 30%;
                            background: var(--neon-color);
                            opacity: 0.3;
                        }

                        .contact_method {

                            width: 50px;
                            height: 50px;
                            padding: 100% 12px 0px 12px;
                            position:absolute;
                            opacity: 1;
                            text-align: center;
                            font-size: 16px;
                        }
                    }

                    .contact_privacy {
                        width: 100%;
                        height: 100%;
                        padding: 30px;
                        margin: 0px 0px 0px 0px;
                        text-align: left;
                        font-size: 16px;
                    }
                }
            }

        }
    }
}
</style>