"use strict"
Vue.component( 'icone', {
    props: ['name'],
    template: `<i :class="'fa fa-' + name" aria-hidden="true"></i>`,
} )