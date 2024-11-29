import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import ItemGrid from "./itemGrid";
import { Tipo } from "../model/tipo";


type props = {
    tema: string
    seletorView: Function
}

export default function ListaCliente(props:props) {
    
        let estilo = `collection-item active ${props.tema}`
        return (
            <div className="collection">

                <ItemGrid tema={props.tema} nome=' 1' tipo={Tipo.Clientes} id='' seletorView = {props.seletorView}/>
                <ItemGrid tema={props.tema} nome=' 2' tipo={Tipo.Clientes} id='' seletorView = {props.seletorView}/>
                <ItemGrid tema={props.tema} nome=' 3' tipo={Tipo.Clientes} id='' seletorView = {props.seletorView}/>
                <ItemGrid tema={props.tema} nome=' 4' tipo={Tipo.Clientes} id='' seletorView = {props.seletorView}/>
            </div>
        )
}