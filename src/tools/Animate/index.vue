<template>
    <div
        class="item"
        v-if="exist"
        :style="{
            width: `${width}px`,
            height: `${height}px`,
            opacity:opacity,
            transform: `translate(${moveX}px, ${moveY}px) scale(${sx}, ${sy})`
        }"
    >
        <img :src="src" />
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    transition: all 1s;
    transform-origin: 0% 0%;
    img{
        width: 100%;
        border-radius: 50%;
    }
}
</style>