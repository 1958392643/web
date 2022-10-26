<template>
    <div class="bg-white min-h-110 h-5/9 flex-col shadow-lg">
        <div class="avator flex justify-center">
            <el-avatar class="mt-5" shape="square" :size="50" :src="user.avator" />
        </div>
        <div class="role font-bold text-2xl flex  justify-center mt-1">
            游客
        </div>
        <div class="briefly font-medium text-xs flex  justify-center mt-2">
            暂无简介
        </div>
        <div class="property flex mt-2 h-1/7">
            <div class="flex flex-1 flex-col">
                <span class="text-xs">0</span>
                <span class="text-xs">关注</span>
            </div>
            <div class="flex flex-1 flex-col">
                <span class="text-xs">0</span>
                <span class="text-xs">粉丝</span>
            </div>
            <div class="flex flex-1 flex-col">
                <span class="text-xs">0</span>
                <span class="text-xs">动态</span>
            </div>
        </div>
        <div class="flex flex-col p-1 mt-6 pl-4">
            <div class="flex items-center ">
                <el-icon><HomeFilled /></el-icon>
                <span class="text-sm font-bold ml-1">Feed</span>
            </div>
            <div class="flex items-center mt-3">
                <el-icon><Promotion /></el-icon>
                <span class="text-sm font-bold ml-1">Connection</span>
            </div>
            <div class="flex items-center mt-3">
                <el-icon><UserFilled /></el-icon>
                <span class="text-sm font-bold ml-1">好友</span>
            </div>
            <div class="flex items-center mt-3">
                <el-icon><Comment /></el-icon>
                <span class="text-sm font-bold ml-1">会话</span>
            </div>
            <div class="flex items-center mt-3">
                <el-icon><BellFilled /></el-icon>
                <span class="text-sm font-bold ml-1">Notification</span>
            </div>
            <div class="flex items-center mt-3">
                <el-icon><Tools /></el-icon>
                <span class="text-sm font-bold ml-1">Setting</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUSer } from '@/stores/user';
import {HomeFilled,Promotion,UserFilled,Comment,Tools, BellFilled} from '@element-plus/icons-vue'
let user = useUSer()
</script>
<style lang="less" scoped>
.avator {
    background-image: url('@/assets/images/bg.png');
    background-repeat: no-repeat;
    background-size: 100% 40px;
}
span{
    text-align: center;
}
.property {
    border-bottom: 1px solid #ccc;
}
.el-icon {
    color: #2563EB;
    vertical-align: center;
}
</style>
