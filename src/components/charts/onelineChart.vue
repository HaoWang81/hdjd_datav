<script setup>
import * as echarts from 'echarts'
import {ref, onMounted, defineProps, watch} from 'vue'

const chart = ref()//创建dom引入
const props = defineProps({
  optionData: Object,
});

const initOption = ref({
  title: {
    text: "这是标题",
    textStyle: {
      color: '#000000',
      fontSize: 16  // 设置字体大小
    },
  },
  data: {
    y: [1, 2, 43, 43],
    x: ['示例1', '示例2', '示例3', '示例4']
  },
  xAxis: {
    axisLine: {
      show: false // 隐藏Y轴线条
    },
  },
  yAxis: {
    show: false
  },
})


let myChart = null
onMounted(() => {
  initOption.value = Object.assign(initOption.value, props.optionData)
  myChart = echarts.init(chart.value)
  initChart()
})
watch(props.optionData, (newValue, oldValue) => {
  initOption.value = newValue
  initChart()
});

const initChart = () => {


  let option = {
    title: {
      text: initOption.value.title.text,
      textStyle: initOption.value.title.textStyle,
      x: 'center'
    },
    xAxis: {
      type: 'category',
      data: initOption.value.data.x,
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
      axisLine: {
        show: true // 隐藏Y轴线条
      },
    },
    yAxis: {
      type: 'value',
      show: true
    },
    series: [
      {
        data: initOption.value.data.y,
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
  <div ref="chart" style="width: 100%;height: 100%;">
  </div>
</template>
<style></style>