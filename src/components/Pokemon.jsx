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
	const [count, setCount] = useState(0);
	const [type, setType] = useState([]);
	const offset = (page - 1) * limit;

	useEffect(() => {
		for (let i = 1; i < 1009; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
			});
		}
		axios.get(`https://pokeapi.co/api/v2/pokemon`).then((res) => {
			setCount(res.data.count);
		});
	}, []);

	return (
		<div>
			<S.Cover>
				<S.Title
					src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
					alt='포켓몬사전'
				></S.Title>
			</S.Cover>
			<S.Screen>
				<PokemonClass />
				<S.Label>
					Number of pokemon cards per page : &nbsp;
					<S.Select
						type='number'
						value={limit}
						onChange={({ target: { value } }) => setLimit(Number(value))}
					>
						<option value='30'>30</option>
						<option value='40'>40</option>
						<option value='60'>60</option>
						<option value='80'>80</option>
						<option value='100'>100</option>
					</S.Select>
				</S.Label>
				<S.Total>
					{pokemon.slice(offset, offset + limit).map((pokemonDatas, index) => (
						<div key={index}>
							<Card pokemoninfo={pokemonDatas} />
						</div>
					))}
					<br />
				</S.Total>
				<S.Page>&lt; -- {page} -- &gt;</S.Page>
				<footer>
					<Pagination
						count={count}
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
