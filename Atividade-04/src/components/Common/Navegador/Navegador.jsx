import React from 'react';
import './Navegador.css';

export function Navegador() {
  return (
    <div className="page">
      <div>
          <a href="#">
            Logo
          </a>
      </div>

			<button>
				Linha do Tempo
			</button>

			<button>
				Postar
			</button>

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
