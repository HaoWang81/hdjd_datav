<script setup>
import '@/assets/css/screen.css'
import {reactive, defineComponent, ref, onMounted} from 'vue'
import lineChart from '../../components/charts/lineChart.vue'
import barChart from '../../components/charts/barChart.vue'
import barChart1 from '../../components/charts/barChart1.vue'
import headDatav from '../../components/datav/head.vue'
import cardDatav from '../../components/datav/card.vue'
import tableDatav from '../../components/datav/table.vue'
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

const tableData = ref({
  table: []
})

const tableConfig = ref({
      header: ['厂号', '造型', '合箱', '开箱', '打磨', '热处理', '精修', '毛坯检验', '涂装', '加工', '加工检验'],
      data: tableData,
      // index: true,
      columnWidth: [130,],
      align: ['center'],
      carousel: 'page',
      rowNum: 8,
      headerHeight: 30,
      waitTime: 10000,
      headerBGC: 'rgb(15,34,56,0.8) ',
      oddRowBGC: 'rgb(15,34,56,0.8) ',
      evenRowBGC: 'rgb(54,92,112,0.8) '
    }
)

const 南高齿欠缺数量 = ref({
  本周: [0, 0, 0, 0, 0, 0, 0],
  上周: [0, 0, 0, 0, 0, 0, 0]
})


const 小件数量option = ref({
  data: 小件数量周对比,
  title: {
    text: "小件数量周对比"
  }
})

const 南高齿造型数量option = ref({
  data: 南高齿造型数量周对比,
  title: {
    text: "南高齿造型数量周对比"
  }

})

const 南高齿欠缺数量Data = ref({
  x: [],
  y: []
})


const optionData1 = ref({
  data: 大件数量周对比,
  title: {
    text: "大件数量每日对比",
    top: 0,
    left: 170
  },
  xAxis: {
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  legend: {
    data: ['本周', '上周', '标准'],
    top: 20,
    align: 'right',
    left: 50
  },
  grid: {
    bottom: '10%'
  }
})
const optionData2 = ref({
  data: 南高齿欠缺数量Data,
  title: {
    text: "南高齿欠缺数量",
    top: 15,
    left: 210
  },
  xAxis: {
    data: 南高齿欠缺数量Data.value.x
  },
  legend: {
    data: ['近7天'],
    top: 10,
    left: 30,
    align: 'right',
  },
  grid: {
    bottom: '10%'
  }
})

var today = new Date();
var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const year = yesterday.getFullYear(); // 年份
let month = yesterday.getMonth() + 1; // 月份（注意：月份从 0 开始，所以需要加 1）
let day = yesterday.getDate(); // 日
const formattedTime = `${year}-${month}-${day}`;

const childComponent = ref(null);

onMounted(() => {
  fetchData(formattedTime)
  fetchChartHighWeight(formattedTime)
  fetchNgcData(formattedTime)

})

const fetchData = async (date_str) => {
  axios.post('/api/screen/card', {date_str: date_str}) // 发送请求，不需要写完整的 URL
      .then(response => {
        cardData.value = response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}

const fetchNgcData = async (date_str) => {
  await axios.post('/api/screen/ngc/chart', {date_str: date_str}) // 发送请求，不需要写完整的 URL
      .then(response => {
        // tableData.value = response.data.table
        // tableData.value.table = [...response.data.table];
        tableConfig.value.data = [...response.data.table];
        南高齿欠缺数量Data.value = response.data.charts

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}

const fetchChartHighWeight = async (date_str) => {
  axios.post('/api/screen/chart/highWeight', {date_str: date_str}) // 发送请求，不需要写完整的 URL
      .then(response => {
        大件数量周对比.value = response.data.大件数量周统计
        大件数量周对比.value.标准 = [6, 6, 6, 6, 6, 6, 6]
        小件数量周对比.value = response.data.小件数量周统计
        小件数量周对比.value.标准 = [25, 25, 25, 25, 25, 25, 25]
        const 南高齿造型数量周对比_temp = response.data.ngc数量周统计
        南高齿造型数量周对比.value.周一 = ['周一', 南高齿造型数量周对比_temp.本周[0], 南高齿造型数量周对比_temp.上周[0], 20]
        南高齿造型数量周对比.value.周二 = ['周二', 南高齿造型数量周对比_temp.本周[1], 南高齿造型数量周对比_temp.上周[1], 20]
        南高齿造型数量周对比.value.周三 = ['周三', 南高齿造型数量周对比_temp.本周[2], 南高齿造型数量周对比_temp.上周[2], 20]
        南高齿造型数量周对比.value.周四 = ['周四', 南高齿造型数量周对比_temp.本周[3], 南高齿造型数量周对比_temp.上周[3], 20]
        南高齿造型数量周对比.value.周五 = ['周五', 南高齿造型数量周对比_temp.本周[4], 南高齿造型数量周对比_temp.上周[4], 20]
        南高齿造型数量周对比.value.周六 = ['周六', 南高齿造型数量周对比_temp.本周[5], 南高齿造型数量周对比_temp.上周[5], 20]
        南高齿造型数量周对比.value.周日 = ['周日', 南高齿造型数量周对比_temp.本周[6], 南高齿造型数量周对比_temp.上周[6], 20]
        // optionData1.value.data=大件数量周对比
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}


</script>
<template>
  <dv-full-screen-container class="bg">
    <h1>sadf</h1>
<!--    <headDatav></headDatav>-->
<!--    <cardDatav :cardData="cardData"></cardDatav>-->
<!--    <div style="margin:25px 25px 15px 25px;display: flex;">-->
<!--      <div style="flex: 0 1 62%;">-->
<!--        <div style="display: flex;height: 35vh;">-->
<!--          <lineChart :optionData="optionData1" :周对比="大件数量周对比" ref="childComponent"></lineChart>-->
<!--          <barChart :option="小件数量option" :周对比="小件数量周对比"></barChart>-->
<!--        </div>-->
<!--        <div style="display: flex;">-->
<!--          <tableDatav :config="tableConfig" :data="tableData"/>-->
<!--        </div>-->

<!--      </div>-->
<!--      <div style="flex: 0 1 39%;">-->
<!--        <div style="width: 100%;">-->
<!--          <barChart1 :option="南高齿造型数量option" :周对比="南高齿造型数量周对比"></barChart1>-->
<!--        </div>-->
<!--        <div style="width: 100%;">-->
<!--          <lineChart :optionData="optionData2" :周对比="南高齿欠缺数量Data"></lineChart>-->
<!--        </div>-->

<!--      </div>-->

<!--    </div>-->
<!--    >-->
  </dv-full-screen-container>
</template>

<style scoped>
.redText {
  color: red;
}
</style>
