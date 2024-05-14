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
  }
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
    legend: {},
    tooltip: {},
    dataset: {
      dimensions: ['product', '2015', '2016', '2017'],
      source: [
        {product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7},
        {product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1},
        {product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5},
        {product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1}
      ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]
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