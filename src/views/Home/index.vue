<template>
 <div class="home h-full flex w-4/5">
    <div class="info h-full ">
        <info></info>
    </div>
    <main class="h-full">
        <share></share>
        <news></news>
    </main>
    <aside class="h-full">
        <near></near>
        <hot></hot>
    </aside>
 </div>
</template>

<script setup lang="ts">
import info from './info.vue'
import share from './share.vue'
import news from './news.vue'
import near from './near.vue'
import hot from './hot.vue'
</script>
<style lang="less" scoped>
.home {
    margin:15px auto;
    .info{
        width: 250px;
    }
    main {
        flex: 1;
        margin: 0 10px;
        
    }
    aside{
        width: 250px;
    }
}
</style>