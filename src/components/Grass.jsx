import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Pokemon from './Pokemon';
import * as S from './Pokemon.styled';
import Card from './Card';
import PokemonClass from './PokemonClass';
function Grass() {
	// const [AllPokemon, setAllPokemon] = useState(null);
	// const [getPokemon, setGetPokemon] = useState(null);
	// const [GrassType, setGrassType] = useState(null);

	// useEffect(() => {
	// 	axios
	// 		.get(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0`)
	// 		.then((res) => {
	// 			setAllPokemon(res.data.results);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	AllPokemon &&
	// 		AllPokemon.map((pokemonDatas) =>
	// 			axios.get(`${pokemonDatas.url}`).then((res) => {
	// 				setGetPokemon((p) => [res.data, ...p]);
	// 				console.log(getPokemon);
	// 			})
	// 		);
	// }, [AllPokemon]);

	return (
		<div>
			<div>풀</div>
			{/* <div>
				<img
					src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
					alt='포켓몬사전'
				></img>
			</div>
			<S.GrayScreen>
				<S.PokemonCardViewer>
					<S.Cards>
						{AllPokemon &&
							AllPokemon.map((pokemonDatas, index) => (
								<div key={pokemonDatas.name}>
									<Card pokemoninfo={pokemonDatas} />
								</div>
							))}
					</S.Cards>
					<PokemonClass />
					{/* <S.PageController>
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
					</S.PageController> */}
			{/* </S.PokemonCardViewer>
			</S.GrayScreen> */}{' '}
			{/* */} */
		</div>
	);
}

export default Grass;
//console.log(pokemon);
// let Grass = pokemon.types.filter((data) => data.type.name === 'grass');
// setGrassType(Grass);
