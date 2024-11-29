import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default function FormularioCadastroCliente(props:props) {

    let estiloBotao = `btn waves-effect waves-light col left ${props.tema}`
    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlFor="first_name">Nome</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" />
                        <label htmlFor="last_name">Sobrenome</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input id="telefone" type="text" className="validate" />
                        <label htmlFor="telefone">Telefone</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">E-mail</label>
                    </div>
                </div>
                <div className="">
                    <div className="row">
                        <button className={estiloBotao} onClick={(e: any) => props.seletorView('Clientes', e)}>Salvar
                            <i className="material-icons right">send</i>
                        </button>

                        <a className="col s1 left"> </a>

                        <button className={estiloBotao} >Deletar
                            <i className="material-icons right">clear</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}