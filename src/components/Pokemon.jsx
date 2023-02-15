import React, { useEffect, useState, createContext, useMemo } from 'react';
import TypeKindButtons from './TypeKindButtons';
import * as S from './Pokemon.styled';
import axios from 'axios';
import Card from './Card/Card';

export const TypeContext = createContext({
	setType: () => {},
	setIsShow: () => {},
});

function Pokemon() {
	const [pokemon, setPokemon] = useState(null);
	const [page, setPage] = useState(1);
	const [offsetNumber, setOffsetNumber] = useState(0);
	const [pokemonDatas, setPokemonDatas] = useState([]);
	//const [isShow, setIsShow] = useState(true);
	const [Type, setType] = useState('');
	const value = useMemo(() => ({ Type, setType }), [Type, setType]);

	useEffect(() => {
		setPokemon(null);
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/?limit=30&offset=${offsetNumber}`)
			.then((res) => {
				setPokemon(res.data.results);
			});
	}, [offsetNumber, page]);

	useEffect(() => {
		setPokemonDatas([]);
		pokemon &&
			pokemon.forEach((pokemonDatas) => {
				axios.get(`${pokemonDatas.url}`).then((res) => {
					setPokemonDatas((p) => [...p, res.data]);
				});
			});
	}, [pokemon]);

	const backTenPage = () => {
		setOffsetNumber((p) => p - 300);
		setPage(page - 10);
	};

	const backOnePage = () => {
		setOffsetNumber((p) => p - 30);
		setPage(page - 1);
	};

	const nextOnePage = () => {
		setOffsetNumber((p) => p + 30);
		setPage(page + 1);
	};

	const nextTenPage = () => {
		setOffsetNumber((p) => p + 300);
		setPage(page + 10);
	};

	return (
		<TypeContext.Provider value={value}>
			<S.Title
				src='https://fontmeme.com/permalink/230201/e358c4eb5918b0425e1a4dbe09b24efc.png'
				alt='포켓몬사전'
			></S.Title>
			<S.GrayScreen>
				<TypeKindButtons />
				<S.PokemonCardsViewer>
					<S.Cards>
						{pokemonDatas &&
							pokemonDatas.map((datas) => (
								<div key={datas.id}>
									<Card pokemonDatas={datas} />
								</div>
							))}
					</S.Cards>
					<S.PageController>
						<S.ControlButton onClick={backTenPage} disabled={page < 11}>
							- 10 PAGE
						</S.ControlButton>
						<S.ControlButton onClick={backOnePage} disabled={page === 1}>
							- 1 PAGE
						</S.ControlButton>
						<S.CountPage> {page} </S.CountPage>
						<S.ControlButton onClick={nextOnePage} disabled={page === 10241}>
							+ 1 PAGE
						</S.ControlButton>
						<S.ControlButton onClick={nextTenPage} disabled={page > 9941}>
							+ 10 PAGE
						</S.ControlButton>
					</S.PageController>
				</S.PokemonCardsViewer>
			</S.GrayScreen>
		</TypeContext.Provider>
	);
}

export default Pokemon;
