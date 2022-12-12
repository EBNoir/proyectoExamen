import React from 'react';
import {useMutation, gql} from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const ADD_EVENTO = gql`
    mutation addEvento(
        $titulo: String!
        $descripcion: String!
        $imagen: String!
    ){
        addEvento(input: {titulo: $titulo, descripcion: $descripcion, imagen: $imagen}){
            id
            titulo
            descripcion
            imagen
        }
    }
`

export default function AddEvento(){
    const [addE, {data, loading, error} ] = useMutation(ADD_EVENTO);
    const[formState, SetFormState] = React.useState({
        titulo: String,
        descripcion: String,
        imagen: String
    })
    if(loading) return (<p>cargando...</p>)
    if(error) return (<p>error</p>)
    if(data) return (<p>creado</p>)
    
    return(
        <form onSubmit={e =>{
            e.preventDefault();
            addE({ variables:{
                titulo: formState.titulo,
                descripcion: formState.descripcion,
                imagen: formState.imagen
        }})
        }}>
            <div className='row'>
                <div className='col-6'> TITULO </div>
                <div className='col-6'>
                    <input value = {formState.titulo} onChange={e =>
                        SetFormState({...formState, titulo: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> DESCRIPCION </div>
                <div className='col-6'>
                    <input value = {formState.descripcion} onChange={e =>
                        SetFormState({...formState, descripcion: e.target.value})} type="text"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'> IMAGEN </div>
                <div className='col-6'>
                    <input value = {formState.imagen} onChange={e =>
                        SetFormState({...formState, imagen: e.target.value})} type="text"/>
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