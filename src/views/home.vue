<script setup>
import OnelineChart from "@/components/charts/onelineChart.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const lvCountOption = ref({
  data: {},
  title: {
    text: "铸铝生产监控访问统计",
    textStyle: {}
  }
})

const ngcCountOption = ref({
  data: [],
  title: {
    text: "南高齿生产监控访问统计",
    textStyle: {}
  }
})

const ngcInnerCountOption = ref({
  data: [],
  title: {
    text: "南高齿内部生产监控访问统计",
    textStyle: {}
  }
})

const tieCountOption = ref({
  data: [],
  title: {
    text: "铸铁生产监控访问统计",
    textStyle: {}
  }
})

const ip = ref({
  ipCount: 0,
  ipDisCount: 0
})

onMounted(() => {
  fetch_lvCount()
  fetch_ngcCount()
  fetch_tieCount()
  fetch_ipCount()
  fetch_ngcInnerCount()
})

const fetch_lvCount = () => {
  axios.post("/api/home/lvCount").then((response) => {
    lvCountOption.value.data = response.data
  })
}

const fetch_ngcCount = () => {
  axios.post("/api/home/ngcCount").then((response) => {
    ngcCountOption.value.data = response.data
  })
}

const fetch_ngcInnerCount = () => {
  axios.post("/api/home/ngcInnerCount").then((response) => {
    ngcInnerCountOption.value.data = response.data
  })
}

const fetch_tieCount = () => {
  axios.post("/api/home/tieCount").then((response) => {
    tieCountOption.value.data = response.data
  })
}
const fetch_ipCount = () => {
  axios.post("/api/home/ipCount").then((response) => {
    const data = response.data
    ip.value.ipCount = data.ipCount
    ip.value.ipDisCount = data.ipDisCount
  })
}

</script>
<template>
  <div class="flex flex-wrap gap-4 cards">
    <el-card shadow="always">
      <div style="display: flex;align-content: center;align-items: center">
        <div style="flex: 0 1 50%">
          <span style="font-weight: bolder">总人次</span>
        </div>
        <div style="flex: 0 1 50%">
          <span>{{ ip.ipCount }}</span>
        </div>
      </div>

    </el-card>
    <el-card shadow="always">
      <div style="display: flex">
        <div style="flex: 0 1 50%">
          <span style="font-weight: bolder">累计人数</span>
        </div>
        <div style="flex: 0 1 50%">
          <span>{{ ip.ipDisCount }}</span>
        </div>
      </div>
    </el-card>
    <!--    <el-card shadow="always">Never</el-card>-->
  </div>
  <div style="height: 20%;">
    <onelineChart :optionData="lvCountOption"></onelineChart>
  </div>
  <div style="height: 20%;">
    <onelineChart :optionData="tieCountOption"></onelineChart>
  </div>
  <div style="height: 20%;">
    <onelineChart :optionData="ngcCountOption"></onelineChart>
  </div>
  <div style="height: 20%;">
    <onelineChart :optionData="ngcInnerCountOption"></onelineChart>
  </div>
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