<template>
    <div class="min-h-30 bg-white shadow-lg">
        <div class="flex flex-clo ml-3 mr-3" style="border-bottom:1px solid #ccc">
            <div class=" flex justify-center items-center">
                <el-avatar :size="40" :src="user.avator" />
            </div>
            <div class="flex-1 items-center">
                <el-input class="pt-3" v-model="pin"  :rows="2" type="textarea" placeholder="想清楚说什么" />
            </div>
        </div>
        <div class="ml-3 mr-3">
            <div class="float-left mt-2 mr-2">
                <el-button type="default">
                    <el-icon class="mr-1"> <Picture /></el-icon>
                    图片
                </el-button>
            </div>
            <div class="float-left mt-2 mr-2">
                <el-button type="default">
                    <el-icon class="mr-1"><Film /></el-icon>
                    视频
                </el-button>
            </div>
            <div class="float-left mt-2 mr-2">
                <el-button type="default">@</el-button>
            </div>
            <div class="float-right mt-2">
                <el-button type="primary">发布</el-button>
            </div>
        </div>
    </div>
</template>
   
<script setup lang="ts">
import {Film,Picture} from '@element-plus/icons-vue'
import { useUSer } from '@/stores/user';
import { ref } from 'vue';
let user = useUSer()
let pin = ref('')
</script>
<style lang="less" scoped>
.el-textarea  {
    border: 0;
}
.el-textarea :deep(.el-textarea__inner) {
    border: 0;
    resize: none;
    box-shadow: none;
}
</style>
   