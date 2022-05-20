<script lang="ts" setup>
import axios,{cancel} from './utils/request';
// const source = axios.CancelToken.source();
const send = async()=>{
  try {
    // https://apipc-xiaotuxian-front.itheima.net/home/category/head
  const res = await axios.get('home/category/head',{
    // 取消请求 
  })
  console.log(res);
  } catch (error) {
    
    console.log(error.message);
  }
}
const stop = ()=>{
  cancel('home/category/head');
  }
</script>
<template>
  <button @click="send">发送请求</button>
  <button @click="stop">取消请求</button>
</template>
<style scoped lang="less"></style>