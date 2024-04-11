<script setup>
</script>

<template>
    <div class="card">
        <!-- <dv-border-box-8 style="height: 120px;"  dur='16'> -->
            <div style="display: flex;width: 100%;margin-top: 8px;">
                <div class="item">
                    <div>大件吨位(万吨)</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">603</dv-decoration-9>
                </div>
                <div class="item">
                    <div>大件数量(件)</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">428</dv-decoration-9>
                </div>
                <div class="item">
                    <div>小件吨位(万吨)</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">283</dv-decoration-9>
                </div>
                <div class="item">
                    <div>小件数量(件)</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">1645</dv-decoration-9>
                </div>
                <div class="item">
                    <div>NGC造型数量</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">469</dv-decoration-9>
                </div>
                <div class="item">
                    <div>NGC造型吨位</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">120</dv-decoration-9>
                </div>
                <div class="item">
                    <div>NGC造型欠缺数量</div>
                    <dv-decoration-9 style="width:80px;height: 80px;font-size: 1.2rem;">200</dv-decoration-9>
                </div>
            </div> 
        <!-- </dv-border-box-8> -->
    </div>
</template>
<style scoped>
.card {
    display: flex;
    margin-top: 20px;
    margin-left: 25px;
    margin-right: 25px;
}

.border-box-content {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}

.item {
    padding: 0px;
    height: 100px;
    /* border: 1px solid #ffffff; */
    color: #ffffff;
    font-size: 1.2rem;
    flex: 0 1 100%;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-around;
}
</style>