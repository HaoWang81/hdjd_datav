<script setup>
import * as echarts from 'echarts'
import { ref, onMounted,defineProps } from 'vue'
const chart = ref()//创建dom引入
const props = defineProps({
  optionData: Object
});
onMounted(() => {
    var option = {
        title: {
            text: props.optionData.title.text,
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 16  // 设置字体大小
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['本周', '上周'],
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 16  // 设置字体大小
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: {
                textStyle: {
                    color: '#ffffff', // 设置字体颜色
                    fontSize: 16  // 设置字体大小
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: '#ffffff', // 设置字体颜色
                    fontSize: 16  // 设置字体大小
                }
            }
        },
        series: [
            {
                name: '本周',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '上周',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310]
            }
        ]
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
<style></style>