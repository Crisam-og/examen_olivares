"use client";
import { useState, useEffect } from 'react'
import axios from 'axios'

async function loadPropiedades(){
  try {
    const response = await axios.get('/api/propiedades');
    console.log(response.data); 
    return response.data;
  } catch (error) {
    console.error('Error loading propiedades', error);
    return [];
  }
}

function PropiedadesList() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const fetchPropiedades = async () => {
      const propiedadesData = await loadPropiedades();
      setPropiedades(propiedadesData);
    }
    fetchPropiedades();
  }, []);
  const deletePropiedad = async (propiedadId) => {
    try {
      if (confirm('Estas seguro de eliminar la propiedad?')) {
        const res = await axios.delete(`/api/propiedades/${propiedadId}`);
        if (res.status === 204) {
          // Update the propiedades state after successful deletion
          setPropiedades((prevPropiedades) =>
            prevPropiedades.filter((propiedades) => propiedades.id !== propiedadId)
          );
        }
      }
    } catch (error) {
      console.error('Error deleting propiedad:', error);
    }
  };
  return (
  <> 
    <div className='mt-8'> 
    <a class="block min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Propiedades List
    <a href={"propiedades/new"} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 float-right"> Nuevo Registro</a>
    </h5> 
    </a>
    </div>
    <div className='mt-2'>
    <a class="block min-w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

    <div className='relative overflow-x-auto'>
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th scope="col" class="px-6 py-3"> Options </th>
          <th scope="col" class="px-6 py-3"> ID </th>
          <th scope="col" class="px-6 py-3"> Nombre </th>
          <th scope="col" class="px-6 py-3"> Direccion </th>
          <th scope="col" class="px-6 py-3"> Caracteristicas </th>
          <th scope="col" class="px-6 py-3"> Estado </th>
          <th scope="col" class="px-6 py-3"> Precio Alquiler </th>
        </tr>
      </thead>
      <tbody>
        {propiedades.map((propiedades, index)=>{
        return(
            <tr key={index} className="border-b hover:bg-gray-100">
            <td className="whitespace-nowrap px-6 py-4"> <button
              className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
              onClick={() => deletePropiedad(propiedades.id)}
            >
              Delete
            </button> </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.id } </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.nombre } </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.direccion } </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.caracteristicas } </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.estado } </td>
          <td className='whitespace-nowrap px-6 py-4'> { propiedades.precioalquiler } </td>


        </tr>
        );
        })}
       
      </tbody>
    </table>
    </div>
    </a>
    </div>

    
    </>
  )
}

export default PropiedadesList
