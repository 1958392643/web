<template>
    <div class="mt-5 pt-3 pl-3 pr-3 bg-white shadow-lg">
        <div class="h-12">
            <el-avatar class="float-left mr-2" :size="40" src="src/assets/images/user.png"></el-avatar>
            <div class="float-left text-xs">
                <div>name time</div>
                <div class="mt-1">副标题</div>
            </div>
            <div class="float-right text-2xl">-</div>
        </div>
        <div class="content text-base">
            <div>
                ViteConf 今天重播中。Vite 不再仅仅是一个开箱即用的构建工具，它也正逐渐成为下一代上层框架之间共享的构建基础设施。
            </div>
            <div>
                <img class="w-full rounded-2xl mt-2 mb-2"
                    src="https://pic3.zhimg.com/80/v2-f9b7689487b358df296a89ee602a83ab_r.jpg" alt="" />
            </div>
        </div>
        <div class="comments flex items-center">
            <el-avatar class=" mr-2" :size="40" :src="user.avator"></el-avatar>
            <el-input v-model="input" class="h-8 mr-2" size="small" placeholder="我好想笑" />
            <el-button type="primary">发表评论</el-button>
        </div>
        <div class="message mt-5">
            <div class="h-auto flex mb-5">
                <div class="mr-2">
                    <el-avatar class="" :size="36" src="src/assets/images/user.png"></el-avatar>
                </div>
                <div class="bg-gray-200 rounded-3xl p-2">
                    <div class="flex justify-between">
                        <span>name</span>
                        <span>time</span>
                    </div>
                    <div class="mt-3">
                        hi， 尤大，我有一个问题，在我跑的某vue工程中，由于对Math.min()函数执行了超过千万次，而导致了额外上千毫秒的性能损耗，但是切换到pure
                        js环境后，这个损耗将消失，将Math.min抽变量为Math_min =Math.min，或者升级至vue3后，这个问题将消失，这让我很费解，这似乎是一个V8的默认优化，为什么在vue2工程下似乎没有优化而因此产生了极大的性能损耗呢？
                    </div>
                </div>
            </div>
            <div class="h-auto flex mb-5">
                <div class="mr-2">
                    <el-avatar class="" :size="36" src="src/assets/images/user.png"></el-avatar>
                </div>
                <div class="bg-gray-200 rounded-3xl p-2">
                    <div class="flex justify-between">
                        <span>name</span>
                        <span>time</span>
                    </div>
                    <div class="mt-3">
                        hi， 尤大，我有一个问题，在我跑的某vue工程中，由于对Math.min()函数执行了超过千万次，而导致了额外上千毫秒的性能损耗，但是切换到pure
                        js环境后，这个损耗将消失，将Math.min抽变量为Math_min =Math.min，或者升级至vue3后，这个问题将消失，这让我很费解，这似乎是一个V8的默认优化，为什么在vue2工程下似乎没有优化而因此产生了极大的性能损耗呢？
                    </div>
                </div>
            </div>
            <div class="h-auto flex mb-5">
                <div class="mr-2">
                    <el-avatar class="" :size="36" src="src/assets/images/user.png"></el-avatar>
                </div>
                <div class="bg-gray-200 rounded-3xl p-2">
                    <div class="flex justify-between">
                        <span>name</span>
                        <span>time</span>
                    </div>
                    <div class="mt-3">
                        hi， 尤大，我有一个问题，在我跑的某vue工程中，由于对Math.min()函数执行了超过千万次，而导致了额外上千毫秒的性能损耗，但是切换到pure
                        js环境后，这个损耗将消失，将Math.min抽变量为Math_min =Math.min，或者升级至vue3后，这个问题将消失，这让我很费解，这似乎是一个V8的默认优化，为什么在vue2工程下似乎没有优化而因此产生了极大的性能损耗呢？
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
   
<script setup lang="ts">
import { useUSer } from '@/stores/user';
import { ref } from 'vue';
let user = useUSer()
let input = ref('')
</script>
<style lang="less" scoped>

</style>
   