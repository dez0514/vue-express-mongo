<template>
    <div>
        <transition name="slidein">
            <div class="slide-right" v-show="showTank">
                <div>
                    <div class="avatar-wrap">
                        <img class="avatar" src="./images/avatar.png" alt="">
                    </div>
                    <div class="nick">寒山少年</div>
                   <div class="words">昨天太近，明天太远</div>
                   <div class="grop-wrap">
                       <div class="group" @click="gotoRouter('archive')">
                           <div class="num">35</div>
                           <div class="txt">日记</div>
                       </div>
                       <div class="group center" @click="gotoRouter('group')">
                           <div class="num">35</div>
                           <div class="txt">分类</div>
                       </div>
                       <div class="group" @click="gotoRouter('tags')">
                           <div class="num">35</div>
                           <div class="txt">标签</div>
                       </div>
                   </div>
                   <div class="link-wrap">
                       <div class="link-item" @click="toGit">
                           <div class="link-dot"></div>
                            <div class="link-icon"><img src="./images/github-w.png" alt=""></div>
                            <div class="link-txt">Github</div>
                       </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="arrow-wrap" :class="showTank ? 'close':''">
            <div class="arrow" @click="arrowClick">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
        <transition name="upin">
            <div class="top-wrap" v-show="showTop" @click="toTop">
                <div class="top">
                    <img src="../images/top.png" alt="">
                </div>
            </div>
        </transition>
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
            gotoRouter(name){
                this.$router.push({name:name})
            },
            toGit() {
                window.open('https://github.com/dez0514')
            },
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
            this.$emit('changeBodyPad', 0)
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
    .avatar-wrap {
        margin-top: 40px;
        height: 110px;
    }
    .avatar {
        display: block;
        margin: 0 auto 0;
        max-width: 96px;
        height: auto;
        border: 2px solid #333;
        padding: 2px;
        border-radius: 50%;
        transition: 1.4s all;
    }
    .avatar:hover {
        transform: rotate(360deg);
        max-width: 106px;
        border: 2px solid pink;
    }
    .nick {
        margin: 15px 0 0;
        text-align: center;
        color: #f5f5f5;
        font-weight: 400;
    }
    .words {
        margin-top: 15px;
        margin-bottom: 25px;
        text-align: center;
        font-size: 14px;
        color: #999;
    }
    .grop-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        .group {
            color: #999;
            padding: 0 15px;
            margin-bottom: 25px;
            cursor: pointer;
            .num {
                text-align: center;
                font-weight: 600;
                font-size: 18px;
            }
            .txt {
                font-size: 13px;
            }
            &.center {
                border-left: 1px solid #333;
                border-right: 1px solid #333;
            }
        }
        .group:hover {
            color: #fff;
        }
    }
    .link-wrap {
       display: flex;
       align-items: center;
       justify-content: center;
       .link-item {
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 4px;
            border-bottom: 1px solid #555;
            cursor: pointer;
       }
       .link-dot {
            margin-right: 4px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #c4ff70;
       }
        .link-icon {
            width: 18px;
            margin-right: 4px;
            opacity: .5;
            img {
                display: block;
                width: 100%;
            }
        }
        .link-txt {
            font-size: 13px;
            color: #999;
        }
        .link-item:hover .link-icon{
            opacity: 1;
        }
        .link-item:hover {
            border-bottom: 1px solid #fff;
        }
        .link-item:hover .link-txt{
           color: #fff;
       }
    }
    .top-wrap {
        z-index: 1010;
        position: fixed;
        right: 30px;
        bottom: 16px;
        cursor: pointer;
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
        cursor: pointer;
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
        // width: 0;
        right: -320px;
    }

    .upin-enter-active,
    .upin-leave-active {
        transition: all .3s ease;
    }

    .upin-enter,
    .upin-leave-to {
        bottom: -34px;
    }
    
     @media (max-width: 1088px) {
        .arrow-wrap ,.to-wrap {
            display: none;
        }
    }
</style>