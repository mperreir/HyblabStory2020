<template>
  <div class="reading-chart">
    <InternalChart
      :width="chartWidth"
      :height="chartHeight"
      :chart-data="chartData"
      :options="chartOptions()"
    />
  </div>
</template>

<script>
import InternalChart from '@/components/InternalChart.js'

export default {
  components: {
    InternalChart
  },
  props: ["chartData"],
  data() {
    return {
      chartWidth: 200,
      chartHeight: 200
    };
  },
  methods: {
    chartOptions() {
      // chart js OPTIONS object. See https://www.chartjs.org/docs/latest/getting-started/usage.html
      return {
        cutoutPercentage: 35,
        legend: {
          display: false
        },
        tooltips: {
          bodyFontSize: 20
        }
      }
    }
  }
}
</script>

<style scoped>
/* .reading-chart {
  position: absolute;
  width: 20%;
  left: 20%;
  top: 20%;
} */
</style>
