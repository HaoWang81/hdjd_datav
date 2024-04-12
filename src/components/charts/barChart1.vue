<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const chart = ref()//创建dom引入
console.log(chart)
onMounted(() => {
  var option = {
    title: {
      text: '南高齿每日造型数量对比',
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 16  // 设置字体大小
      },
      left: 170
    },
    legend: {
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 12  // 设置字体大小
      },
      x: 'right',
      right: 20,
      orient: "vertical",
    },
    grid: {
      // top:5,
      bottom: 25
    },
    tooltip: {},
    dataset: {
      source: [
        ['日期', '本周', '上周'],
        ['周一', 43.3, 85.8],
        ['周二', 83.1, 73.4],
        ['周三', 86.4, 65.2],
        ['周四', 72.4, 53.9],
        ['周五', 83.1, 73.4],
        ['周六', 86.4, 65.2],
        ['周日', 72.4, 53.9],
      ]
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
      axisLine: {
        show: false // 隐藏Y轴线条
      },
      splitLine: {
        show: false // 隐藏分隔线
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        },
        show: false
      },
      axisLine: {
        show: false // 隐藏Y轴线条
      },
      splitLine: {
        show: false // 隐藏分隔线
      }
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [{
      type: 'bar',
      label: {
        show: true,
        position: 'outside'
      },
    }, {
      type: 'bar',
      label: {
        show: true,
        position: 'outside'
      },
    }]
  };
  var myChart = echarts.init(chart.value)
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})
</script>
<template>
  <div ref="chart" style="width: 100%;height: 32vh;">
  </div>
</template>
<style scoped></style>