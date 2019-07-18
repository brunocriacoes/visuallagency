"use strict"

function menuLink()
{
    return [
        { text: "DASHBOARD", link: "#" },
        { text: "MINHA CARTEIRA", link: "#" },
        { text: "PERFIL", link: "#" }           
    ]
}

function sistema()
{
    return {
        editForm: false,
        pin: '123456'
    }
}

function userSession()
{
    return {
        autenticacao: {
            nome: "brunocriacoes",
            email: "br.rafael@outlook.com"
        },
        perfil: {
            nome: "Bruno",
            sobreNome: "Vieira",
            dataNascimento: "18/09/1987",
            telefone: "(00) 0 0000-0000",
            cpf: "00.000.000-06",
            id: Date.now(),
        }, 
        endereco: {
            logadouro: "Rua das avenidas, nº 0001",
            cidade: "Eldorado",
            estado: "Mexico"
        },
        documentos: {
            rgFrente: "",
            rgVerso: "",
            foto: "",
            comprovanteEnredeco: ""
        },
        rede: {
            twitter: "",
            facebook: "",
            instagram: "",
            linkedin: ""
        },
        banco: [
            {
                id: Date.now(),
                edit: false,
                tipoConta: "",
                banco: "",
                pais: "",
                agencia: "",
                conta: "",
                digito: ""
            }
        ]
    }
}

function notificacao()
{
    return [
        { id: 1, text: "Sou uma notificação", status: true },
        { id: 2, text: "Sou outra notificação 1", status: true },
        { id: 3, text: "Sou outra notificação 2", status: true },
        { id: 4, text: "Sou outra notificação 3", status: false },
    ]
}

function Api()
{
    return {
        get() {
            let chamadaHttp = localStorage.getItem( 'app' ) || '{}'             
            return JSON.parse( chamadaHttp )
        },
        post( data ) {
            let json = this.get()
            json = {...json, ...data }
            localStorage.setItem( 'app', JSON.stringify( json ) )
            console.log( json )
            return true
        }
    }
}

function editarPin(dd) {
    if(dd === "<-") {
        app._data.pin = app._data.pin.substr( 0, app._data.pin.length -1 )
    }else {
        app._data.pin += dd
    }
}
