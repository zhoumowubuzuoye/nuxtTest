<template>
  <div>
    <div>测试请求</div>
    <!-- <el-button @click="fetchData">测试fetch请求</el-button>
    <el-button @click="asyncData">测试useAsynData请求</el-button>
    <el-button @click="fetchD">测试useFetch请求</el-button> -->
  </div>
</template>
<script lang="ts" setup>
const BASE_URL = "http://codercba.com:9060/juanpi/api";

const fetchData = () => {
  $fetch(`${BASE_URL}/homeInfo`).then((res) => {
    console.log(res);
  });
};

const asyncData = async () => {
  const { data } = await useAsyncData("homeInfo", () => {
    return $fetch(`${BASE_URL}/homeInfo`);
  });

  console.log(data);
};

const fetchD = async() => {
  const {data} = await useFetch("/home", { baseURL: BASE_URL });
  console.log(data);
};
// fetchData();
// asyncData();
fetchD()
</script>
<style scoped lang="scss"></style>
