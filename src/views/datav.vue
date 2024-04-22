<script setup>
import {ref} from "vue";

const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
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
              <el-menu-item index="1">
                <router-link to="/home">首页</router-link>
              </el-menu-item>
              <el-sub-menu index="2">
                <template #title>大屏分析</template>
                <el-menu-item index="2-1">
                  <router-link to="/screen/tie" class="fullscreen-link">铁件</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <router-link to="/screen/lv" class="fullscreen-link">铝件</router-link>
                </el-menu-item>
                <el-menu-item index="2-3">
                  <router-link to="/datav/screen/lv_monitor">铝件监控</router-link>
                </el-menu-item>
              </el-sub-menu>
              <el-sub-menu index="3">
                <template #title>系统配置</template>
                <el-menu-item index="3-1">
                  <router-link to="/settings/manage">数据刷新</router-link>

                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </div>

      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <div style="color: #ffffff;text-align: center;line-height: 5vh">
          <span><a style="text-decoration: none;color: white"
                   href="http://www.baidu.com">挺好信息科技有限公司</a></span>
          <span> - </span>
          <span>2024年</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  height: 5vh;
  background-color: #535b63;
  padding: 0;
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
}

.el-footer {
  height: 5vh;
  background-color: #535B63FF;

}
</style>
