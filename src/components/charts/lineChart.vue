<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, defineProps, watch } from 'vue'
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
            data: ['本周', '上周', '标准'],
            textStyle: {
                color: '#ffffff', // 设置字体颜色
                fontSize: 12  // 设置字体大小
            },
            top: props.optionData.legend.top,
            left: props.optionData.legend.left,
            x: 'right',
            align: 'right',
            left: 20,
            orient: "vertical",
        },
        grid: {
            left: '8%',
            // right: '4%',
            bottom: props.optionData.grid.bottom,
            top: '30%',
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
        series: [
            {
                name: '本周',
                type: 'line',
                // stack: 'Total',
                data: props.周对比.本周,
                showSymbol: true, //是否默认展示圆点
                symbol: "circle", // 默认是空心圆（中间是白色的）
                symbolSize: 7,
                label: {
                    show: true,
                    position: 'outside'
                },

            },
            {
                name: '上周',
                type: 'line',
                // stack: 'Total',
                data: props.周对比.上周,
                label: {
                    show: true,
                    position: 'outside'
                },
            }
            ,
            {
                name: '标准',
                type: 'line',
                // stack: 'Total',
                data: props.周对比.标准,
                label: {
                    show: false,
                    position: 'outside'
                },
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
    <div ref="chart" style="width: 100%;height: 35vh;">
    </div>
</template>
<style></style>