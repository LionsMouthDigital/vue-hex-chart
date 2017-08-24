# vue-hex-chart

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# lint all *.js and *.vue files
npm run lint

# run unit tests
npm test
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).


---


## Setting global config
To set your own Chart.js global config, do something like this:

```js
import Vue      from 'vue';
import HexChart from 'vue-hex-chart';
import Chart    from 'chart.js';

const defaults = {
  animation: {
    duration: 750,
    easing: 'easeInOutQuart',
  },
  tooltips: {
    intersect: false,
    mode:      'index',
  },
};

for (var prop in defaults) {
  Chart.defaults.global[prop] = Object.assign(Chart.defaults.global[prop], defaults[prop]);
}
```
