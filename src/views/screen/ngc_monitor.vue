<script setup>

import {ref, watch, onMounted} from "vue";
import axios from "axios";

const value = ref('')
const options = [
  {
    value: '造型工段',
    label: '造型工段',
  },
  {
    value: '打磨工段',
    label: '打磨工段',
  },
  {
    value: '油漆工段',
    label: '油漆工段',
  },
  {
    value: '加工工段',
    label: '加工工段',
  },
  {
    value: '毛坯发货',
    label: '毛坯发货',
  },
]


const columns = ["今日浇注", "今日开箱", "今日清砂", "本周造型", "月度造型", "今日打磨", "今日热处理", "今日精修", "今日NDT检验", "本周打磨", "月度打磨", "毛坯在制", "今日油漆", "今日油漆检验", "本周油漆", "月度油漆", "今日加工", "今日加工检验", "本周加工", "月度加工", "加工单位", "加工在制", "毛坯转加工", "本周毛坯转加工", "月度毛坯转加工", "成品库"];
// 默认选中的项目
const defaultCheckedItems = ["本周造型", "本周打磨", "本周加工", '本周毛坯转加工'];

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
    checkList.value = defaultCheckedItems
    tableData.value = data.value
  } else {
    checkList.value = columns;
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
  axios.post("/api/screen/ngc_monitor/").then((response) => {
    data.value = response.data
  })
}

const selectChange = (value) => {
  if (value == '造型工段') {
    checkList.value = ["今日浇注", "今日开箱", "今日清砂", "本周造型", "月度造型"]
  } else if (value == '打磨工段') {
    checkList.value = ["今日打磨", "今日热处理", "今日精修", "今日NDT检验", "本周打磨", "月度打磨", "毛坯在制"]
  } else if (value == '油漆工段') {
    checkList.value = ["今日油漆", "今日油漆检验", "本周油漆", "月度油漆"]
  } else if (value == '加工工段') {
    checkList.value = ["今日加工", "今日加工检验", "本周加工", "月度加工", "加工单位", "加工在制"]
  } else if (value == '毛坯发货') {
    checkList.value = ["毛坯转加工", "本周毛坯转加工", "月度毛坯转加工", "成品库"]
  }
}

</script>
<template>
  <div class="ngc_monitor_container">
    <div class="ngc_monitor_head">
      <dv-decoration-11 style="height: 100%;width: 100%">
        <span style="font-size: 2vh;font-weight: bolder;color: white">
         南高齿生产监控大屏
        </span>
      </dv-decoration-11>
    </div>
    <div class="ngc_monitor_content">

      <el-select v-show="isMobile"
                 placeholder="请选择查看的工段"
                 style="width: 100%"
                 @change="selectChange"
                 v-model="value"
      >
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />

      </el-select>
      <div class="table-container">
        <table>
          <thead>
          <tr>
            <th>厂号</th>
            <th v-show="checkList.includes(item)" v-for="item in columns">{{ item }}</th>
          </tr>
          </thead>
          <tbody>
          <!-- 表体行 -->
          <tr v-for="(item,index) in (isMobile?data:tableData)"
              :key="index">
            <td>{{ item[0] }}</td>
            <td v-for="(column,column_index) in columns" v-show=" checkList.includes(column)"
                :class="{'red-text':item[column_index+1]<0}">{{ item[column_index + 1] }}
            </td>
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

.ngc_monitor_head {
  background-color: #030829;
  text-align: center;
  display: flex;
  align-content: center;
  align-items: center;
  height: 8vh;
  padding: 0 20% 0 20%;
}

.ngc_monitor_content {
  padding: 2vh 5vw 5vh 5vw;
  background-color: #081832;
  height: 85vh;
  color: #ffffff;
  background-color: #081832;
}

.table-container {
  overflow-y: auto; /* 允许纵向滚动 */
  max-height: 80vh; /* 设置表格容器的最大高度，超过此高度将出现纵向滚动条 */
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

tr {
  line-height: 3vh;
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