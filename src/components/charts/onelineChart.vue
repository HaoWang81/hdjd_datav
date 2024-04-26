<script setup>
import * as echarts from 'echarts'
import {ref, onMounted, defineProps, watch} from 'vue'

const chart = ref()//创建dom引入
const props = defineProps({
  optionData: Object,
});


let myChart = null
onMounted(() => {
  myChart = echarts.init(chart.value)
  initChart()
})
watch(props.optionData, (newValue, oldValue) => {
  initChart()
});

const initChart = () => {


  let option = {
    title: {
      text: props.optionData.title.text,
      x: 'center'
    },
    xAxis: {
      type: 'category',
      data: props.optionData.data.x
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.optionData.data.y,
        type: 'line'
      }
    ]
  };
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}


</script>
<template>
  <div ref="chart" style="width: 100%;height: 35vh;">
  </div>
</template>
<style></style>