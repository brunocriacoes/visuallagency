"use strict"

Vue.component('my-menu', {
    props: ['link', 'value'],
    template:'<a :href="link" >{{value}}</a>',
})
