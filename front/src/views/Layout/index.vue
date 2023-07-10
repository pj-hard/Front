<script setup>
import { RouterView } from 'vue-router'
import {
  Headset,
  BellFilled
} from '@element-plus/icons-vue'
</script>

<template>
  <!-- 左右两栏布局 -->
  <div class="common-layout">
    <el-container>
        <el-header class="header">
          <img src="../../assets/img/SHU-LOGO.JPG" alt="">
          <span>近地面目标声震信号智能识别上位机</span>
        </el-header>
    <!-- 侧边栏 -->
      <el-container>
        <el-aside width="200px" class="side">
          <el-menu
          :router = 'true'
          class="el-menu-vertical-demo"
          default-active="0"
          
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Headset /></el-icon>
              <span>声识别任务</span>
            </template>
              <el-menu-item index="/sound/view">声信号展示</el-menu-item>
              <el-menu-item index="1-2">声信号训练</el-menu-item>
              <el-menu-item index="1-3">声信号分类</el-menu-item>
          </el-sub-menu>

          <el-sub-menu index="2">
              <template #title>
                <el-icon><BellFilled /></el-icon>
                <span>震识别任务</span>
              </template>
                <el-menu-item index="2-1">震信号展示</el-menu-item>
                <el-menu-item index="2-2">震信号训练</el-menu-item>
                <el-menu-item index="2-3">震信号分类</el-menu-item>
            </el-sub-menu>
        </el-menu>
        </el-aside>
        <!-- 主体展示区域 -->
        <el-main class="main"><RouterView></RouterView></el-main>
      </el-container>
      </el-container>
    </div>
  
</template>

<style scoped>
.side{
  height: 100vh;
  background-color: #fff;
  margin-left: 300px;
  margin-top: 80px;
}
.side span {
  margin-left: 10px;
  font-size: 16px;
}
.header {
  display: flex;
  margin-left: 350px;
  margin-top: 30px;
}
.header img{
  width: 200px;
  height: 80px;
}
.header span{
  font-size: 30px;
  line-height: 80px;
}
.main {
  margin-top: 80px;
  margin-left: 20px;
}
</style>