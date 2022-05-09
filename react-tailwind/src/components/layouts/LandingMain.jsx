import React from 'react'
import { Imagenes } from '../UI/Imagenes'
import perfil from '../../assets/imagenes/perfil.jpg'

export const LandingMain = () => {
  return (
    <div>
        <div id='imagenPerfil'>
            <Imagenes clase="Imagenes" id="perfilImg" src={perfil} />
        </div>

        <hr/>
        <hr/>
        
    </div>
  )
}
