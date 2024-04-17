<script setup>
import {watch, defineProps, watchEffect, ref, nextTick} from 'vue'


const props = defineProps({
  data: Object,
  config: Object
})
// const config=ref(props.config)


watch(props.data, (newValue, oldValue) => {
  props.config.data = newValue
});

</script>

<template>
  <div style="margin: 10px;width: 100%;font-size: 30px;">
    <dv-scroll-board :config="props.config" style="height: 32vh"/>
  </div>
</template>

<style scoped>
.header {
  font-size: large !important;
}
</style>