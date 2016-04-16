var Vue      = require('vue');
var HexChart = require('./src/component.js');

new Vue({
  el: 'body',

  components: {
    HexBarChart:       HexChart.HexBarChart,
    HexDoughnutChart:  HexChart.HexDoughnutChart,
    HexLineChart:      HexChart.HexLineChart,
    HexPieChart:       HexChart.HexPieChart,
    HexPolarAreaChart: HexChart.HexPolarAreaChart,
    HexRadarChart:     HexChart.HexRadarChart,
  },
});
