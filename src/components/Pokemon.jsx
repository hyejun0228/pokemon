import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
//import Grass from './Grass';
import * as S from './Pokemon.styled';
import PokemonClass from './PokemonClass';
import Pagination from './Pagination';

function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [page, setPage] = useState(1);
	const [offsetNumber, setOffsetNumber] = useState(0);
	const [limit, setLimit] = useState(30);
	const numPages = Math.ceil(10241 / limit);

	useEffect(() => {
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	}, []);

	useEffect(() => {
		console.log(pokemon);
	}, [pokemon]);

	const backTenButton = () => {
		setOffsetNumber((p) => p - 300);
		setPage(page - 10);

		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	};

	const backButton = () => {
		setOffsetNumber((p) => p - 30);
		setPage(page - 1);

		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	};

	const nextButton = () => {
		setOffsetNumber((p) => p + 30);
		setPage(page + 1);
		console.log('gn');
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	};

	const nextTenButton = () => {
		setOffsetNumber((p) => p + 300);
		setPage(page + 10);
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	};

	return (
		<div>
			<div>
				<S.Title
					src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
					alt='포켓몬사전'
				></S.Title>
			</div>
			<S.GrayScreen>
				<PokemonClass />
				{/* <S.Label>
					Number of pokemon cards per page : &nbsp;
					<S.Select
						type='number'
						value={limitNumber}
						onChange={({ target: { value } }) => setLimitNumber(Number(value))}
					>
						<option value='30'>30</option>
						<option value='40'>40</option>
						<option value='60'>60</option>
						<option value='80'>80</option>
						<option value='100'>100</option>
					</S.Select>
				</S.Label> */}

				<S.PokemonCardViewer>
					<S.Cards>
						{pokemon &&
							pokemon.map((pokemonDatas, index) => (
								<div key={pokemonDatas.name}>
									<Card pokemoninfo={pokemonDatas} />
								</div>
							))}
					</S.Cards>

					<S.PageController>
						<S.Button onClick={backTenButton} disabled={page < 11}>
							- 10 PAGE
						</S.Button>
						<S.Button onClick={backButton} disabled={page === 1}>
							- 1 PAGE
						</S.Button>
						<S.Page> {page} </S.Page>
						<S.Button onClick={nextButton} disabled={page === 10241}>
							+ 1 PAGE
						</S.Button>
						<S.Button onClick={nextTenButton} disabled={page > 9941}>
							+ 10 PAGE
						</S.Button>
					</S.PageController>
				</S.PokemonCardViewer>

				<footer>
					{/* <S.Nav>
						<S.NumberButton
							onClick={() => setPage(page - 1)}
							disabled={page === 1}
						>
							&lt;
						</S.NumberButton>

						{Array(numPages)
							.fill()
							.map((_, i) => (
								<S.NumberButton
									key={i + 1}
									onClick={() => {
										setPage(i + 1);
										setOffsetNumber(page * 30 * i);
									}}
									aria-current={page === i + 1 ? 'page' : null}
								>
									{i + 1}
								</S.NumberButton>
							))}

						<S.NumberButton
							onClick={() => setPage(page + 1)}
							disabled={page === numPages}
						>
							&gt;
						</S.NumberButton>
					</S.Nav> */}
					{/* <Pagination
						//	count={count}
						limit={limit}
						page={page}
						setPage={setPage}
						setOffsetNumber={setOffsetNumber}
					/> */}
				</footer>
			</S.GrayScreen>
		</div>
	);
}

export default Pokemon;
