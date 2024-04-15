<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineProps, watch } from 'vue'
const chart = ref()//创建dom引入

const props = defineProps({
  周对比: Object,
  option: Object
})

watch(props.option, (newValue, oldValue) => {
  initChart()
});

onMounted(() => {
  initChart()
})

const initChart = () => {
  var option = {
    title: {
      text: props.option.title.text,
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
      // top:15,
      bottom: 35
    },
    tooltip: {},
    dataset: {
      source: [
        ['日期', '本周', '上周', '标准'],
        props.周对比.周一,
        props.周对比.周二,
        props.周对比.周三,
        props.周对比.周四,
        props.周对比.周五,
        props.周对比.周六,
        props.周对比.周日,
      ]
    },
    xAxis: {
      type: 'category',
      boundaryGap: ['20%', '20%'],
      nameGap: 150,
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        },
        marign: 1020
      },
      axisLine: {
        show: false // 隐藏Y轴线条
      },
      splitLine: {
        show: false // 隐藏分隔线
      },
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
      },
      min: .5
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
    }, {
      type: 'bar',
      label: {
        show: true,
        position: 'outside'
      },
    }
    ]
  };
  var myChart = echarts.init(chart.value)
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
<style scoped></style>