<template>
  <div>
    <div @click="navigateToRouter">navigateTo 跳转</div>
    <el-button><NuxtLink to="/">首页</NuxtLink></el-button>
    <el-button><NuxtLink to="/testlink">testlink</NuxtLink></el-button>
    <el-button><NuxtLink to="/testlink/12">testlink id</NuxtLink></el-button>
    <el-button @click="navigateToRouter">navigateTo 跳转</el-button>
    <el-button @click="routerGo">useRouter 跳转</el-button>
  </div>
</template>
<script lang="ts" setup>
const router = useRouter();
const navigateToRouter = () => {
  console.log("11");
  navigateTo({
    path: "/testlink/navigateToRouter",
    query: {
      name: "zs",
      age: 14,
    },
  });
};
const routerGo = () => {
  router.push({
    path: "/testlink/routerGo",
    query: {
      name: "zs",
      age: 14,
    },
  });
};
</script>
<style scoped lang="scss"></style>
