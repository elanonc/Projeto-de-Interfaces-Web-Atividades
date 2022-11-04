import React from 'react';
import "./Post.css";

export function Post( { nome, texto, qtdLikes } ) {
  
	return (
    <div className="post">
      <div className="dados">
        <h1 className="nome">{nome}</h1>
			  <p className="texto">{texto}</p>
      </div>
      <div className="likes">
        <h3 className="qtdLikes">{qtdLikes} likes</h3>
        <button className="button">curtir</button>
      </div>
    </div>
  )
}