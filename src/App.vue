<script lang="ts" setup>
// import request from './utils/request';
// const source = axios.CancelToken.source();
const request = (url)=>{
  return new Promise((resolve,reject)=>{
    const random = ((Math.random()*1000)|0)+1000
    setTimeout(()=>{
      resolve('请求成功'+random)
    },random)
  })
}
 // Promise.resolve() // 成功的promise
  // Promise.reject() // 失败的promise
  // Promise.all([p,p2]) // 多个promise组合成一个，当所有成功resolve时，才会执行
  // Promise.race() // 竞速 只要有一个结束，结果就是第一个
  // Promise.any() //只要有一个成功，结果就是成功


// 并发请求
// 同时请求5个请求，完成一个，继续发送
// 请求池，如果池大小小于五，就可以往里面放，如果请求成功，就扔出去
const pool = []
const max = 5

const send = async()=>{
  for(var i=0;i<1000;i++){
    const task = request(i)
    pool.push(task)
    task.then((res)=>{
      console.log(res);
      const idx = pool.indexOf(task)
      // 移除任务
      pool.splice(idx,1)
      
    })
    console.log(pool);
    
    if(pool.length===max){
      // 池满了
      await Promise.race(pool)
    }
  }
}
  
  
  

const stop = ()=>{
  }
</script>
<template>
  <button @click="send">发送请求</button>
  <button @click="stop">取消请求</button>
</template>
<style scoped lang="less"></style>