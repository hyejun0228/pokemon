import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import * as S from './Pokemon.styled';
import PokemonClass from './PokemonClass';

function Pokemon() {
	const [pokemon, setPokemon] = useState([]);
	//const [nextPage, setNextPage] = useState(0);

	useEffect(() => {
		for (let i = 1; i < 31; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
			});
		}
	}, []);

	return (
		<div>
			<S.Title
				src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
				alt='포켓몬사전'
			></S.Title>
			<S.Screen>
				<PokemonClass />
				<S.Total>
					{pokemon.map((pokemonDatas, index) => (
						<div key={index}>
							<Card pokemoninfo={pokemonDatas} />
						</div>
					))}
					{/* <div>
					<h3>-{nextPage}-</h3>
					<button onClick={onClick}>Next Page</button>
				</div> */}
				</S.Total>
			</S.Screen>
		</div>
	);
}

export default Pokemon;
