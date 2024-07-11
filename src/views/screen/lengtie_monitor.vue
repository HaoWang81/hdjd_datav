<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";
import {useRoute} from 'vue-router';

const production_company = ref('')

onMounted(() => {
  const route = useRoute();
  production_company.value = route.query.production_company;
  const userAgent = navigator.userAgent.toLowerCase();
  console.log(production_company.value)
  // 检测是否包含移动设备的关键词
  if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
  } else {

  }
});

const fetchData = () => {
  axios.post("/api/screen/lengtie_monitor/" + production_company.value, {
    "production_company": production_company
  }).then((response) => {
    data.value = response.data
  })
}


</script>
<template>
  <dv-full-screen-container>
    <h1>冷铁监控</h1>
    <h2>
      {{ production_company }}
    </h2>
  </dv-full-screen-container>


</template>
<style scoped>


</style>