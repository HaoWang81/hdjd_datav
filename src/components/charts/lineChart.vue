<script setup>
import * as echarts from 'echarts'
import {ref, onMounted, defineProps, watch} from 'vue'

const chart = ref()//创建dom引入
const props = defineProps({
  optionData: Object,
  周对比: Object
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
  const series = []

  if (props.optionData.legend.data.length == 1) {
    console.log("legen111d", props)
    props.optionData.xAxis.data=props.周对比.x
    series.push({
      name: "近7天",
      type: 'line',
      // stack: 'Total',
      data: props.周对比.y,
      showSymbol: true, //是否默认展示圆点
      symbol: "circle", // 默认是空心圆（中间是白色的）
      symbolSize: 7,
      label: {
        show: true,
        position: 'outside'
      },

    })
  } else {
    props.optionData.legend.data.forEach(function (item) {
      // console.log(item);
      series.push({
        name: item,
        type: 'line',
        // stack: 'Total',
        data: props.optionData.data[item],
        showSymbol: true, //是否默认展示圆点
        symbol: "circle", // 默认是空心圆（中间是白色的）
        symbolSize: 7,
        label: {
          show: true,
          position: 'outside'
        },

      })
    });
  }

  let option = {
    title: {
      text: props.optionData.title.text,
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 16  // 设置字体大小
      },
      top: props.optionData.title.top,
      left: props.optionData.title.left,
      // textAlign :'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: props.optionData.legend.data,
      textStyle: {
        color: '#ffffff', // 设置字体颜色
        fontSize: 12  // 设置字体大小
      },
      top: props.optionData.legend.top,
      left: props.optionData.legend.left,
      x: 'right',
      align: 'right',
      orient: "vertical",
    },
    grid: {
      left: '8%',
      // right: '4%',
      bottom: props.optionData.grid.bottom,
      top: '30%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.optionData.xAxis.data,
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
      axisLine: {
        show: false // 隐藏Y轴线条
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: '#ffffff', // 设置字体颜色
          fontSize: 16  // 设置字体大小
        }
      },
      show: false,
      axisLine: {
        show: false // 隐藏Y轴线条
      },
      splitLine: {
        show: false // 隐藏分隔线
      }
    },
    series: series
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