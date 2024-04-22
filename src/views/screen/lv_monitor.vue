<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";

const columns = ["今日造型", "本周造型", "打磨", "热处理", "精修", "毛坯在制", "毛坯成品", "今日加工", "本周加工", "加工在制", "今日清理", "本周清理", "清理在制"];
// 默认选中的项目
const defaultCheckedItems = ["本周造型", "本周加工", '本周清理'];

const checkList = ref(defaultCheckedItems)

const isMobile = ref(false)

const data = ref([])
const tableData = ref([])

onMounted(() => {
  const userAgent = navigator.userAgent.toLowerCase();
  fetchData()
  // 检测是否包含移动设备的关键词
  if (userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) {
    isMobile.value = true;
    checkList.value = ["本周造型", "本周加工", '本周清理']
    tableData.value = data.value
  } else {
    checkList.value = ["今日造型", "本周造型", "打磨", "热处理", "精修", "毛坯在制", "毛坯成品", "今日加工", "本周加工", "加工在制", "今日清理", "本周清理", "清理在制"];
    let index = 0;
    setInterval(() => {
      const newData = [];
      const endIndex = index + 15;
      // 从 data 中取出 5 条记录
      for (let i = index; i < endIndex; i++) {
        if (i >= data.value.length) { // 如果超出了数组的长度，则从头开始取
          index = 0;
          break;
        }
        newData.push(data.value[i]);
        tableData.value = newData
        index++;
      }

    }, 5000);
  }
});

const fetchData = () => {
  axios.post("/api/screen/lv_monitor/").then((response) => {
    data.value = response.data
  })
}

</script>
<template>
  <div class="lv_monitor_container">
    <div class="lv_monitor_head">
      <dv-decoration-11 style="height: 100%;width: 100%">
        <span style="font-size: 100%;font-weight: bolder;color: white">
         铸铝生产监控大屏
        </span>
      </dv-decoration-11>
    </div>
    <div class="lv_monitor_content">

      <el-select v-show="isMobile"
                 v-model="checkList"
                 multiple
                 placeholder="Select"
                 style="width: 100%"
      >
        <el-option
            v-for="item in columns"
            :key="item"
            :label="item"
            :value="item"
        />
      </el-select>
      <div class="table-container">
        <table>
          <thead>
          <tr>
            <th>厂号</th>
            <th v-show="checkList.includes('今日造型')">今日造型</th>
            <th v-show="checkList.includes('本周造型')">本周造型</th>
            <th v-show="checkList.includes('打磨')">打磨</th>
            <th v-show="checkList.includes('热处理')">热处理</th>
            <th v-show="checkList.includes('精修')">精修</th>
            <th v-show="checkList.includes('毛坯在制')">毛坯在制</th>
            <th v-show="checkList.includes('毛坯成品')">毛坯成品</th>
            <th v-show="checkList.includes('今日加工')">今日加工</th>
            <th v-show="checkList.includes('本周加工')">本周加工</th>
            <th v-show="checkList.includes('加工在制')">加工在制</th>
            <th v-show="checkList.includes('今日清理')">今日清理</th>
            <th v-show="checkList.includes('本周清理')">本周清理</th>
            <th v-show="checkList.includes('清理在制')">清理在制</th>
          </tr>
          </thead>
          <tbody>
          <!-- 表体行 -->
          <tr v-for="(item,index) in (isMobile?data:tableData)"
              :key="index">
            <td>{{ item[0] }}</td>
            <td v-show=" checkList.includes('今日造型')" :class="{'red-text':item[1]<0}">{{ item[1] }}</td>
            <td v-show=" checkList.includes('本周造型')" :class="{'red-text':item[2]<0}">{{ item[2] }}</td>
            <td v-show=" checkList.includes('打磨')" :class="{'red-text':item[3]<0}">{{ item[3] }}</td>
            <td v-show=" checkList.includes('热处理')" :class="{'red-text':item[4]<0}">{{ item[4] }}</td>
            <td v-show=" checkList.includes('精修')" :class="{'red-text':item[0]<0}">{{ item[5] }}</td>
            <td v-show=" checkList.includes('毛坯在制')" :class="{'red-text':item[6]<0}">{{ item[6] }}</td>
            <td v-show=" checkList.includes('毛坯成品')" :class="{'red-text':item[7]<0}">{{ item[7] }}</td>
            <td v-show=" checkList.includes('今日加工')" :class="{'red-text':item[8]<0}">{{ item[8] }}</td>
            <td v-show=" checkList.includes('本周加工')" :class="{'red-text':item[9]<0}">{{ item[9] }}</td>
            <td v-show=" checkList.includes('加工在制')" :class="{'red-text':item[10]<0}">{{ item[10] }}</td>
            <td v-show=" checkList.includes('今日清理')" :class="{'red-text':item[11]<0}">{{ item[11] }}</td>
            <td v-show=" checkList.includes('本周清理')" :class="{'red-text':item[12]<0}">{{ item[12] }}</td>
            <td v-show=" checkList.includes('清理在制')" :class="{'red-text':item[13]<0}">{{ item[13] }}</td>
          </tr>

          <!-- 更多表体行 -->
          </tbody>
        </table>
      </div>

    </div>

  </div>


</template>
<style scoped>
.red-text {
  color: red;
}

.lv_monitor_head {
  background-color: #030829;
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  height: 8vh;
  padding: 0 20% 0 20%;
}

.lv_monitor_content {
  padding: 2vh 5vw 5vh 5vw;
  background-color: #081832;
  height: 79vh;
  color: #ffffff;
  background-color: #081832;
}

.table-container {
  overflow-y: auto; /* 允许纵向滚动 */
  max-height: 60vh; /* 设置表格容器的最大高度，超过此高度将出现纵向滚动条 */
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset, 10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
  padding: 2vh 2vw 2vh 2vw;
  margin-top: 2vh;
}

/* 固定表头 */
.table-container thead {
  position: sticky;
  top: -20px;
  background-color: #f1f1f1; /* 表头背景色 */
  z-index: 1; /* 确保表头位于内容上方 */
}

/* 表格样式 */
table {
  width: 100%;
  border-collapse: collapse;
  background-color: #081832;
}

th {
  background-color: #081832;
  font-size: 1rem;
}

table, th, td {
  padding: 8px; /* 单元格内边距 */
  text-align: center;
}

/* 第一个 th 以及第一个 td 单元格样式 */
th:first-child, td:first-child {
  /* 样式 */
}


tbody > tr:nth-child(2n) {
  background-color: #072b51;
}


</style>