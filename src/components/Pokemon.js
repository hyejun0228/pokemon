import axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as S from './Pokemon.styled';

function Pokemon() {
	const [pokemon, setPokemon] = useState([]);
	const [nextPage, setNextPage] = useState(0);

	useEffect(() => {
		for (let i = 1; i < 31; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
				//			getType(i);
			});
		}
	}, []);

	const onClick = () => {
		setNextPage((j) => j + 1);
	};

	// const getType = () => {
	// 	if (pokemon.types[0].type.name === undefined) {
	// 		return <h4>Type : {pokemon.types[0].type.name}</h4>;
	// 	} else {
	// 		return (
	// 			<h4>
	// 				Type : {pokemon.types[0].type.name},{pokemon.types[1].type.name}
	// 			</h4>
	// 		);
	// 	}
	// };

	return (
		<div>
			<S.Title
				src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
				alt='포켓몬사전'
			></S.Title>
			<S.Total>
				{pokemon &&
					pokemon.map((pokemonDatas, index) => (
						<S.CardForm key={index}>
							<S.PokemonId># {pokemonDatas.id}</S.PokemonId>
							<S.CardTitle>{pokemonDatas.name}</S.CardTitle>
							<h3>===============</h3>
							{/* {if(pokemonDatas.types[1].type.name === undefined){
								<h4>Type : {pokemonDatas.types[0].type.name}</h4>
							}else{
								<h4>Type : {pokemonDatas.types[0].type.name},{pokemonDatas.types[1].type.name}</h4>
							}} */}
							<h4>Height : {pokemonDatas.height / 10}m</h4>
							<h4>Weight : {pokemonDatas.weight / 10}kg</h4>
							<S.PokemonPicture
								src={pokemonDatas.sprites.front_default}
								alt='포켓몬 사진'
							></S.PokemonPicture>
						</S.CardForm>
					))}
				<div>
					<h3>-{nextPage}-</h3>
					<button onClick={onClick}>Next Page</button>
				</div>
			</S.Total>
		</div>
	);
}

export default Pokemon;
