import React from 'react';
import "./LinhaDoTempo.css";
import {Post} from "../Post/Post";

export function LinhaDoTempo() {

  let infoPost = [
    {
      id: 1,
      nomeUsuario: "João",
      texto:"Menino, tá quente demais hoje",
      qtdLikes: 1
		},
    {
			id: 2,
      nomeUsuario: "Maria",
      texto:"Num aguento mais essa quintura",
      qtdLikes: 2
    },
    {
			id: 3,
      nomeUsuario: "Michel",
      texto:"Calor",
      qtdLikes: 28
    },
    {
			id: 4,
      nomeUsuario: "Mariana",
      texto:"Temperatura",
      qtdLikes: 29
    },
    {
			id: 5,
      nomeUsuario: "KSCERATO",
      texto:"furia",
      qtdLikes: 27
    },
    {
			id: 5,
      nomeUsuario: "KSCERATO",
      texto:"furia",
      qtdLikes: 27
    },
    {
			id: 6,
      nomeUsuario: "Marilia",
      texto:"aaaaa",
      qtdLikes: 27
    },
    {
			id: 7,
      nomeUsuario: "Jean",
      texto:"Diz pra mim",
      qtdLikes: 27
    },
    {
			id: 8,
      nomeUsuario: "L7",
      texto:"abre a porta",
      qtdLikes: 27
    }
  ]

	return (
  	<div className="linha"> 
			{infoPost.map(({ id, nomeUsuario, texto, qtdLikes }) => {
      return (
      	<Post nome={nomeUsuario} texto={texto} qtdLikes={qtdLikes} id={id} />
      );
    })}
  	</div>
  )
}