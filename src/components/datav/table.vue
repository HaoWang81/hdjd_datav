<script setup>
const config = {
    header: ['厂号', '造型', '合箱', '开箱', '打磨', '热处理', '精修', '毛坯检验', '涂装', '加工', '加工检验'],
    data: [
       
    ],
    // index: true,
    columnWidth: [120,65,65,65,65,70,65,80,65,65,100],
    align: ['center'],
    carousel: 'page',
    rowNum: 8,
    headerHeight:40,
    headerBGC: 'rgb(15,34,56,0.8) ',
    oddRowBGC: 'rgb(15,34,56,0.8) ',
    evenRowBGC: 'rgb(54,92,112,0.8) '
}
</script>

<template>
    <div style="margin: 10px;width: 100%;font-size: 30px;">
        <dv-scroll-board :config="config" style="height: 32vh" />
    </div>
</template>

<style scoped>
.header{
    font-size: large !important;
}
</style>