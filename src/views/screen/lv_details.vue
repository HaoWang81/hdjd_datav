<script setup>
import {onMounted, ref} from "vue";
import OnelineChart from "@/components/charts/onelineChart.vue";
import lvBarChart from "@/components/charts/lvBarChart.vue";
import {Aim, CirclePlus, Remove, CollectionTag, Coin} from "@element-plus/icons-vue";
import axios from "axios";

const icon_arr = ref([CirclePlus, Remove, CollectionTag, Coin])

const 一组option = ref({
  title: {
    text: '一组数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})
const 二组option = ref({
  title: {
    text: '二组数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})

const 低压option = ref({
  title: {
    text: '低压数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})

const 金属option = ref({
  title: {
    text: '金属数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})
const divHeight = ref(0);

onMounted(() => {
  // 获取屏幕高度
  const screenHeight = window.innerHeight;
  // 设置div的高度
  divHeight.value = screenHeight + 'px';
  console.log("高度", divHeight)
  fetch_card()
  fetch_chart()
})

const card_data = ref({
  '1组-月生产总吨位': 0,
  '1组-昨日生产总吨位': 0,
  '1组-昨日生产数量': 0,
  '2组-月生产总吨位': 0,
  '2组-昨日生产总吨位': 0,
  '2组-昨日生产数量': 0,
  '低压-月生产总吨位': 0,
  '低压-昨日生产总吨位': 0,
  '低压-昨日生产数量': 0,
  '金属-月生产总吨位': 0,
  '金属-昨日生产总吨位': 0,
  '金属-昨日生产数量': 0,
  '本月大件废率': '0%',
  '本月小件废率': '0%',
  '本月综合废率': '0%',
  '本月合计报废重量': '0（kg）'
})

const fetch_card = () => {
  axios.post('/api/screen/lv_detail/card', {}) // 发送请求，不需要写完整的 URL
      .then(response => {
        card_data.value = response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}
const fetch_chart = () => {
  axios.post('/api/screen/lv_detail/queryChart', {}) // 发送请求，不需要写完整的 URL
      .then(response => {
        card_data.value = response.data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
}
</script>
<template>
  <dv-full-screen-container class="bg" :style="{height: '${divHeight}'}">
    <div style="display: flex;margin-top: 1%">
      <dv-decoration-8 style="width:300px;height:50px;flex: 0 1 30%"/>
      <div style="flex:0 1 40%;text-align: center">
        <div style="width: 100%;font-size: 2rem;font-weight: bolder;color: #ffffff">
          宏德机电铝件生产监控
        </div>
        <dv-decoration-5 style="width:100%;height:40px;"/>
      </div>
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;flex: 0 1 30%"/>
    </div>
    <div style="display: flex;height: 8%;margin-top: 1%;padding: 1% 0%;;background-color:rgb(27 130 199 / 10%) ; ">
      <div
          :style="{flex: '0 1 100%',textAlign:'center',color:' #ffffff',borderRight: item_index===3?'none':'3px solid #458ca8'}"
          v-for="(item,item_index) in ['1组','2组','低压','金属']">
        <div style="font-size: 1.5rem;font-weight: bolder;">
          {{ item }}
        </div>
        <div style="display: flex;margin-top: 1%">
          <div v-for="(group,index) in ['月生产总吨位','昨日生产总吨位','昨日生产数量']" style="flex: 1;">
            <div style="font-size: 1.2rem;font-weight: bolder">
              {{ group }}
            </div>
            <div style="font-size: 2rem;margin-top: 5%">{{ card_data[item + '-' + group] }}</div>
          </div>

        </div>
      </div>
    </div>
    <dv-decoration-10 style="width:100%;height:5px;"/>

    <div style="height: 52%;margin-top: 1%">
      <div style="display: flex;height: 50%">
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <onelineChart :optionData="一组option"></onelineChart>
        </dv-border-box-1>
        <dv-border-box-1 style="flex: 0 1 50%">
          <!--          <onelineChart :optionData="二组option"></onelineChart>-->
          <lvBarChart :optionData="二组option"></lvBarChart>
        </dv-border-box-1>
      </div>
      <div style="display: flex;height: 50%">
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <onelineChart :optionData="低压option"></onelineChart>
        </dv-border-box-1>
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <onelineChart :optionData="金属option"></onelineChart>
        </dv-border-box-1>
      </div>
    </div>

    <div style="display: flex;margin-top: 1%;height: 10%">
      <div v-for="(item,index) in  ['本月大件废率','本月小件废率','本月综合废率','本月合计报废重量']"
           style="padding: 1% ;flex: 0 1 100%;">
        <div
            style="height: 100%;text-align: center;color: #ffffff;font-size: 1.5rem;display: flex;align-items: center">
          <div style="flex: 0 1 30%;text-align: left">
            <el-icon size="100" :color="index==0?'yellow':(index===2?'red':(index===3?'green':'#1d55cf'))">
              <!--    {{icon_arr[index]}}-->
              <!--              <Aim/>-->
              <component :is="icon_arr[index]"></component>
            </el-icon>
          </div>
          <div style="flex: 0 1 30%">
            {{ item }}
          </div>
          <div style="flex: 0 1 30%;font-size: 2.5rem">
            {{ card_data[item] }}
          </div>
        </div>
      </div>
    </div>
  </dv-full-screen-container>
</template>
<style scoped>
.bg {
  background: rgba(255, 255, 255, 0.5) url('@/assets/images/img.png') no-repeat center center;
  background-size: cover;
}

</style>