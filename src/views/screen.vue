<script setup>
import '@/assets/css/screen.css'
import { reactive } from 'vue'
const config = reactive({
    header: ['列1', '列2', '列3'],
    data: [
        ['行1列1', '行1列2', '行1列3'],
        ['行2列1', '行2列2', '行2列3'],
        ['行3列1', '行3列2', '行3列3'],
        ['行4列1', '行4列2', '行4列3'],
        ['行5列1', '行5列2', '行5列3'],
        ['行6列1', '行6列2', '行6列3'],
        ['行7列1', '行7列2', '行7列3'],
        ['行8列1', '行8列2', '行8列3'],
        ['行9列1', '行9列2', '行9列3'],
        ['行10列1', '行10列2', '行10列3'],
    ],
    index: true,
    columnWidth: [50],
    align: ['center'],
})

const mouseoverHandler = (e) => {
    console.log(e)
}

const clickHandler = (e) => {
    console.log(e)
}
</script>
<template>

    <dv-full-screen-container class="bg screen">
        <div class="header-box">
            <div class="header-left">
                <dv-decoration1 style="width:200px;height:50px;" />
                <dv-decoration8 style="width:300px;height:50px;" />
            </div>

            <div class="header-center">
                <dv-decoration-11 style="width:80%;height:60px;pad">
                    <div class="title" color-green font-600 bg="~ dark/0">
                        宏德机电
                    </div>
                </dv-decoration-11>
                <dv-decoration5 :dur="2" style="width:100%;height:40px;" />
            </div>
            <div class="header-right">
                <dv-decoration8 :reverse="true" style="width:300px;height:50px;" />
                <dv-decoration1 style="width:200px;height:50px;" />
            </div>
        </div>

        <div class="content-box">
            <dv-border-box10>
                <div dv-bg>
                    <div class="layout cards">
                        <div class="card-item">
                            <div>
                                大件数量
                            </div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text">
                                大件吨位
                            </div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text"> 小件数量</div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text">小件吨位</div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text">南高齿数量</div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text">南高齿吨位</div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                        <div class="card-item">
                            <div class="card-item-text">南高齿欠缺数量</div>
                            <div class="card-item-num">
                                100
                            </div>
                        </div>
                    </div>
                </div>
            </dv-border-box10>
            <!-- 6个指标卡 -->

            <div class="layout second">
                <dv-border-box10 style="flex: 0 1 30%;">
                    <div dv-bg>
                        南高齿造型吨位
                    </div>
                </dv-border-box10>
                <dv-border-box10 style="flex: 0 1 30%;">
                    <div dv-bg>
                        南高齿造型吨位
                    </div>
                </dv-border-box10>
                <dv-border-box10 style="flex: 0 1 30%;">
                    <div dv-bg>
                        南高齿造型吨位
                    </div>
                </dv-border-box10>
            </div>
            <div class="layout third">
                <div style="flex: 0 1 60%;">
                    <dv-border-box10
                        style="padding:0;display: flex;height: 400px;text-align: center;align-items: center;">
                        <dv-scroll-board :config="config" style="height:320px;margin: 10px;"
                            @mouseover="mouseoverHandler" @click="clickHandler" />
                    </dv-border-box10>
                </div>
                <dv-border-box10 style="flex: 0 1 30%;">
                    <div dv-bg>
                        南高齿造型吨位
                    </div>
                </dv-border-box10>
            </div>
        </div>
    </dv-full-screen-container>


</template>
<style type="text/css"></style>