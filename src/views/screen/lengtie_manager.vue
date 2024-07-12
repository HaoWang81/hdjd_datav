<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";
import {useRouter} from 'vue-router';
import QrcodeVue from 'qrcode.vue'
import {Upload} from "@element-plus/icons-vue";


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
const routeList = ref([
  {
    "name": "铁件监控",
    "url": "/screen/tie_monitor"
  }, {
    "name": "铝件监控",
    "url": "/screen/lv_monitor"
  }, {
    "name": "南高齿",
    "url": "/screen/ngc_monitor"
  }
])

onMounted(() => {

})


</script>
<template>
  <el-button type="primary" @click="upload">
    上传数据
    <el-icon class="el-icon--right">
      <Upload/>
    </el-icon>
  </el-button>
  <el-divider content-position="left">铁/铝/南高齿生产监控</el-divider>
  <div class="cards">
    <div class="cards-item" v-for="item in routeList" style="padding: 5px">
      <el-card>
        <template #header>{{ item.name }}</template>
        <QrcodeVue :value="`http://www.laotianshi.top/#${item.url}`"
                   style="height: 50px;width: 50px"></QrcodeVue>
        <template #footer>
          <el-button type="primary" @click="goLocalDetail(item.url)" size="small">查看详情</el-button>
        </template>

      </el-card>
    </div>
  </div>
  <el-divider content-position="left">冷铁监控</el-divider>

  <div class="cards">
    <div class="cards-item" v-for="item in ['才华','恒发','华达','江石','锦盛','本厂']" style="padding: 5px">
      <el-card>
        <template #header>{{ item }}</template>
        <QrcodeVue :value="`http://www.laotianshi.top/#/lengtie_monitor?production_company=${item}`"
                   style="height: 50px;width: 50px"></QrcodeVue>
        <template #footer>
          <el-button type="primary" @click="goDetail(item)" size="small">查看详情</el-button>
        </template>

      </el-card>
    </div>
  </div>

  <!--  <el-divider content-position="left">大屏</el-divider>-->

  <!--  <div class="cards">-->
  <!--    <div class="cards-item" style="padding: 5px">-->
  <!--      <el-card>-->
  <!--        <template #header>{{ item }}</template>-->
  <!--        <QrcodeVue :value="`http://www.laotianshi.top/#/lengtie_monitor?production_company=${item}`"-->
  <!--                   style="height: 50px;width: 50px"></QrcodeVue>-->
  <!--        <template #footer>-->
  <!--          <el-button type="primary" @click="goDetail(item)" size="small">查看详情</el-button>-->
  <!--        </template>-->

  <!--      </el-card>-->
  <!--    </div>-->
  <!--  </div>-->


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
</style>