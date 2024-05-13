<script setup>
import '@/assets/css/screen.css'
import {reactive, defineComponent, ref, onMounted} from 'vue'
import onelineChart from '../../components/charts/onelineChart.vue'
import axios from 'axios'

const screenDefineComponent = defineComponent({
  components: {onelineChart}
})


var today = new Date();
var yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const year = yesterday.getFullYear(); // 年份
let month = yesterday.getMonth() + 1; // 月份（注意：月份从 0 开始，所以需要加 1）
let day = yesterday.getDate(); // 日
const formattedTime = `${year}-${month}-${day}`;

const childComponent = ref(null);

const 大件数量对比 = ref({
  title: {
    text: '大件数量对比'
  }
})
const 小件数量对比 = ref({
  title: {
    text: '小件数量对比'
  }
})
const 南高齿造型数量对比 = ref({
  title: {
    text: '南高齿造型数量对比'
  }
})
const 各工段报废统计 = ref({
  title: {
    text: '各工段报废统计'
  }
})
const 南高齿欠数趋势 = ref({
  title: {
    text: '南高齿欠数趋势'
  }
})

onMounted(() => {

})


</script>
<template>

  <dv-full-screen-container class="bg">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
        <onelineChart :optionData="大件数量对比"></onelineChart>

      </el-carousel-item>
    </el-carousel>
    <!--    <div>-->
    <!--      <div class="card">-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            大件吨位(吨)-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            129-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            大件数量(件)-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            412-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="card">-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            小件吨位(吨)-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            412-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            小件数量(件)-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            412-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <div class="card">-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            NGC造型吨位-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            412-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <div class="card_item">-->
    <!--          <div class="card_item_title">-->
    <!--            NGC造型数量-->
    <!--          </div>-->
    <!--          <div class="card_item_num">-->
    <!--            412-->
    <!--          </div>-->
    <!--        </div>-->

    <!--      </div>-->

    <!--    </div>-->
    <!--    <div class="charts">-->
    <!--      <onelineChart :optionData="大件数量对比"></onelineChart>-->
    <!--      <onelineChart :optionData="小件数量对比"></onelineChart>-->
    <!--      <onelineChart :optionData="南高齿造型数量对比"></onelineChart>-->
    <!--      <onelineChart :optionData="各工段报废统计"></onelineChart>-->
    <!--      <onelineChart :optionData="南高齿欠数趋势"></onelineChart>-->
    <!--    </div>-->
  </dv-full-screen-container>
</template>

<style scoped>
.el-carousel__container {
  height: 100vh !important;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  height: 100%;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}


#dv-full-screen-container {
  overflow: auto !important;
}

.card {
  display: flex
}

.card_item {
  flex: 0 1 50%;
  background-color: rgba(1, 57, 114, 0.4);
  margin: 1vh;
  height: 7vh;
  color: #ffffff;
  box-shadow: 1px 1px 1vh #034c6a;

}

.card_item_title {
  height: 50%;
  align-content: end;
  text-align: center;
  font-size: 2vh;
  font-weight: bolder;
}

.card_item_num {
  height: 50%;
  align-content: center;
  text-align: center;
  font-size: 3vh;
  font-weight: bolder;
}
</style>
