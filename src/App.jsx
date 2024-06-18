import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'


function App() {
  

  return (
    <>
     <div className="h-screen flex items-center justify-center lg:justify-end bg-wave">
      <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4 lg:mr-8">
        <h1 className="text-2xl font-bold mb-4">talento cloud</h1>
<form>
        <div className="mb-4">
          <label htmlFor="pais" className="block mb-2">País</label>
          <select id="pais" className="w-full p-2 rounded bg-gray-700">
            <option>Colombia</option>
            {/* Añade más opciones aquí */}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-2">Nombre de usuario</label>
          <input id="username" type="text" className="w-full p-2 rounded bg-gray-700" placeholder="Ingresa tu nombre de usuario" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Contraseña</label>
          <input id="password" type="password" className="w-full p-2 rounded bg-gray-700" placeholder="Ingresa tu contraseña" />
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded mb-4">Ingresar</button>
        <a href="#" className="block text-center text-sm mb-4">Olvide mi contraseña</a>
        <div className="flex justify-around">
          <button className="bg-white text-blue-600 p-2 rounded-full">
            {/* Icono de Google */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"></svg>
          </button>
          <button className="bg-white text-blue-600 p-2 rounded-full">
            {/* Icono de Windows */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"></svg>
          </button>
        </div>
</form>

        <div className="flex justify-between text-sm mt-4">
          <a href="#">Acerca de</a>
          <a href="#">Ayuda</a>
        </div>
      </div>
    </div>


    </>
  )
}

export default App
