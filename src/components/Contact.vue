<template>
    <div class="Contact">
        <div class="contact_container">
            <p class="contact_top title_font">CONTACT</p>

            <div class="contact_emailImage">
                <img src="@/assets/email.png" />
            </div>

            <div class="contact_area">
                <p>SEOUL, SOUTH KOREA</p>
            </div>
            <div class="contact_email">
                <p>eden110998@gmail.com / +82 - 10 - 4355 - 8851</p>
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

            .contact_emailImage {
                width: 60px;
                margin: 70px 0px 0px 0px;
            }

            .contact_area {
                margin: 25px 0px 0px 0px;
                font-size: 32px;
                color: #232323;
            }

            .contact_email {
                margin: 14px 0px 0px 0px;
                font-size: 24px;
                color: #232323;
            }
        }
    }
}
@media (max-width: 800px) {
    .Contact {
        width: 100%;
        color: var(--default-color);
        background-color: var(--level1-color);

        .contact_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-bottom: 50px;
            font-size: 24px;
            text-align: left;

            .contact_top {
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
                background-color: var(--match1-color);
                border-width: 0px 0px 6px 0px;
                border-radius: 15px;
                border-style: double ;
                border-color: var(--point-color);
            }

            .contact_emailImage {
                width: 80%;
                margin: 10% 0% 0% 4%;
            }

            .contact_area {
                margin: 5% 0% 0% 4%;
                font-size: 24px;
                color: #232323;
            }

            .contact_email {
                margin: 2% 0% 0% 4%;
                font-size: 16px;
                color: #232323;
            }
        }
    }
}
</style>