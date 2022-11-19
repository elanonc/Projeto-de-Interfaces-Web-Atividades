import React from 'react';
import "./LinhaDoTempo.css";
import {Post} from "../Post/Post";

export function LinhaDoTempo() {

  let infoPost = [
    {
      id: 1,
      nomeUsuario: "João",
      texto:"Menino, tá quente demais hoje",
      qtdLikes: 1, 
      comentario: "vdd viu",
      usuarioQueComentou: "vv"
		},
    {
			id: 2,
      nomeUsuario: "Maria",
      texto:"Num aguento mais essa quintura",
      qtdLikes: 2, 
      comentario: "to pa morrer",
      usuarioQueComentou: "gal"
    },
    {
			id: 3,
      nomeUsuario: "Michel",
      texto:"Calor",
      qtdLikes: 28, 
      comentario: "alo donos da bala",
      usuarioQueComentou: "tyler d creator",
      horaDoComentario: "07:40"
    },
    {
			id: 4,
      nomeUsuario: "Mariana",
      texto:"Temperatura",
      qtdLikes: 29, 
      comentario: "arriegua",
      usuarioQueComentou: "yai"
    },
    {
			id: 5,
      nomeUsuario: "KSCERATO",
      texto:"furia",
      qtdLikes: 27, 
      comentario: "dia de furia",
      usuarioQueComentou: "elenonc"
    }
  ]

	return (
  	<div className="linha"> 
			{infoPost.map(({ id, nomeUsuario, texto, qtdLikes, comentario, usuarioQueComentou }) => {
      return (
      	<Post nome={nomeUsuario} texto={texto} qtdLikes={qtdLikes} comentario={comentario} usuario={usuarioQueComentou}
        />
      );
    })}
    </div>
  )
}