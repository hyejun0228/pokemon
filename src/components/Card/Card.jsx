import React, { useEffect, useState, useContext } from 'react';
import { TypeContext } from '../Pokemon';
import Frontcard from './Frontcard';
import Backcard from './Backcard';
import axios from 'axios';

function Card({ pokemoninfo }, { type }) {
	const [isFront, setIsFront] = useState(true);
	const [pokemonDatas, setPokemonDatas] = useState(null);
	const [showPokemonDatas, setShowPokemonDatas] = useState(null);
	const { Type } = useContext(TypeContext);

	useEffect(() => {
		axios.get(`${pokemoninfo.url}`).then((res) => {
			setPokemonDatas(res.data);
		});
	}, [pokemoninfo.url]);

	// useEffect(() => {
	// 	console.log('card로 type이 전달:' + type);
	// 	console.log(pokemoninfo);
	// }, [type, pokemoninfo]);

	useEffect(() => {
		pokemonDatas &&
			pokemonDatas.types.forEach((element) => {
				if (element.type.name === Type) {
					setShowPokemonDatas(pokemonDatas);
					//console.log('타입에 맞게 저장됨' + showPokemonDatas);
				}
			});
	}, [showPokemonDatas, pokemonDatas, Type]);

	// useEffect(() => {
	// 	console.log(showPokemonDatas);
	// }, [showPokemonDatas]);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	return (
		<>
			<div onClick={onClick}>
				{showPokemonDatas &&
					(isFront ? (
						<Frontcard pokemonDatas={showPokemonDatas} />
					) : (
						<Backcard pokemonDatas={showPokemonDatas} />
					))}
			</div>
		</>
	);
}
export default Card;
