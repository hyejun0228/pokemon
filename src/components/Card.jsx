import Backcard from './Backcard';
import Frontcard from './Frontcard';
import React, { useEffect, useState, useContext } from 'react';
import * as S from './Card.styled';
import axios from 'axios';
import { TypeContext } from './Pokemon';

function Card({ pokemoninfo }, { type }) {
	const [isFront, setIsFront] = useState(true);
	const [pokemonDatas, setPokemonDatas] = useState(null);
	const [finalPokemon, setFinalPokemon] = useState(null);
	const { Type } = useContext(TypeContext);

	useEffect(() => {
		axios.get(`${pokemoninfo.url}`).then((res) => {
			setPokemonDatas(res.data);
		});
	}, [pokemoninfo.url]);

	useEffect(() => {
		console.log('card로 type이 전달:' + type);
		console.log(pokemoninfo);
	}, [type, pokemoninfo]);

	// useEffect(() => {
	// 	console.log(pokemonDatas);
	// }, [pokemonDatas]);

	useEffect(() => {
		pokemonDatas &&
			pokemonDatas.types.forEach((element) => {
				if (element.type.name === Type) {
					setFinalPokemon(pokemonDatas);
					console.log('타입에 맞게 저장됨' + finalPokemon);
				}
			});
	}, [finalPokemon, pokemonDatas, Type]);

	useEffect(() => {
		console.log(finalPokemon);
	}, [finalPokemon]);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	return (
		<>
			<S.WholeCard onClick={onClick}>
				{finalPokemon &&
					(isFront ? (
						<Frontcard pokemonDatas={finalPokemon} />
					) : (
						<Backcard pokemonDatas={finalPokemon} />
					))}
			</S.WholeCard>
		</>
	);
}
export default Card;
