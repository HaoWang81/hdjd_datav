<template>


    <dv-full-screen-container class="bg">
        <headDatav></headDatav>
        <cardDatav></cardDatav>
        <div style="margin:25px 25px 15px 25px;display: flex;">
            <div style="flex: 0 1 62%;">
                <!-- <dv-border-box-12 style="height: 77vh;" > -->
                    <div style="display: flex;height: 35vh;">
                        <lineChart :optionData="optionData1"></lineChart>
                        <barChart></barChart>
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
                            <barChart1></barChart1>
                        </div>
                        <div style="width: 100%;">
                            <lineChart  :optionData="optionData2"></lineChart>
                        </div>
                    <!-- </div> -->

                <!-- </dv-border-box-12> -->
            </div>

        </div>>
    </dv-full-screen-container>
</template>

<script setup>
import '@/assets/css/screen.css'
import { reactive, defineComponent,ref } from 'vue'
import lineChart from '../components/charts/lineChart.vue'
import barChart from '../components/charts/barChart.vue'
import barChart1 from '../components/charts/barChart1.vue'
import headDatav from '../components/datav/head.vue'
import cardDatav from '../components/datav/card.vue'
import tableDatav from '../components/datav/table.vue'
const optionData1=ref({
    title:{
        text:"大件数量每日对比"
    }
})
const optionData2=ref({
    title:{
        text:"南高齿欠缺数量"
    }
})
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

</script>
<style type="text/css"></style>
