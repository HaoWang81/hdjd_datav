<script setup></script>
<template>
    <div class="head_box">
        <div class="left">
            <dv-decoration-8 style="height:50px;width: 100%;" />
        </div>
        <div class="center">
            <dv-decoration-11
                style="height:80px;letter-spacing: 0.5cm;font-size: 1.3rem;font-weight: bolder;color: #ffffff;">
                <div style="padding-left: 12px;">
                    宏德铸铁生产监控
                </div>
            </dv-decoration-11>
            <dv-decoration-5 style="width:100%;height:40px;" dur='8' />
        </div>
        <div class="right">
            <dv-decoration-8 :reverse="true" style="height:50px;" />
        </div>
    </div>
</template>
<style scoped>
.head_box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    /* padding: 15px 20px 15px 20px; */
}

.left {
    flex: 0 1 30%;
    display: flex;
    justify-content: space-between;
}

.left-item1 {
    width: 30%;
}

.left-item2 {
    width: 100%;
}




.right {
    flex: 0 1 30%;
    display: flex;
    /* justify-content: space-between; */
}

.right-item1 {
    width: 70%;
}

.right-item2 {
    width: 30%;
}

.center {
    flex: 0 1 40%;
    padding-top: 10px;
}
</style>