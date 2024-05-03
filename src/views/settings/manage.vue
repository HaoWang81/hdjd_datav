<script setup>

import {reactive, ref, watch} from "vue";
import {UploadFilled} from '@element-plus/icons-vue'

import axios from "axios";
// import  { UploadInstance } from 'element-plus'

const uploadRef = ref()
const loading = ref(false)
const submitUpload = () => {
  console.log(uploadRef.value)
  uploadRef.value.submit()
}
const radio = ref(1)
let actionUrl = ref("/api/settings/upload?type=" + radio.value)

const radioChange = (newValue) => {
  actionUrl.value = "/api/settings/upload?type=" + newValue.target._value
  console.log(newValue.target._value)
}
const centerDialogVisible = ref(false)

const errMessage = ref("")

const fallback = (e) => {
  console.log(e)
  errMessage.value = e
  centerDialogVisible.value = true
}


</script>
<template>
  <el-form v-loading="loading" :model="form" label-width="auto" style="width: 100%">
    <el-form-item label="数据类型">
      <el-radio-group v-model="radio" :onchange="radioChange">
        <el-radio :value="1">南高齿生产监控</el-radio>
        <el-radio :value="5">南高齿内部生产监控</el-radio>
        <el-radio :value="2">铁件各工段明细</el-radio>
        <el-radio :value="3">铝件计划</el-radio>
        <el-radio :value="4">铁件计划</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="上传" style="text-align: right">
      <el-upload style="width:80%"
                 class="upload-demo"
                 accept="*.xslx"
                 drag
                 :action="actionUrl"
                 multiple
                 :on-success="fallback"
      >
        <el-icon class="el-icon--upload">
          <upload-filled/>
        </el-icon>
        <div class="el-upload__text">
          拖拽至此或者<em>点击上传</em>
        </div>

      </el-upload>
    </el-form-item>
  </el-form>

  <el-dialog v-model="centerDialogVisible" title="上传返回结果" width="500" center>
    <span>
      {{
        errMessage
      }}
    </span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">关闭</el-button>
      </div>
    </template>
  </el-dialog>
</template>


<style scoped></style>