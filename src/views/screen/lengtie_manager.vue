<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";
import {useRouter} from 'vue-router';
import QrcodeVue from 'qrcode.vue'
import {Edit, Upload, Search} from "@element-plus/icons-vue";
import {ElMessage, ElNotification} from "element-plus";
import {transferDate} from "@/assets/js/utils.js";


const router = useRouter();
const goDetail = (item) => {
  router.push("/lengtie_monitor?production_company=" + item)
}

const goLocalDetail = (item) => {
  router.push(item)
}

const upload = () => {
  router.push("/settings/manage")
}
const ngcList = ref([
  {
    "name": "南高齿",
    "url": "/screen/ngc_monitor"
  }
])
const tieList = ref([
  {
    "name": "铁件监控",
    "url": "/screen/tie_monitor"
  }
])
const lvList = ref([
  {
    "name": "铝件监控",
    "url": "/screen/lv_monitor"
  }
])
onMounted(() => {
})
const activeNames = ref(['0'])
const handleChange = (val) => {
  console.log(val)
}

const warning = () => {
  ElNotification({
    title: '通知',
    message: '暂未开放',
    type: 'warning',
    border: true,
  })
}
const value = ref(new Date())
const handleCalendarClick = (data) => {
  let message = "暂无计划"
  if (task.value[transferDate(data)]) {
    message = task.value[transferDate(data)]
  }
  ElNotification.success({
    title: '通知',
    message: message,
    showClose: false,
    duration: 4000
  })
}

const task = ref(
    {
      "2024-07-11": "今日计划。。。2024-07-11",
      "2024-07-15": "今日计划。。。2024-07-15",
      "2024-07-30": "铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点铝件各个车间需盘点"
    }
)
const dateList = ref(['2024-07-11', '2024-07-15', '2024-07-30'])

</script>
<template>
  <div style="width:100%">
    <el-calendar v-model="value" style="width: 100%;" @input="handleCalendarClick">
      <template #date-cell="{data}">
        <div style="display: flex">
          <div style="flex: 1 1 50%;">
            <span>
             {{ data.day.split('-').slice(2).join('-') }}
            </span>
            {{ dateList.includes(data.day) ? '✔️' : '' }}
          </div>
          <!--          <div style="flex: 1 1 50%;">-->
          <!--            <el-button type="primary" size="small" :icon="Edit"/>-->
          <!--            <el-button type="primary" size="small" :icon="Search"/>-->
          <!--          </div>-->
        </div>

      </template>
    </el-calendar>
  </div>


  <div style="display:flex;padding:10px">
    <div style="flex: 1 1 1%;width:5px;border-left:5px solid #409eff"></div>
    <div style="flex: 1 1 99%;font-size: 18px;font-weight: bolder;padding-left: 10px">周报</div>
  </div>
  <el-carousel :autoplay="false" type="card" height="250px" padding="10px">
    <el-carousel-item v-for="item in ['铁件周报','铝件周报','南高齿周报','汇报周报']" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>


  <div style="display:flex;padding:10px;margin-top: 20px">
    <div style="flex: 1 1 1%;width:5px;border-left:5px solid #409eff"></div>
    <div style="flex: 1 1 99%;font-size: 18px;font-weight: bolder;padding-left: 10px">生产监控快速入口</div>
  </div>
  <div class="demo-collapse" style="padding: 10px">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="铁件生产监控" name="1">
        <div class="cards">
          <div class="cards-item" v-for="item in tieList" style="padding: 5px">
            <el-card>
              <template #header>{{ item.name }}</template>
              <QrcodeVue :value="`http://www.laotianshi.top/#${item.url}`"
                         style="height: 50px;width: 50px"></QrcodeVue>
              <template #footer>
                <el-button type="primary" @click="goLocalDetail(item.url)" size="small">进入</el-button>
              </template>
            </el-card>
          </div>
          <div class="cards-item" style="padding: 5px">
            <el-card>
              <template #header>铁建明细监控</template>
              <QrcodeVue value="暂未开放"
                         style="height: 50px;width: 50px"></QrcodeVue>
              <template #footer>
                <el-button type="primary" @click="warning" size="small">进入</el-button>
              </template>
            </el-card>
          </div>
        </div>

      </el-collapse-item>
      <el-collapse-item title="铝件生产监控" name="2">
        <div class="cards">
          <div class="cards-item" v-for="item in lvList" style="padding: 5px">
            <el-card>
              <template #header>{{ item.name }}</template>
              <QrcodeVue :value="`http://www.laotianshi.top/#${item.url}`"
                         style="height: 50px;width: 50px"></QrcodeVue>
              <template #footer>
                <el-button type="primary" @click="goLocalDetail(item.url)" size="small">进入</el-button>
              </template>

            </el-card>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="南高齿生产监控" name="3">
        <div class="cards">
          <div class="cards-item" v-for="item in ngcList" style="padding: 5px">
            <el-card>
              <template #header>{{ item.name }}</template>
              <QrcodeVue :value="`http://www.laotianshi.top/#${item.url}`"
                         style="height: 50px;width: 50px"></QrcodeVue>
              <template #footer>
                <el-button type="primary" @click="goLocalDetail(item.url)" size="small">进入</el-button>
              </template>

            </el-card>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="冷件监控" name="4">
        <div class="cards">
          <div class="cards-item" v-for="item in ['才华','恒发','华达','江石','锦盛','本厂']" style="padding: 5px">
            <el-card>
              <template #header>{{ item }}</template>
              <QrcodeVue :value="`http://www.laotianshi.top/#/lengtie_monitor?production_company=${item}`"
                         style="height: 50px;width: 50px"></QrcodeVue>
              <template #footer>
                <el-button type="primary" @click="goDetail(item)" size="small">进入</el-button>
              </template>

            </el-card>
          </div>
        </div>


      </el-collapse-item>
    </el-collapse>
  </div>


  <div style="display:flex;padding:10px">
    <div style="flex: 1 1 1%;width:5px;border-left:5px solid #409eff"></div>
    <div style="flex: 1 1 99%;font-size: 18px;font-weight: bolder;padding-left: 10px">数据通道</div>
  </div>
  <div style="display:flex;padding:10px">
    <el-button type="primary" @click="upload">
      上传数据
      <el-icon class="el-icon--right">
        <Upload/>
      </el-icon>
    </el-button>
  </div>


</template>
<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.cards-item {
  width: calc((100% - 30px) / 3);
}

.el-card__header {
  padding: 15px 5px !important;
}

:deep(.el-card__header) {
  padding: 15px 5px !important;
}

:deep(.el-calendar-table .el-calendar-day) {
  height: 50px !important;
}

:deep(.el-calendar__body) {
  padding: 12px 20px 15px;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.special-date .el-calendar-day {
  color: #fff;
  background-color: #409eff;
  border-radius: 50%;
}

.is-selected {
  color: #1989fa;
}
</style>