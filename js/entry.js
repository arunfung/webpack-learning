require('./module-one.js');
require('./module-two.js');

import Vue from 'vue';
// import Heading from './components/heading.vue';
Vue.component('Heading',require('./components/heading.vue'))
new Vue({
    el:'#app',
    // components : { Heading }
})
require('../css/style.css');