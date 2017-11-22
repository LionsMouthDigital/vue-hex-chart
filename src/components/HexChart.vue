<template>
  <div>
    <canvas></canvas>
  </div>
</template>




<script>
  import Chart from 'chart.js';

  export default {
    name: 'HexChart',




    props: {
      // Config to pass along to Chart.js.
      config: {
        type:    Object,
        default: () => {},
      }
    },




    methods: {
      /**
       * Add data to the chart.
       *
       * @author Curtis Blackwell
       * @param  {String} label
       * @param  {Array}  data
       */
      addData(label, data) {
        this.chart.data.labels.push(label);
        data.forEach((datum, i) => this.chart.data.datasets[i].data.push(datum));

        this.chart.update();
      },


      /**
       * Remove data from the chart.
       *
       * @author Curtis Blackwell
       * @param  {Number} index Index of data to remove.
       */
      removeData(index) {
        this.chart.data.labels = this.chart.data.labels.filter((label, i) => {
          return i != index;
        });

        this.chart.data.datasets.forEach((dataset) => {
          dataset.data = dataset.data.filter((datum, i) => {
            return i != index;
          });
        });

        this.chart.update();
      }
    },




    data() {
      return {
        // Chart object. Use this to access the API.
        chart: {},
      };
    },




    mounted() {
      this.chart = new Chart(this.$el.querySelector('canvas').getContext('2d'), this.config);
    },
  };
</script>
