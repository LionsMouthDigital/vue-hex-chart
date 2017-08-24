<template>
  <div id="app">
    <hex-chart :config="{
      type: 'line',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'bar',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'radar',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'doughnut',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'pie',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'polarArea',
      data: cogs,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'bubble',
      data: scatter,
    }"></hex-chart>

    <hex-chart :config="{
      type: 'scatter',
      data: scatter,
    }"></hex-chart>
  </div>
</template>





<script>
  import Chart from 'chart.js';
  import HexChart from './components/HexChart.vue';

  const defaults = {
    animation: {
      duration: 750,
      easing: 'easeInOutQuart',
    },
    tooltips: {
      intersect: false,
      mode:      'index',
    },
    title: {
      display: true,
      text:    'COGS',
    },
  };

  for (var prop in defaults) {
    Chart.defaults.global[prop] = Object.assign(Chart.defaults.global[prop], defaults[prop]);
  }

  export default {
    name: 'app',

    components: {
      HexChart
    },

    data() {
      return {
        cogs: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label:           'Earrings',
              backgroundColor: 'rgba(255, 99, 132, .3)',
              borderColor:     'rgb(255, 99, 132)',
              data:            [5.5, 10, 5, 2, 20, 30, 45],
            },
            {
              label:           'Pouches',
              backgroundColor: 'rgba(99, 255, 132, .3)',
              borderColor:     'rgb(99, 255, 132)',
              data:            [10, 4, 50, 45, 30, 10, 45],
            },
          ],
        },

        scatter: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label:           'Earrings',
              backgroundColor: 'rgba(255, 99, 132, .3)',
              borderColor:     'rgb(255, 99, 132)',
              data: [
                {
                  x: 5.5,
                  y: 1,
                  r: 10,
                },
                {
                  x: 10,
                  y: 6,
                  r: 8,
                },
                {
                  x: 5,
                  y: 8,
                  r: 13,
                },
                {
                  x: 2,
                  y: 45,
                  r: 33,
                },
                {
                  x: 20,
                  y: 54,
                  r: 14,
                },
                {
                  x: 30,
                  y: 2,
                  r: 43,
                },
                {
                  x: 45,
                  y: 54,
                  r: 45,
                },
              ],
            },
            {
              label:           'Pouches',
              backgroundColor: 'rgba(99, 255, 132, .3)',
              borderColor:     'rgb(99, 255, 132)',
              data: [
                {
                  x: 1,
                  y: 4,
                  r: 40,
                },
                {
                  x: 6,
                  y: 54,
                  r: 35,
                },
                {
                  x: 8,
                  y: 25,
                  r: 7,
                },
                {
                  x: 45,
                  y: 8,
                  r: 9,
                },
                {
                  x: 54,
                  y: 78,
                  r: 10,
                },
                {
                  x: 2,
                  y: 78,
                  r: 15,
                },
                {
                  x: 54,
                  y: 5,
                  r: 24,
                },
              ],
            },
          ],
        }
      };
    },
  }
</script>




<style>
  body {
    margin: 0;
  }

  #app {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2.5vw;
    width: 95vw;
  }

  div {
    position: relative;
    width: 35vw;
  }

  div:nth-child(n+3) {
    margin-top: 100px;
  }
</style>
