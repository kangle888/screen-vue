<template>
  <main class="screen-bg">
    <div class="header"></div>

    <div class="left-top">
      <pieEcharts :echartDatas="chargingPile" />
    </div>
    <div class="left-bottom">
      <lineEcharts :echartDatas="processMonitoring" />
    </div>

    <div class="right-top">

    </div>
    <div class="right-center">
      <barEcharts :echartDatas="chargingStatistics" />
    </div>
    <div class="right-bottom">
      <rightBottomSvg :dots="exceptionMonitoring" />
    </div>

    <div class="center">
      <centerSvg />
    </div>
    <div class="bottom">
      <bottomPanel :panelItems="dataAnalysis" />
    </div>
  </main>


</template>

<script setup>
import pieEcharts from '@/components/pie-echarts.vue';
import lineEcharts from '@/components/line-echarts.vue';
import barEcharts from '@/components/bar-echarts.vue';
import rightBottomSvg from '@/components/right-bottom-svg.vue';
import centerSvg from '@/components/center-svg.vue';
import bottomPanel from '@/components/bottom-panel.vue';
import { ref } from 'vue';
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  exceptionMonitoringData

} from '../config/home-data.js';
import { getPowerScreenData } from '@/services/index.js';

// 充电桩饱和比例
const chargingPile = ref(chargingPileData)
const processMonitoring = ref(processMonitoringData)
const chargingStatistics = ref(chargingStatisticsData)
const exceptionMonitoring = ref(exceptionMonitoringData)
const dataAnalysis = ref()

// 发起网络请求拿到首页的数据
getPowerScreenData()
  .then((res) => {
    chargingPile.value = res.data.chargingPile.data
    processMonitoring.value = res.data.processMonitoring.data
    chargingStatistics.value = res.data.chargingStatistics.data
    exceptionMonitoring.value = res.data.exceptionMonitoring.data
    dataAnalysis.value = res.data.dataAnalysis.data
  })



</script>


<style scoped>
.screen-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/images/bg.png);
}

.header {
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;
  background-image: url(../../assets/images/bg_header.svg);
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  height: 56px;

  /* 背景 */
  background-image: url(../..//assets/images/bg_header.svg);
  background-repeat: no-repeat;
}

.left-top {
  /* 定位 */
  position: absolute;
  top: 116px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(../..//assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  bottom: 49px;
  left: 16px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(../..//assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
}

.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;

}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;

  border: 5px solid pink;
}

.bottom {
  position: absolute;
  right: 540px;
  bottom: 49px;
  width: 823px;
  height: 209px;

  background-image: url(../../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
