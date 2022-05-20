<script lang="ts" setup>
import axios from 'axios';
// const source = axios.CancelToken.source();
let source = null
const send = async()=>{
  console.log('开始');
  source = axios.CancelToken.source();
  try {
    // https://apipc-xiaotuxian-front.itheima.net/home/category/head
  const res = await axios.get('https://apipc-xiaotuxian-front.itheima.net/home/category/head',{
    // 取消请求 
    cancelToken: source.token
  })
  console.log(res);
  } catch (error) {
    
    console.log(error.message);
  }
  
  
  const stop = ()=>{
    // console.log('停止');
    source?.cancel('取消请求');
  }
}
const stop = ()=>{
    console.log('停止');
    source.cancel('取消请求');
  }
</script>
<template>
  <button @click="send">发送请求</button>
  <button @click="stop">取消请求</button>
</template>
<style scoped lang="less"></style>