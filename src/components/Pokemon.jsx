import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import Grass from './Grass';
import * as S from './Pokemon.styled';
import PokemonClass from './PokemonClass';
import Pagination from './Pagination';

function Pokemon() {
	const [pokemon, setPokemon] = useState([]);
	const [limit, setLimit] = useState(30);
	const [page, setPage] = useState(1);
	const offset = (page - 1) * limit;

	useEffect(() => {
		for (let i = 1; i < 1009; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
			});
		}
	}, []);
	<Grass pokemoninfo={pokemon} />;

	return (
		<div>
			<S.Title
				src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
				alt='포켓몬사전'
			></S.Title>
			<S.Screen>
				<PokemonClass />
				<label>
					페이지 당 표시할 게시물 수 : &nbsp;
					<select
						type='number'
						value={limit}
						onChange={({ target: { value } }) => setLimit(Number(value))}
					>
						<option value='10'>10</option>
						<option value='12'>12</option>
						<option value='20'>20</option>
						<option value='50'>50</option>
						<option value='100'>100</option>
					</select>
				</label>
				<div>
					{pokemon.slice(offset, offset + limit).map((pokemonDatas, index) => (
						<div key={index}>
							<Card pokemoninfo={pokemonDatas} />
						</div>
					))}
				</div>

				<footer>
					<Pagination
						//Total={pokemon.length}
						limit={limit}
						page={page}
						setPage={setPage}
					/>
				</footer>
			</S.Screen>
		</div>
	);
}

export default Pokemon;

// {/* <S.Total>
// 	{pokemon.slice(offset, offset + limit).map((pokemonDatas, index) => (
// 		<div key={index}>
// 			<Card pokemoninfo={pokemonDatas} />
// 		</div>
// 	))}
// </S.Total> */}

// {
// 	/* <S.Total>
// 					{pokemon.map((pokemonDatas, index) => (
// 						<div key={index}>
// 							<Card pokemoninfo={pokemonDatas} />
// 						</div>
// 					))}
// 				</S.Total> */
// }
