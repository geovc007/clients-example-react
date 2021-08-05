import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2';

function ProductoLista({producto, guardarRecargarProductos}) {

    const eliminarProducto = id =>{
        // Eliminar condicional
        Swal.fire({
            title: 'Estas Seguro?',
            text: 'Un Platillo Eliminado no se puede Recuperar',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then( async (result) => {
            if(result.value){

                // Eliminar
                try
                {
                    const url = `http://localhost:4000/restaurant/${producto.id}`;
                    const resultado = await axios.delete(url);
                    if(resultado.status === 200)
                    {
                        Swal.fire(
                            'Platillo Eliminado!',
                            'El producto se al Eliminado',
                            'success'
                        )
                    }
                    //Recargar
                    guardarRecargarProductos(true);
                }
                catch(error)
                {
                    Swal.fire({
                        type: 'Error!',
                        title: 'Error',
                        text: 'Hubo un error, Vuelva a Intentarlo'
                    })
                }
                
            }
        })
    }

    return(
        <li data-categoria={producto.categoria} className='list-group-item d-flex justify-content-between align-item-center'>
            <p>
                {producto.nombrePlatillo} {' '}
                <span className='font-weight-bold'>${producto.precioPlatillo}</span>
            </p>
            <div>
                <Link to={`/productos/editar/${producto.id}`} className='btn btn-success mr-2'>Editar</Link>
                <button type='button' className='btn btn-danger' onClick={()=> eliminarProducto(producto.id)}>Eliminar &times;</button>
            </div>
        </li>
    );
}

export default ProductoLista;