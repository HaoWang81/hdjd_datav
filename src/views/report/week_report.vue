<script setup>
import {ref} from "vue";
import OnelineChart from "@/components/charts/onelineChart.vue";

const activeName = ref("0")

const 金属option = ref({
  data: [],
  title: {
    text: '金属数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  },
   xAxis: {
    axisLine: {
      show: true // 隐藏Y轴线条
    },
  },
  yAxis: {
    show: true
  },
})
</script>
<template>
  <el-tabs v-model="activeName" class="demo-tabs" type="border-card" tab-position="left">
    <el-tab-pane label="生产计划" name="0">
      <div>
        <oneline-chart :optionData="金属option"></oneline-chart>
      </div>
    </el-tab-pane>
    <el-tab-pane label="生产质量" name="1">Config</el-tab-pane>
    <el-tab-pane label="在手订单汇总" name="2">Role</el-tab-pane>
    <el-tab-pane label="本周重点工作" name="3">Task</el-tab-pane>
    <el-tab-pane label="协调事项" name="4">Task</el-tab-pane>
    <el-tab-pane label="改进事项" name="5">Task</el-tab-pane>
  </el-tabs>
</template>
<style scoped>
.el-tabs {
  height: 100%;
}
</style>