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
      }
    },
    legend: {
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 16  // 设置字体大小
      }
    },
    tooltip: {},
    dataset: {
      source: [
        ['日期', '昨日', '今日'],
        ['SANGC-001', 43.3, 85.8],
        ['SANGC-002', 83.1, 73.4],
        ['SANGC-003', 86.4, 65.2],
        ['SANGC-004', 72.4, 53.9]
      ]
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
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
  <div ref="chart" style="width: 100%;height: 35vh;">
  </div>
</template>
<style scoped></style>