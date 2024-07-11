<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const goDatav = () => {
  router.push("/datav")
}

</script>
<template>
  <el-button type="primary" @click="goDatav">进入首页</el-button>
</template>
<style scoped>
.cards {
  display: flex;
}

.el-card {
  flex: 0 1 50%;
  margin: 1% 0%;
  height: 100%;
}
</style>