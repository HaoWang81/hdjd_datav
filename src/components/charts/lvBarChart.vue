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
    right: '-50%'
  },
  data: [
    ['product', '2015', '2016', '2017'],
    ['Matcha Latte', 43.3, 85.8, 93.7],
    ['Milk Tea', 83.1, 73.4, 55.1],
    ['Cheese Cocoa', 86.4, 65.2, 82.5],
    ['Walnut Brownie', 72.4, 53.9, 39.1]
  ]
})


let myChart = null
onMounted(() => {
  initOption.value = Object.assign(initOption.value, props.optionData)
  myChart = echarts.init(chart.value)
  initChart()
})
watch(props.optionData, (newValue, oldValue) => {
  initOption.value = newValue
  console.log('========', initOption.value.data)
  initChart()
});

const initChart = () => {
  let option = {
    title: {
      text: props.optionData.title.text,
      textStyle: props.optionData.title.textStyle,
      left: '45%',
      top: '5%'
    },
    legend: {
      x: 'left',
      left: '5%',
      top: '5%',
      orient: 'vertical',
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 12  // 设置字体大小
      },
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      bottom: '10%'
    },
    dataset: {
      source: props.optionData.data
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
    },
    yAxis: {
      show: false,
      axisLine: {
        show: false // 隐藏Y轴线条
      },
      splitLine: {
        show: false // 隐藏分隔线
      },
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
    }, {
      type: 'bar',
      label: {
        show: true,
        position: 'top'
      },
    }]
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