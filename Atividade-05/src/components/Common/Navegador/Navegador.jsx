import React from 'react';
import './Navegador.css';
import { NavLink } from "react-router-dom";

export function Navegador() {
  return (
    <div className="page">
      <div>
          <a href="#">
            Logo
          </a>
      </div>

		<NavLink className="navbutton" end to="/">Linha do Tempo</NavLink> 

		<NavLink className="navbutton" end to="/postar">Postar</NavLink>
	

		<div>
			<ul>
				<li>
					<a href="#">Elano N. Caitano</a>
				</li>
			</ul>
		</div>

    </div>
  )
}
