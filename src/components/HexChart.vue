<style>
  [class*=-legend] span {
    display: inline-block;
    height: 10px;
    margin-right: 10px;
    width: 10px;
  }
</style>


<template>
  <div>
    <canvas
      class  = "chart"
      width  = "{{ dimensions.width }}"
      height = "{{ dimensions.height }}"
      v-el:canvas
    ></canvas>
    <div class="chart-legend" v-el:legend v-show="legend">{{{ legend }}}</div>
  </div>
</template>

<script>
  import Vue   from 'vue';
  import Chart from 'chart.js';

  export default Vue.extend({
    props: {
      json:   String,
      height: Number,
      width:  Number,
    },

    data() {
      return {
        chartData: this.json ? JSON.parse(this.json) : [],
        legend:    {},
      }
    },

    computed: {
      dimensions() {
        return {
          height: this.height || 400,
          width:  this.width  || 600,
        }
      },

      /**
       * Get the chart's type by looking at the tag.
       *
       * @author Curtis Blackwell
       * @return {string}
       */
      chartType() {
        // Split the tag into an array and remove the first and last elements (`hex` and `chart`).
        var tag = this.$options.name.split('-');
        tag.splice(0, 1);
        tag.splice(tag.length - 1, 1)

        // Use Vue's `| capitalize` on each remaining element.
        for (var i = 0; i < tag.length; i++) {
          tag[i] = this.$options.filters.capitalize(tag[i]);
        }

        return tag.join('');
      },
    },

    methods: {
      /**
       * Render the chart.
       *
       * @author Curtis Blackwell
       * @return {void}
       */
      render() {
        const chart = new Chart(
          this.$els.canvas.getContext('2d')
        )[this.chartType](this.chartData);

        this.legend = this.getLegend(chart);
      },

      /**
       * Get the chart's legend.
       *
       * Render the legend separately so child components can override the logic when necessary.
       *
       * @author Curtis Blackwell
       * @param  {object} chart Chart.js chart.
       * @return {object}       Chart.js legend.
       */
      getLegend(chart) {
        return this.chartData.datasets[0].label ? chart.generateLegend() : false;
      }
    },
  });
</script>
