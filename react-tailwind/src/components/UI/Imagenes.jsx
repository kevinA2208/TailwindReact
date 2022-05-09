import React from 'react'

export const Imagenes = ({clase, id, url}) => {
  return (
    <div>
        <img className={clase} id={id} src={url} alt=""/>
    </div>
  )
}
