<template>
    <div class="bg-white min-h-70 flex-col shadow-lg p-3 mb-3">
        <div class="font-bold text-sm">附近的人</div>
        <div class="mt-1 mb-2">
            <div class="flex text-xs items-center mb-4">
                <el-avatar :size="36" class="mr-2"></el-avatar>
                <div class=" flex-1 mr-2">
                    <div>name</div>
                    <div>简介稍微有点短</div>
                </div>
                <el-button  type="primary" :icon="Plus" circle=""></el-button>
            </div>
            <div class="flex text-xs items-center mb-4">
                <el-avatar :size="36" class="mr-2"></el-avatar>
                <div class="flex-1 mr-2">
                    <div>name</div>
                    <div>简介稍微有点短</div>
                </div>
                <el-button type="primary" :icon="Plus" circle=""></el-button>
            </div>
            <div class="flex text-xs items-center mb-4">
                <el-avatar :size="36" class="mr-2"></el-avatar>
                <div class="flex-1 mr-2">
                    <div>name</div>
                    <div>简介稍微有点短</div>
                </div>
                <el-button type="primary" :icon="Plus" circle=""></el-button>
            </div>
            <div class="flex text-xs items-center mb-4">
                <el-avatar :size="36" class="mr-2"></el-avatar>
                <div class="flex-1 mr-2">
                    <div>name</div>
                    <div>简介稍微有点短</div>
                </div>
                <el-button type="primary" :icon="Plus" circle=""></el-button>
            </div>
            <div class="flex text-xs items-center mb-4">
                <el-avatar :size="36" class="mr-2"></el-avatar>
                <div class="flex-1 mr-2">
                    <div>name</div>
                    <div>简介稍微有点短</div>
                </div>
                <el-button type="primary" :icon="Plus" circle=""></el-button>
            </div>
        </div>
    </div>
</template>
   
<script setup lang="ts">
import {Plus} from '@element-plus/icons-vue'
</script>
<style lang="less" scoped>
.el-button {
    justify-self: flex-end;
}
</style>
   