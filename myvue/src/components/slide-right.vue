<template>
    <div>
        <transition name="slidein">
            <div class="slide-right" v-show="showTank">
                <div>2121231231</div>
            </div>
        </transition>
        <div class="arrow-wrap" :class="showTank ? 'close':''">
            <div class="arrow" @click="arrowClick">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
        <div class="top-wrap" v-show="showTop" @click="toTop">
            <div class="top">
                <img src="../images/top.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showTank: false,
                showTop: false
            }
        },
        methods: {
            // 点击关闭和显示
            arrowClick() {
                this.showTank = !this.showTank
                if (!this.showTank) {
                    this.$emit('changeBodyPad', 0)
                } else {
                    this.$emit('changeBodyPad', 320)
                }
            },
            scrollToTop() {
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                if (scrollTop > 0) {
                    this.showTop = true
                } else {
                    this.showTop = false
                }
            },
            toTop() {
                // 回到顶部
                let distance = document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
                let step = distance / 50; //每步的距离
                (function jump() {
                    if (distance > 0) {
                        distance -= step;
                        // document.documentElement.scrollTop = distance;
                        // document.body.scrollTop = distance;
                        window.scrollTo(0, distance);
                        setTimeout(jump, 10)
                    }
                })();
            }
        },
        mounted() {
            window.addEventListener('scroll', this.scrollToTop)
        }
    }
</script>

<style lang="scss" scoped>
    .slide-right {
        z-index: 1000;
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        width: 320px;
        background: #222;
        color: #fff;
    }

    .top-wrap {
        z-index: 1010;
        position: fixed;
        right: 30px;
        bottom: 16px;

        .top {
            width: 14px;
            height: 14px;
            padding: 10px;
            background: #222;

            img {
                display: block;
                width: 100%;
            }
        }
    }

    .arrow-wrap {
        z-index: 1010;
        position: fixed;
        right: 30px;
        bottom: 55px;
    }

    .arrow {
        width: 14px;
        height: 14px;
        padding: 10px;
        background: #222;
        position: relative;
    }

    .arrow i {
        display: block;
        width: 14px;
        height: 2px;
        background: #fff;
        position: absolute;
        border-radius: 10px 0 0 10px;
        transition: all 300ms;
    }

    .arrow i:nth-of-type(1) {
        top: 10;
    }

    .arrow i:nth-of-type(2) {
        top: 15px;
    }

    .arrow i:nth-of-type(3) {
        top: 20px;
    }

    .arrow:hover i {
        border-radius: 0;
    }

    .arrow:hover i:nth-of-type(1) {
        width: 8px;
        top: 15px;
        transform-origin: left center;
        transform: rotate(-45deg);
    }

    .arrow:hover i:nth-of-type(2) {
        border-radius: 10px 0 0 10px;
    }

    .arrow:hover i:nth-of-type(3) {
        width: 8px;
        top: 15px;
        transform-origin: left center;
        transform: rotate(45deg);
    }

    .close {
        .arrow i:nth-of-type(1) {
            width: 14px;
            top: 15px;
            transform-origin: center center;
            transform: rotate(-45deg);
        }

        .arrow i:nth-of-type(2) {
            display: none;
        }

        .arrow i:nth-of-type(3) {
            width: 14px;
            top: 15px;
            transform-origin: center center;
            transform: rotate(45deg);
        }
    }

    .slidein-enter-active,
    .slidein-leave-active {
        transition: all .3s ease;
    }

    .slidein-enter,
    .slidein-leave-to {
        width: 0;
    }
     @media (max-width: 768px) {
        .arrow-wrap ,.to-wrap{
            display: none;
        }
     }
</style>