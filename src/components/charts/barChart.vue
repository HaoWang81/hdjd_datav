<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, watch, defineProps } from 'vue'
const chart = ref()//创建dom引入
console.log(chart)

const props = defineProps(
    {
        周对比: Object
    }
)
watch(props.周对比, (newValue, oldValue) => {

    console.log('数据遍历')
    initChart()
});

onMounted(() => {
    initChart()
})

const initChart = () => {
    var option = {
        title: {
            text: '小件数量每日对比',
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 16  // 设置字体大小
            },
            left: 150
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['本周', '上周'],
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 12  // 设置字体大小
            },
            x: 'right',
            orient: "vertical",
        },
        grid: {
            left: '8%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
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
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['周日', '周六', '周五', '周四', '周三', '周二', '周一'],
                axisLabel: {
                    textStyle: {
                        color: '#ffffff', // 设置字体颜色
                        fontSize: 14  // 设置字体大小
                    }
                },
                axisLine: {
                    show: false // 隐藏Y轴线条
                },
                splitLine: {
                    show: false // 隐藏分隔线
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '本周',
                type: 'bar',
                label: {
                    show: true,
                    position: 'outside'
                },
                emphasis: {
                    focus: 'series'
                },
                data: props.周对比.本周
            },
            {
                name: '上周',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'outside'
                },
                data: props.周对比.上周
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
<style></style>