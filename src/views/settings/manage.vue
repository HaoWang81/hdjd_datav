<script setup>

import {ref} from "vue";

const radio = ref({
  radio: 1
})


</script>
<template>
  <el-radio v-model="radio" label="1">生产监控</el-radio>
  <el-radio v-model="radio" label="2">铸铁计划</el-radio>

<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>

<style scoped></style>