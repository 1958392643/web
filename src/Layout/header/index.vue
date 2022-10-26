<template>
    <header class="header">
        <div class="float-left">logo</div>
        <div class="float-right h-full w-2/5 ">
            <div class="float-right h-full  flex items-center justify-around w-1/5 mr-10">
            <el-icon class=""><House /></el-icon>
            <el-icon><User /></el-icon>
            <el-icon><Bell /></el-icon>
            <el-icon><Message /></el-icon>
            <el-icon><Sunny /></el-icon>
        </div>
        <div class="float-right h-full flex items-center ml-6 mr-3">
            <el-avatar :size="36" :src="user.avator" class="mr-1" />
            <span class="text-sm">小熊</span>
        </div>
        <div class="float-right h-full  w-60 flex items-center">
            <el-input v-model="input3" class="m-2 h-8" size="small" placeholder="搜索社区" :prefix-icon="Search" />
        </div>
        </div>
    </header>
</template>

<script setup lang='ts'>
import {Search,House,User,Bell,Message,Sunny} from '@element-plus/icons-vue'
import {ref} from 'vue'
import {useUSer} from '@/stores/user'
let user = useUSer()
console.log(user.avator);

let input3 = ref('')
</script>
<style  scoped lang="less">
.header {
    height: 42px;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    background-color: #fff;
}
.el-icon {
    color: #60A5FA;
}
</style>