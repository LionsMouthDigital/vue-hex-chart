<script>
  import HexChart from './HexChart.vue';

  export default HexChart.extend({
    methods: {
      /**
       * Override `HexChart`'s `getLegend()`.
       *
       * @author Curtis Blackwell
       * @param  {object} chart Chart.js chart.
       * @return {object}       Chart.js legend.
       */
      getLegend(chart) {
        return this.chartData[0].label ? chart.generateLegend() : false;
      }
    },

    ready() {
      this.render();
    },
  });
</script>
