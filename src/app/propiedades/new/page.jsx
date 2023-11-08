"use client";
import axios from 'axios';
import {useState} from 'react'

function PropiedadesForm(){
  const[propiedades, setPropiedades] = useState({
    nombre:"",
    direccion:"",
    caracteristicas:"",
    estado:"",
    precioalquiler:""
  });
  const handleChange=(e)=>{
    //console.log(e.target.value, e.target.name);
    setPropiedades({
      ...propiedades,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    //console.log(product);
    const res = await axios.post('/api/propiedades', propiedades);
    if (res.status == 200) {
      alert("Ok");
      location.href="/propiedades";
    }else{
        alert("Error en el registro");
    }
  }
  return (
    
    <div className='m-8'>
    <h2 className="text-2xl font-extrabold text-gray-950 py-8">Formulario de Propiedades</h2>
    <form onSubmit={handleSubmit} className="shadow-md rounded-md px-8 pt-6 pb-8 mb-4">        
            <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900">Nombre:</label>
            <input onChange={handleChange} name="nombre" type="text" placeholder='Nombre' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>

            <label htmlFor="direccion" className="block mb-2 mt-5 text-sm font-medium text-gray-900">Dirección:</label>
            <input onChange={handleChange} name="direccion" type="text" placeholder='Direccion' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>

            <label htmlFor="caracteristicas" className="block mb-2 mt-5 text-sm font-medium text-gray-900">Caracteristicas:</label>
            <input onChange={handleChange} name="caracteristicas" type="text" placeholder='Caracteristicas' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>

            <label htmlFor="estado" className="block mb-2 mt-5 text-sm font-medium text-gray-900">Estado:</label>
            <input onChange={handleChange} name="estado" type="text" placeholder='Estado' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
           
            <label htmlFor="precioalquiler" className="block mb-2 mt-5 text-sm font-medium text-gray-900">Precion Alquiler:</label>
            <input onChange={handleChange} name="precioalquiler" type="text" placeholder='00.00' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"/>
            <div>
            <button className='bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded mt-5'>Guardar</button>
            </div>
            
        </form>
        </div>
        
  )
}


export default PropiedadesForm