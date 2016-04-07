<template>
  <div id="app">
    <h1>Hex Chart</h1>
    <p>
      If you wanna show legends, make sure you add some styles for them. Here's a sample that would
      take care of all chart types:
    </p>

<pre><code>&lt;style&gt;
  [class*=-legend] span {
    display:      inline-block;
    height:       10px;
    margin-right: 10px;
    width:        10px;
  }
&lt;/style&gt;
</code></pre>

    <h2>Bar chart</h2>
    <hex-bar-chart
      json='{"labels":["Jan","Feb","Mar","Apr"],"datasets":[{"label":"Jack","fillColor":"rgba(30,122,43, .5)","strokeColor":"rgba(30,122,43, 0)","highlightFill":"rgba(30,122,43, 1","highlightStroke":"rgba(30,122,43, 0)","data":[30,122,43,321]},{"label":"Bill","fillColor":"rgba(231,51,13, .5)","strokeColor":"rgba(231,51,13, 0)","highlightFill":"rgba(231,51,13, 1","highlightStroke":"rgba(231,51,13, 0)","data":[231,51,13,752]},{"label":"Janet","fillColor":"rgba(454,59,785, .5)","strokeColor":"rgba(454,59,785, 0)","highlightFill":"rgba(454,59,785, 1","highlightStroke":"rgba(454,59,785, 0)","data":[454,59,785,56]},{"label":"Erin","fillColor":"rgba(245,201,12, .5)","strokeColor":"rgba(245,201,12, 0)","highlightFill":"rgba(245,201,12, 1","highlightStroke":"rgba(245,201,12, 0)","data":[245,201,12,124]}]}'
    ></hex-bar-chart>

    <h2>Line chart with specified dimensions</h2>
    <hex-line-chart
      :width  = "800"
      :height = "500"
      json    = '{"labels":["Jan","Feb","Mar","Apr"],"datasets":[{"label":"Jack","fillColor":"rgba(30,122,43, .1)","strokeColor":"rgba(30,122,43, .5)","pointColor":"rgba(30,122,43, 1)","pointStrokeColor":"#fff","pointHighlightFill":"#fff","pointHighlightStroke":"rgba(30,122,43, 1)","data":[30,122,43,321]},{"label":"Bill","fillColor":"rgba(231,51,13, .1)","strokeColor":"rgba(231,51,13, .5)","pointColor":"rgba(231,51,13, 1)","pointStrokeColor":"#fff","pointHighlightFill":"#fff","pointHighlightStroke":"rgba(231,51,13, 1)","data":[231,51,13,752]},{"label":"Janet","fillColor":"rgba(454,59,785, .1)","strokeColor":"rgba(454,59,785, .5)","pointColor":"rgba(454,59,785, 1)","pointStrokeColor":"#fff","pointHighlightFill":"#fff","pointHighlightStroke":"rgba(454,59,785, 1)","data":[454,59,785,56]},{"label":"Erin","fillColor":"rgba(245,201,12, .1)","strokeColor":"rgba(245,201,12, .5)","pointColor":"rgba(245,201,12, 1)","pointStrokeColor":"#fff","pointHighlightFill":"#fff","pointHighlightStroke":"rgba(245,201,12, 1)","data":[245,201,12,124]}]}'
    ></hex-line-chart>

    <h2>Pie and doughnut charts</h2>
    <hex-pie-chart
      json='[{"value":516,"color":"rgba(30,122,43, .5)","highlight":"rgba(30,122,43, 1)","label":"Jack"},{"value":1047,"color":"rgba(231,51,13, .5)","highlight":"rgba(231,51,13, 1)","label":"Bill"},{"value":1354,"color":"rgba(454,59,785, .5)","highlight":"rgba(454,59,785, 1)","label":"Janet"},{"value":582,"color":"rgba(245,201,12, .5)","highlight":"rgba(245,201,12, 1)","label":"Erin"}]'
    ></hex-pie-chart>

    <hex-doughnut-chart
      json='[{"value":516,"color":"rgba(30,122,43, .5)","highlight":"rgba(30,122,43, 1)","label":"Jack"},{"value":1047,"color":"rgba(231,51,13, .5)","highlight":"rgba(231,51,13, 1)","label":"Bill"},{"value":1354,"color":"rgba(454,59,785, .5)","highlight":"rgba(454,59,785, 1)","label":"Janet"},{"value":582,"color":"rgba(245,201,12, .5)","highlight":"rgba(245,201,12, 1)","label":"Erin"}]'
    ></hex-doughnut-chart>

    <h2>Polar area chart</h2>
    <hex-polar-area-chart
      json='[{"value":516,"color":"rgba(30,122,43, .5)","highlight":"rgba(30,122,43, 1)","label":"Jack"},{"value":1047,"color":"rgba(231,51,13, .5)","highlight":"rgba(231,51,13, 1)","label":"Bill"},{"value":1354,"color":"rgba(454,59,785, .5)","highlight":"rgba(454,59,785, 1)","label":"Janet"},{"value":582,"color":"rgba(245,201,12, .5)","highlight":"rgba(245,201,12, 1)","label":"Erin"}]'
    ></hex-polar-area-chart>

    <h2>Radar chart</h2>
    <hex-radar-chart
      json='{"labels":["Jan","Feb","Mar","Apr"],"datasets":[{"label":"Jack","fillColor":"rgba(30,122,43, .1)","strokeColor":"rgba(30,122,43, .5)","highlightFill":"#fff","highlightStroke":"rgba(30,122,43, 1)","data":[30,122,43,321]},{"label":"Bill","fillColor":"rgba(231,51,13, .1)","strokeColor":"rgba(231,51,13, .5)","highlightFill":"#fff","highlightStroke":"rgba(231,51,13, 1)","data":[231,51,13,752]},{"label":"Janet","fillColor":"rgba(454,59,785, .1)","strokeColor":"rgba(454,59,785, .5)","highlightFill":"#fff","highlightStroke":"rgba(454,59,785, 1)","data":[454,59,785,56]},{"label":"Erin","fillColor":"rgba(245,201,12, .1)","strokeColor":"rgba(245,201,12, .5)","highlightFill":"#fff","highlightStroke":"rgba(245,201,12, 1)","data":[245,201,12,124]}]}'
    ></hex-radar-chart>
  </div>
</template>

<script>
  import HexBarChart       from './components/HexBarChart.vue';
  import HexDoughnutChart  from './components/HexDoughnutChart.vue';
  import HexLineChart      from './components/HexLineChart.vue';
  import HexPieChart       from './components/HexPieChart.vue';
  import HexPolarAreaChart from './components/HexPolarAreaChart.vue';
  import HexRadarChart     from './components/HexRadarChart.vue';

  export default {
    // TODO Figure out a way to store JSON data in here.
    data() {
      return {
        colors: [
          {
            light: 'rgba(30,122,43, .5)'
          },
        ]
      };
    },

    components: {
      HexBarChart,
      HexDoughnutChart,
      HexLineChart,
      HexPolarAreaChart,
      HexPieChart,
      HexRadarChart,
    }
  }
</script>
