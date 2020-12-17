<template>
    <div class="About">
        <div class="about_container">
            <p class="about_top title_font">ABOUT</p>
            <div class="about_purpose">
                <p>아마추어 게임 개발자의</p>
                <p>나름 기록해본 게임 개발의 발자취들</p>
            </div>
            <div class="about_detail">
                <p>전문 게임 개발자를 꿈꾸는 아마추어 게임 개발자 진이든입니다. 본 페이지는 게임 개발자를 향한 진이든의 게임 개발 발자취들을 담고 있습니다.</p>
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
    .About {
        width: 100%;
        box-sizing: border-box;
        color: var(--default-color);
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

            .about_purpose {
                margin: 80px 0px 0px 0px;
                font-size: 32px;
                color: #232323;
            }

            .about_detail {
                margin: 43px 0px 0px 0px;
                font-size: 24px;
                color: #232323;
            }
        }
    }
}
@media (max-width: 800px) {
    .About {
        width: 100%;
        color: var(--default-color);
        background-color: var(--level1-color);

        .about_container {
            width: 80%;
            margin-left: 10%;
            margin-right: 10%;
            padding-top: 100px;
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

            .about_purpose {
                margin: 4% 0% 0% 4%;
                font-size: 24px;
                color: #232323;
            }

            .about_detail {
                margin: 3% 0% 0% 4%;
                font-size: 16px;
                color: #232323;
            }
        }
    }
}
</style>