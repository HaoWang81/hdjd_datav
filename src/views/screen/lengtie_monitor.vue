<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";
import {useRoute} from 'vue-router';

const production_company = ref('')

const cardColumns = ['今日欠货总数', '三天后计划总数', "本周计划总数", "本月在手计划总数"]
const cardData = ref([0, 0, 0, 0, 0, 0, 0])
const tableColumns = ['产品名称', '使用产品', '今日欠货', '三天后计划', '本周计划', '本月在手计划', '生产单位']
const tableData = ref([
  ["1#", "NGC285", "-100", "-100", "-100", "-100", "恒发"],
  ["1#", "NGC285", "-100", "-100", "-100", "-100", "恒发"],
  ["1#", "NGC285", "-100", "-100", "-100", "-100", "恒发"],
])
onMounted(() => {
  const route = useRoute();
  production_company.value = route.query.production_company;
  const userAgent = navigator.userAgent.toLowerCase();
  console.log(production_company.value)
  // 检测是否包含移动设备的关键词
  if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
    fetchTableData()
    fetchCardData()
  } else {

  }
});

const fetchTableData = () => {
  axios.post("/api/screen/lengtie_monitor/table/", {
    "production_company": production_company.value
  }).then((response) => {
    tableData.value = response.data
  })
}
const fetchCardData = () => {
  axios.post("/api/screen/lengtie_monitor/card/", {
    "production_company": production_company.value
  }).then((response) => {
    cardData.value = response.data
  })
}

</script>
<template>
  <dv-full-screen-container class="bg">
    <dv-decoration-5 style="width:100%;height:40px;"/>
    <div style="display: flex;width:100%;margin-top: -20px;">
      <div style="flex:1 1 35%">
        <dv-decoration-3 style="width:100px;height:60px;"/>
      </div>
      <div style="flex:1 1 30%">
        <dv-decoration-7 style="width:150px;height:60px;color: #ffffff;font-weight: bolder;font-size: 1.2rem">
          <div style="margin: 0 15px">冷铁监控</div>
        </dv-decoration-7>
      </div>
      <div style="flex:1 1 35%;display:flex;justify-content: flex-end;">
        <dv-decoration-3 style="width:100px;height:60px;"/>
      </div>
    </div>
    <!--const cardColumns = ['今日欠货总数', '三天后计划总数', "本周计划总数", "本月在手计划总数"]-->

    <div style="color: #ffffff;padding:0 10px">
      <div style="background: rgba(160, 190, 219, 0.1);display:flex">
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3); ">
            <div>
              今日欠货总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[0] }}
            </div>
          </div>
        </div>
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3);">
            <div>
              三天后计划总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[1] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="color: #ffffff;padding:0 10px">
      <div style="background: rgba(160, 190, 219, 0.1);display:flex">
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3);">
            <div>
              本周计划总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[2] }}
            </div>
          </div>
        </div>
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3);">
            <div>
              本月在手计划总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[3] }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="color: #ffffff;padding:0 10px">
      <div style="background: rgba(160, 190, 219, 0.1);display:flex">
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3);">
            <div>
              设计产品总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[4] }}
            </div>
          </div>
        </div>
        <div style="flex: 1;padding:5px">
          <div class="card-item" style="background: rgba(160, 190, 219, 0.3);display:block">
            <div>
              使用产品总数
            </div>
            <div style="font-size: 20px">
              {{ cardData[5] }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
        style="height: 55%;align-items: center;color: #ffffff;background: rgba(160, 190, 219, 0.1);margin:10px 10px 0 10px;overflow:auto">
      <table style="width: 100%">
        <thead>
        <th style="height: 50px" v-for="(item,index) in tableColumns" :key="index">{{ item }}</th>
        </thead>
        <tbody>
        <tr style="height: 50px" v-for="(item,index) in tableData" :key="index">
          <td v-for="(item1,index1) in item" :key="index1">{{ item1 }}</td>
        </tr>
        </tbody>
      </table>

    </div>

  </dv-full-screen-container>


</template>
<style scoped>
.bg {
  background: rgba(255, 255, 255, 0.5) url('@/assets/images/img.png') no-repeat center center;
  background-size: cover;
}

.card-item {
  font-size: 15px;
  font-weight: bolder;
  display: block;
  text-align: center;
  padding: 5px 5px;
}

/* 固定表头 */
table thead {
  top: -5px;
  position: sticky;
  background: #3b658d;
  z-index: 1; /* 确保表头位于内容上方 */
}
</style>