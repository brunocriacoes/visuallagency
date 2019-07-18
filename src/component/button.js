"use strict"

Vue.component('btn', {
    props: ['value', 'origen'],
    template:'<button @click="editarPin(value)" >{{value}}</button>',
    methods: {
        editarPin
    },
})
