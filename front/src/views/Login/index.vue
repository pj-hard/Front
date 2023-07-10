<script setup>
import {ref} from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = new useRouter()
const form = ref({
  account:'',
  password:''
})
function checkIn(account,password){
  if(account !== 'admin'){
    reset()
    ElMessage({
      message: '账号错误',
      type: 'error',
    })
  }else if(password !== '123456'){
    reset()
    ElMessage({
      message: '密码错误！',
      type: 'error',
    })
  }else{
    ElMessage({
      message: '欢迎登录',
      type: 'success',
    })
    sessionStorage.setItem('token',true)
    router.push('/')
  } 
}
function reset() {
   form.value.account = ''
   form.value.password = ''
}
</script>

<template>
  <div class="contannier">
    <div class="icon">
      <img src="../../assets/img/shu.png" alt="">
      <p>声振监测系统</p>
    </div>
    <el-form :model="form" label-width="70px" size="small">
      <el-form-item label="账号">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-button type="primary" class="login_btn" @click="checkIn(form.account, form.password)">登录</el-button>
      <el-button type="primary" class="login_btn" @click="reset">清空</el-button>
    </el-form>
  </div>
</template>

<style scoped>
  .contannier{
    display: flex;
    position: relative;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgb(70, 130, 180);
  }
  .contannier .icon{
    display: flex;
    margin-top: -80px;
    margin-left: 90px;
    margin-bottom: 20px;
    width: 300px;
  }
  .contannier .icon img {
    width: 50px;
    height: 50px;
    border-radius: 20%;
    margin-right: 20px;
  }
  .contannier .icon p {
    font-size: 28px;
    line-height: 48px;
  }
  
</style>