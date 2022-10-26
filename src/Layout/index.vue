<template>
    <div class="layout">
        <Header></Header>
        <Content></Content>
    </div>
    <div></div>

</template>

<script setup lang='ts'>
import Header from './header/index.vue'
import Content from './content/index.vue'
</script>
<style lang="less" scoped>
.layout {
    height: 100%;
}
</style>