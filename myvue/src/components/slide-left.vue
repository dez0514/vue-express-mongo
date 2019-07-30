<template>
    <div class="left-container">
        <transition name="slidein">
        <div class="left-con" v-show="showLeftWrap">
            <div class="left-wrap">
                <div class="left-desc">
                    内容
                </div>
                <div class="hideleft-btn" @click="changeShowLeft(false)">
                    <img src="./images/toleft.png" alt=""> 
                </div>
            </div>
        </div>
        </transition>
        <div class="showleft-btn" @click="changeShowLeft(true)">
            <img src="./images/toright.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showLeftWrap: false
        }
    },
    methods: {
        changeShowLeft(boolean) {
            this.showLeftWrap = boolean
        }
    }
}
</script>

<style lang="scss" scoped>
.showleft-btn {
    position: fixed;
    z-index: 900;
    left: 20px;
    top: 50%;
    margin-top: -9px;
    width: 18px;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }

}
.left-con {
    z-index: 910;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: pink;
}
.left-wrap {
    box-sizing: border-box;
    position: relative;
    padding-right: 58px;
    height: 100vh;
}
.hideleft-btn {
    position: absolute;
    right: 20px;
    top: 50%;
    margin-top: -9px;
    width: 18px;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }

}
    .slidein-enter-active,
    .slidein-leave-active {
        transition: all .3s ease;
    }

    .slidein-enter,
    .slidein-leave-to {
        left: -100%;
        right: 100%;
    }

@media (max-width: 768px) {
    .left-container {
        display: none;
    }
}
</style>

