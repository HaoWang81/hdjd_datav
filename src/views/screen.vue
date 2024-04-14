<script setup>
import '@/assets/css/screen.css'
import { reactive, defineComponent, ref, onMounted, toRefs, onBeforeMount } from 'vue'
import lineChart from '../components/charts/lineChart.vue'
import barChart from '../components/charts/barChart.vue'
import barChart1 from '../components/charts/barChart1.vue'
import headDatav from '../components/datav/head.vue'
import cardDatav from '../components/datav/card.vue'
import tableDatav from '../components/datav/table.vue'
import axios from 'axios'

const screenDefineComponent = defineComponent({
    components: {
        lineChart,
        barChart,
        barChart1,
        headDatav,
        cardDatav,
        tableDatav
    }
})

const cardData = ref({
    "大件数量": "0",
    "大件吨位": "0",
    "小件数量": "0",
    "小件吨位": "0",
    "ngc造型数量": "0",
    "ngc造型吨位": "0",
    "ngc欠缺数量": "0"
})

const 大件数量周对比 = ref({
    本周: [0, 0, 0, 0, 0, 0, 0],
    上周: [0, 0, 0, 0, 0, 0, 0],
    标准: [6, 6, 6, 6, 6, 6, 6]
})

const 小件数量周对比 = ref({
    本周: [0, 0, 0, 0, 0, 0, 0],
    上周: [0, 0, 0, 0, 0, 0, 0],
    标准: [25, 25, 25, 25, 25, 25, 25]
})
const 南高齿造型数量周对比 = ref({
    周一: ['周一', 0, 0, 20],
    周二: ['周二', 0, 0, 20],
    周三: ['周三', 0, 0, 20],
    周四: ['周四', 0, 0, 20],
    周五: ['周五', 0, 0, 20],
    周六: ['周六', 0, 0, 20],
    周日: ['周日', 0, 0, 20],

})

const 南高齿欠缺数量 = ref({
    本周: [0, 0, 0, 0, 0, 0, 0],
    上周: [0, 0, 0, 0, 0, 0, 0]
})

const 计划数据 = ref([])

const optionData1 = ref({
    data: 大件数量周对比,
    title: {
        text: "大件数量每日对比",
        top: 0,
        left: 170
    },
    legend: {
        top: 20,
        align: 'right',
        left: 50
    },
    grid: {
        bottom: '10%'
    }
})
const optionData2 = ref({
    data: 小件数量周对比,
    title: {
        text: "南高齿欠缺数量",
        top: 15,
        left: 210
    },
    legend: {
        top: 10,
        left: 30,
        align: 'right',

    },
    grid: {
        bottom: '5%'
    }
})



var today = new Date();
var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 3);

const year = yesterday.getFullYear(); // 年份
let month = yesterday.getMonth() + 1; // 月份（注意：月份从 0 开始，所以需要加 1）
let day = yesterday.getDate(); // 日
const formattedTime = `${year}-${month}-${day}`;

const childComponent = ref(null);

onMounted(() => {
    fetchData(formattedTime)
    fetchChartHighWeight(formattedTime)
})

const fetchData = async (date_str) => {
    axios.post('/api/screen/card', { date_str: date_str }) // 发送请求，不需要写完整的 URL
        .then(response => {
            cardData.value = response.data
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

const fetchChartHighWeight = async (date_str) => {
    axios.post('/api/screen/chart/highWeight', { date_str: date_str }) // 发送请求，不需要写完整的 URL
        .then(response => {
            大件数量周对比.value = response.data.大件数量周统计
            大件数量周对比.value.标准 = [6, 6, 6, 6, 6, 6, 6]
            小件数量周对比.value = response.data.小件数量周统计
            小件数量周对比.value.标准 = [25, 25, 25, 25, 25, 25, 25]
            南高齿欠缺数量.value = response.data.ngc数量周统计
            南高齿欠缺数量.value.标准 = [20, 20, 20, 20, 20, 20, 20]
            // optionData1.value.data=大件数量周对比
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}


</script>
<template>
    <dv-full-screen-container class="bg">
        <headDatav></headDatav>
        <cardDatav :cardData="cardData"></cardDatav>
        <div style="margin:25px 25px 15px 25px;display: flex;">
            <div style="flex: 0 1 62%;">
                <!-- <dv-border-box-12 style="height: 77vh;" > -->
                <div style="display: flex;height: 35vh;">
                    <lineChart :optionData="optionData1" :周对比="大件数量周对比" ref="childComponent"></lineChart>
                    <barChart :周对比="小件数量周对比"></barChart>
                </div>
                <div style="display: flex;">
                    <tableDatav />
                </div>
                <!-- </dv-border-box-12> -->

            </div>
            <div style="flex: 0 1 39%;">
                <!-- <dv-border-box-12 > -->
                <!-- <div style="display: flex"> -->
                <div style="width: 100%;">
                    <barChart1 :周对比="南高齿造型数量周对比"></barChart1>
                </div>
                <div style="width: 100%;">
                    <lineChart :optionData="optionData2" :周对比="南高齿欠缺数量"></lineChart>
                </div>
                <!-- </div> -->

                <!-- </dv-border-box-12> -->
            </div>

        </div>>
    </dv-full-screen-container>
</template>

<style type="text/css"></style>
