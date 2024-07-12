<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";
import {useRouter} from 'vue-router';
import QrcodeVue from 'qrcode.vue'
import {Upload} from "@element-plus/icons-vue";
import {ElMessage, ElNotification} from "element-plus";


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

</script>
<template>


  <div style="display:flex;padding:10px">
    <div style="flex: 1 1 1%;width:5px;border-left:5px solid #ccc"></div>
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
    <div style="flex: 1 1 1%;width:5px;border-left:5px solid #ccc"></div>
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

::v-deep .el-card__header {
  padding: 15px 5px !important;
}

</style>