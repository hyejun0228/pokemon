import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import * as S from './Pokemon.styled';
import PokemonClass from './PokemonClass';

function Grass() {
	const [pokemon, setPokemon] = useState([]);
	const [GrassPokemon, setGrassPokemon] = useState([]);

	useEffect(() => {
		for (let i = 1; i < 31; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
			});
		}
		pokemon.forEach(())
	
	}, []);

	return (
		<div>
			dfdf
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
export default Grass;

// 	if (
// 		res.data.types[0].type.name ||
// 		res.data.types[1].type.name ||
// 		res.data.types[2].type.name === 'grass'
// 	) {
// 		setGrassPokemon((p) => [...p, res.data]);
// 	}
// });
