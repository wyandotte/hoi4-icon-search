import Vue from 'vue';

import IconSearch from './components/IconSearch';

window.Vue = Vue;

new Vue({
    el: '#app',

    components: {
        'icon-search': IconSearch
    }
})
