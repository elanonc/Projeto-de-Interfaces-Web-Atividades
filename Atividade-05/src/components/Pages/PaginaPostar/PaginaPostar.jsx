import React from 'react';
import { Navegador } from '../../Common/Navegador/Navegador';
import { FormPostar } from '../../Common/FormPostar/FormPostar';
import "./PaginaPostar.css";

export function PaginaPostar() {
  return (
    <div className="pagina">
        <Navegador/>
        <FormPostar/>
    </div>
  )
}