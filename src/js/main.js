"use strict"


var app = new Vue( {
    el: '#app',
    data: {
        popup: false,
        pin: "",
        state: {
            pefil: true,
            pin: true,
            tab: 'pessoal'
        },
        log: null,
        sistema: sistema(),
        userSession: userSession(),
        menuLink: menuLink(),
        notificacao: notificacao(),
        menuPerfil: {
            ico: "",
            text: "",
            links: [
                { text: "", link: ``, ico: "" }
            ]
        },
        menuNoti: {
            ico: "",
            text: "Noti",
            count: 0,
            links: [
                { text: "", link: ``, ico: "" }
            ]
        },
        // ...Api().get()
    },
    methods: {
        disabled( path ) { return this.state[path] = !this.state[path]  },
        addBanco() { 
            this.userSession.banco.push( { id:  Date.now(), edit: true } ) 
        } ,
        editBanco( id ) {
            let baco = this.userSession.banco.find( el => el.id === id )
            baco.edit = !baco.edit
        },
        Api,
        editarPin,
        save() { this.Api().post( this._data ) },
        apagaNews( id ) { 
            this.notificacao = this.notificacao.filter( el => el.id != id )
            this.save()
        },
        addNew( mensagem ) {
            this.notificacao.push( {
                id: Date.now(),
                text: mensagem,
                status: true
            } )
            this.save()
        },
        callPopup() { this.popup = !this.popup },
        callPin() { 
            this.state.pin = !this.state.pin 
        },
        tabSet( path ) {
            this.log = path
             this.state.tab = path 
            },
        tabActive( path ) {
            return this.state.tab == path ? 'active' : ''
        }
    },
    
} )

