<template>
    <div class="Footer">
        <div class="footer_container">
            <div class="source_copyright">
                <a href="https://www.freepik.com/photos/technology">Home Background image Created by Freepik in Freepik.com<br></a>
                <a href="https://www.freepik.com/">Contact Icons Created by Freepik in Freepik.com<br></a>
                <a href="http://greenegg.co.kr/">BOKEH Font Designed by greenegg.co.kr</a>
            </div>
            <p class="site_copyright">Copyright ⓒ 2020. EDEN JIN. All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@media(min-width: 801px) {
    .Footer {
            width: 100%;
            box-sizing: border-box;
            color: var(--white-color);
            background-color: var(--default-color);

            .footer_container {
                width: 80%;
                margin-left: 10%;
                margin-right: 10%;
                padding: 150px 0px 65px 0px;
                font-size: 18px;
                text-align: right;

                .source_copyright {
                    line-height: 150%;
                }
                .site_copyright {
                    padding-top: 75px;
                    text-align: center;
                    font-size: 24px;
                }
            }
    }
}
@media(max-width: 800px) {
    .Footer {
        width: 100%;
        color: var(--white-color);
        background-color: var(--default-color);

        .footer_container {
                width: 80%;
                margin-left: 10%;
                margin-right: 10%;
                padding: 100px 0px 65px 0px;
                font-size: 10px;
                text-align: right;

                .source_copyright {
                    line-height: 150%;
                }
                .site_copyright {
                    padding-top: 50px;
                    text-align: center;
                    font-size: 14px;
                }
        }
    }
}
</style>

<style type="text/css"> 
a { text-decoration:none } 
a:link { color: var(--tag-color); text-decoration: none;}
a:visited { color: var(--tag-color); text-decoration: none;}
a:hover { color: var(--white-color); text-decoration: underline;}
</style> 