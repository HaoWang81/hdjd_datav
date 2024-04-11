<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
const chart = ref()//创建dom引入
console.log(chart)
onMounted(() => {
    var option = {
        title:{
            text:'小件数量每日对比',
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 16  // 设置字体大小
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['昨日', '今日'],
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
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#ffffff', // 设置字体颜色
                        fontSize: 16  // 设置字体大小
                    }
                }
            },
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['NGC-12', 'NGC-1234', 'NGC-44', 'NGC-21', 'NGC-12', 'NGC-22', 'NGC-16'],
                axisLabel: {
                    textStyle: {
                        color: '#ffffff', // 设置字体颜色
                        fontSize: 16  // 设置字体大小
                    }
                }
            }
        ],
        series: [
            {
                name: '昨日',
                type: 'bar',
                label: {
                    show: true,
                    position: 'outside'
                },
                emphasis: {
                    focus: 'series'
                },
                data: [200, 170, 240, 244, 200, 220, 210]
            },
            {
                name: '今日',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'outside'
                },
                // emphasis: {
                //     focus: 'series'
                // },
                data: [320, 302, 341, 374, 390, 450, 420]
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