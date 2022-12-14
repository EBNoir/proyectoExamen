import React from 'react';
import {useMutation, gql} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const ADD_EVENTO = gql`
    mutation addEvento(
        $titulo: String!
        $descripcion: String!
        $imagen: String!
        $fecha: String!
        $req: String!
    ){
        addEvento(input: {titulo: $titulo, descripcion: $descripcion, imagen: $imagen, fecha: $fecha, req: $req}){
            id
            titulo
            descripcion
            imagen
            fecha
            req
        }
    }
`

export default function AddEvento(){
    const [addE, {data, loading, error} ] = useMutation(ADD_EVENTO);
    const[formState, SetFormState] = React.useState({
        titulo: String,
        descripcion: String,
        imagen: String,
        fecha: String,
        req: String
    })
    if(loading) return (<p>cargando...</p>)
    if(error) return (<p>Error</p>)
    if(data) return (<p>Creado</p>)
    
    return(
        <form onSubmit={e =>{
            e.preventDefault();
            addE({ variables:{
                titulo: formState.titulo,
                descripcion: formState.descripcion,
                imagen: formState.imagen,
                fecha: formState.fecha,
                req: formState.req
        }})
        }}>              
            <div className='row'>
                <div className='col-6'> Nombre del Evento </div>
                <div className='col-6'>
                    <input value = {formState.titulo} onChange={e =>
                        SetFormState({...formState, titulo: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> Describa el evento </div>
                <div className='col-6'>
                    <input value = {formState.descripcion} onChange={e =>
                        SetFormState({...formState, descripcion: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> Fecha del Evento </div>
                <div className='col-6'>
                    <input value = {formState.fecha} onChange={e =>
                        SetFormState({...formState, fecha: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> Imagen de Locacion del evento </div>
                <div className='col-6'>
                    <input value = {formState.imagen} onChange={e =>
                        SetFormState({...formState, imagen: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> Restricciones y Requerimientos del Evento</div>
                <div className='col-6'>
                    <input value = {formState.req} onChange={e =>
                        SetFormState({...formState, req: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <button className='btn btn-primary' type="submit">agregar</button>
                </div>
            </div>
        </form>
    )
}