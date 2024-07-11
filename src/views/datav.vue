<script setup>
import {isMobile} from '@/assets/js/utils.js'

import OnelineChart from "@/components/charts/onelineChart.vue";
import {onMounted, ref} from "vue";
import axios from "axios";


const lvCountOption = ref({
  data: {},
  title: {
    text: "铸铝生产监控访问统计",
    textStyle: {}
  }
})

const ngcCountOption = ref({
  data: [],
  title: {
    text: "南高齿生产监控访问统计",
    textStyle: {}
  }
})

const ngcInnerCountOption = ref({
  data: [],
  title: {
    text: "南高齿内部生产监控访问统计",
    textStyle: {}
  }
})

const tieCountOption = ref({
  data: [],
  title: {
    text: "铸铁生产监控访问统计",
    textStyle: {}
  }
})

const ip = ref({
  ipCount: 0,
  ipDisCount: 0
})

onMounted(() => {
  fetch_lvCount()
  fetch_ngcCount()
  fetch_tieCount()
  fetch_ipCount()
  fetch_ngcInnerCount()
})

const fetch_lvCount = () => {
  axios.post("/api/home/lvCount").then((response) => {
    lvCountOption.value.data = response.data
  })
}

const fetch_ngcCount = () => {
  axios.post("/api/home/ngcCount").then((response) => {
    ngcCountOption.value.data = response.data
  })
}

const fetch_ngcInnerCount = () => {
  axios.post("/api/home/ngcInnerCount").then((response) => {
    ngcInnerCountOption.value.data = response.data
  })
}

const fetch_tieCount = () => {
  axios.post("/api/home/tieCount").then((response) => {
    tieCountOption.value.data = response.data
  })
}
const fetch_ipCount = () => {
  axios.post("/api/home/ipCount").then((response) => {
    const data = response.data
    ip.value.ipCount = data.ipCount
    ip.value.ipDisCount = data.ipDisCount
  })
}


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const resetRoute = (route) => {
  if (isMobile()) {
    return route + "_mb"
  }
  return route
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="head">
          <div class="head-left">
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
            >

              <el-sub-menu index="2">
                <template #title>大屏分析</template>
                <el-menu-item index="2-1">
                  <router-link :to="resetRoute('/screen/tie')" class="fullscreen-link" target='_blank'>
                    铁件工段明细监控
                  </router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link :to="resetRoute('/screen/lv')" class="fullscreen-link" target='_blank'>
                    铝件工段明细监控
                  </router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <a href="http://www.laotianshi.top/ngc_monitor">南高齿铁件生产监控</a>
                </el-menu-item>
                <el-menu-item index="2-4">
                  <router-link to="/screen/lengtie_manager">监控汇总</router-link>
                </el-menu-item>

              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>系统配置</template>
                <el-menu-item index="3-1">
                  <router-link to="/settings/manage">数据刷新</router-link>
                </el-menu-item>
                <el-menu-item index="3-2">
                  <router-link to="/settings/takephoto">扫描识物</router-link>
                </el-menu-item>
                <el-menu-item index="3-3">
                  <router-link to="/report/weekreport">周报</router-link>
                </el-menu-item>
              </el-sub-menu>

              <el-menu-item index="4">
                <router-link to="/dashboard">仪表分析</router-link>
              </el-menu-item>
              <!--              <el-sub-menu index="5">-->
              <!--                <template #title>图表</template>-->
              <!--                <el-menu-item index="5-1">-->
              <!--                  <router-link to="forms">表单</router-link>-->
              <!--                </el-menu-item>-->
              <!--                <el-menu-item index="5-1">-->
              <!--                  <router-link to="charts">图表</router-link>-->
              <!--                </el-menu-item>-->
              <!--              </el-sub-menu>-->
              <!--              <el-sub-menu index="6">-->
              <!--                <template #title>数据</template>-->
              <!--                <el-menu-item index="6-1">-->
              <!--                  <router-link to="datasource/manage">数据源</router-link>-->
              <!--                </el-menu-item>-->
              <!--                <el-menu-item index="6-2">-->
              <!--                  <router-link to="datasource/entity">实体</router-link>-->
              <!--                </el-menu-item>-->
              <!--                <el-menu-item index="6-3">-->
              <!--                  <router-link to="datasource/entity">业务场景</router-link>-->
              <!--                </el-menu-item>-->
              <!--              </el-sub-menu>-->
              <!--              <el-sub-menu index="5">-->
              <!--                <template #title>仪表盘</template>-->
              <!--                <el-menu-item index="4-1">-->
              <!--                  <router-link to="">数据刷新</router-link>-->
              <!--                </el-menu-item>-->
              <!--              </el-sub-menu>-->
            </el-menu>
          </div>
        </div>

      </el-header>
      <el-main>
        <router-view></router-view>
        <router-view>
          <!--          <div class="flex flex-wrap gap-4 cards">-->
          <!--            <el-card shadow="always">-->
          <!--              <div style="display: flex;align-content: center;align-items: center">-->
          <!--                <div style="flex: 0 1 50%">-->
          <!--                  <span style="font-weight: bolder">总人次</span>-->
          <!--                </div>-->
          <!--                <div style="flex: 0 1 50%">-->
          <!--                  <span>{{ ip.ipCount }}</span>-->
          <!--                </div>-->
          <!--              </div>-->

          <!--            </el-card>-->
          <!--            <el-card shadow="always">-->
          <!--              <div style="display: flex">-->
          <!--                <div style="flex: 0 1 50%">-->
          <!--                  <span style="font-weight: bolder">累计人数</span>-->
          <!--                </div>-->
          <!--                <div style="flex: 0 1 50%">-->
          <!--                  <span>{{ ip.ipDisCount }}</span>-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </el-card>-->
          <!--            &lt;!&ndash;    <el-card shadow="always">Never</el-card>&ndash;&gt;-->
          <!--          </div>-->
          <!--          <div style="height: 20%;">-->
          <!--            <onelineChart :optionData="lvCountOption"></onelineChart>-->
          <!--          </div>-->
          <!--          <div style="height: 20%;">-->
          <!--            <onelineChart :optionData="tieCountOption"></onelineChart>-->
          <!--          </div>-->
          <!--          <div style="height: 20%;">-->
          <!--            <onelineChart :optionData="ngcCountOption"></onelineChart>-->
          <!--          </div>-->
          <!--          <div style="height: 20%;">-->
          <!--            <onelineChart :optionData="ngcInnerCountOption"></onelineChart>-->
          <!--          </div>-->
        </router-view>


      </el-main>
      <el-footer>
        <div style="color: #ffffff;text-align: center;line-height: 5vh">
          <!--          <span><a style="text-decoration: none;color: white"-->
          <!--                   href="http://www.baidu.com">挺好信息科技有限公司</a></span>-->
          <!--          <span> - </span>-->
          <span>2024年</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>

.cards {
  display: flex;
}

.el-card {
  flex: 0 1 50%;
  margin: 1% 0%;
  height: 100%;
}

.el-header {
  height: 5vh;
  background-color: #535b63;
  padding: 0;
  width: 100%;
}

.el-menu--horizontal.el-menu {
  border-bottom: unset;
}

.el-menu-item > a {
  text-decoration: none;
  color: white;
}

.head {
  display: flex;
  align-content: center;
  align-items: center;
  height: 100%;
  background-color: #535B63FF;
}

.head-left {
  flex: 0 1 100%;
  height: 100%
}

.head-right {
  flex: 0 1 30%;
  height: 100%;
  align-content: center;
  display: flex;
  align-content: center;
}

.head-right-left {
  height: 100%;
  align-content: center;
  flex: 0 1 50%;
  padding-top: 1%;
  text-align: right;
}

.head-right-right {
  height: 100%;
  align-content: center;
  flex: 0 1 50%;
  text-align: center;
  color: #ffffff;
  font-weight: bolder;
  font-size: 0.5rem;

}

.el-menu {
  height: 100%;
  margin: 0;
}

.el-main {
  height: 90vh;
  width: 100%;
}

.el-footer {
  height: 5vh;
  background-color: #535B63FF;
  width: 100%;
}
</style>
