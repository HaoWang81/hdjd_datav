<script setup>
import {onMounted, ref} from "vue";
import lvBarChart from "@/components/charts/lvBarChart.vue";
import {Aim, CirclePlus, Remove, CollectionTag, Coin} from "@element-plus/icons-vue";
import axios from "axios";

const icon_arr = ref([CirclePlus, Remove, CollectionTag, Coin])

const 一组option = ref({
  data: [],
  title: {
    text: '一组数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})
const 二组option = ref({
  data: [],
  title: {
    text: '二组数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})

const 低压option = ref({
  data: [],
  title: {
    text: '低压数量对比',
    textStyle: {
      color: '#ffffff', // 设置字体颜色
      fontSize: 16  // 设置字体大小
    },
  }
})

const 金属option = ref({
  data: [],
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
  '1组-月吨位': 0,
  '1组-日吨位': 0,
  '1组-日数量': 0,
  '2组-月吨位': 0,
  '2组-日吨位': 0,
  '2组-日数量': 0,
  '低压-月吨位': 0,
  '低压-日吨位': 0,
  '低压-日数量': 0,
  '金属-月吨位': 0,
  '金属-日吨位': 0,
  '金属-日数量': 0,
  '月大件废率': '0%',
  '月小件废率': '0%',
  '月综合废率': '0%',
  '月报废重量': '0'
})
const chart_data = ref({})
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
        chart_data.value = response.data
        一组option.value.data = chart_data.value['1'].data
        二组option.value.data = chart_data.value['2'].data
        低压option.value.data = chart_data.value['低压'].data
        金属option.value.data = chart_data.value['金属'].data
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
          宏德铝件生产监控
        </div>
        <dv-decoration-5 style="width:100%;height:80%;"/>
      </div>
      <dv-decoration-8 :reverse="true" style="width:300px;height:50px;flex: 0 1 30%"/>
    </div>
    <div
        style="display: flex;height: 8%;margin-top: 1%;padding: 0.5% 0% 1% 0%;;background-color:rgb(27 130 199 / 10%) ; ">
      <div
          :style="{flex: '0 1 100%',textAlign:'center',color:' #ffffff',borderRight: item_index===3?'none':'3px solid #458ca8'}"
          v-for="(item,item_index) in ['1组','2组','低压','金属']">
        <div style="font-size: 1.5rem;font-weight: bolder;text-shadow:
    0 0 10px #00ff00 /* 绿色发光 */
    /*0 0 20px #ffde00 !* 黄色发光 *!*/
    /*0 0 30px #0000ff, !* 蓝色发光 *!*/
    /*0 0 40px #ff0000; !* 红色发光 *!*/
">
          {{ item }}
        </div>
        <div style="display: flex;margin-top: 1%">
          <div v-for="(group,index) in ['月吨位','日吨位','日数量']" style="flex: 1;">
            <div style="font-size: 1rem;font-weight: bolder">
              {{ group }}
            </div>
            <div style="font-size: 1.5rem;margin-top: 3%">{{ card_data[item + '-' + group] }}</div>
          </div>

        </div>
      </div>
    </div>
    <dv-decoration-10 style="width:100%;height:5px;"/>

    <div style="height: 55vh;margin-top: 2vh">
      <div style="display: flex;height: 50%">
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <lvBarChart :optionData="一组option"></lvBarChart>
        </dv-border-box-1>
        <dv-border-box-1 style="flex: 0 1 50%">
          <lvBarChart :optionData="二组option"></lvBarChart>
        </dv-border-box-1>
      </div>
      <div style="display: flex;height: 50%">
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <lvBarChart :optionData="低压option"></lvBarChart>
        </dv-border-box-1>
        <dv-border-box-1 style="flex: 0 1 50%;height: 100%">
          <lvBarChart :optionData="金属option"></lvBarChart>
        </dv-border-box-1>
      </div>
    </div>

    <div style="display: flex;margin-top: 1%;height: 10vh">
      <div v-for="(item,index) in  ['月大件废率','月小件废率','月综合废率','月报废重量']"
           style="padding: 1% ;flex: 0 1 100%;">
        <div
            style="height: 100%;text-align: center;color: #ffffff;font-size: 1.1rem;display: flex;align-items: center">
          <div style="flex: 0 1 30%;text-align: left">
            <el-icon size="100" :color="index==0?'yellow':(index===2?'red':(index===3?'green':'#1d55cf'))">
              <!--    {{icon_arr[index]}}-->
              <!--              <Aim/>-->
              <component :is="icon_arr[index]"></component>
            </el-icon>
          </div>
          <div style="flex: 0 1 30%">
            {{ item }}{{ index === 3 ? '(kg)' : '' }}
          </div>
          <div style="flex: 0 1 30%;font-size: 2.5vh; text-shadow:
    0 0 10px #00ff00, /* 绿色发光 */
    /*0 0 20px #ffde00, !* 黄色发光 *!*/
    /*0 0 30px #0000ff, !* 蓝色发光 *!*/
    0 0 40px #ff0000; /* 红色发光 */">
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

.origin-glow {
  width: 50px;
  height: 50px;
  background-color: #333;
  border-radius: 50%;
  position: relative;
  animation: pulse 1.5s infinite alternate;
}

.origin-glow::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 10px white;
}

@keyframes pulse {
  from {
    box-shadow: 0 0 0 white;
  }
  to {
    box-shadow: 0 0 20px white;
  }
}
</style>