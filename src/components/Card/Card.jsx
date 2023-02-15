import React, { useEffect, useState, useContext } from 'react';
import { TypeContext } from '../Pokemon';
import Frontcard from './FrontCard/Frontcard';
import Backcard from './BackCard/Backcard';
import axios from 'axios';

function Card({ pokemoninfo }) {
	const [isFront, setIsFront] = useState(true);
	const [pokemonDatas, setPokemonDatas] = useState(null);
	//const { isShow } = useContext(TypeContext);
	const [isShow, setIsShow] = useState(true);
	const { Type } = useContext(TypeContext);

	useEffect(() => {
		axios.get(`${pokemoninfo.url}`).then((res) => {
			setPokemonDatas(res.data);
		});
	}, [pokemoninfo.url]);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	//pokemonDatas &&
	//pokemonDatas.types.forEach((element) => {
	//		if (element.type.name !== Type) {
	//			console.log(isShow);
	//		setIsShow(false);
	//	} else {
	//		setIsShow(true);
	//	}
	//	});

	return (
		<>
			<div onClick={onClick}>
				{isShow &&
					pokemonDatas &&
					(isFront ? (
						<Frontcard pokemonDatas={pokemonDatas} />
					) : (
						<Backcard pokemonDatas={pokemonDatas} />
					))}
			</div>
		</>
	);
}
export default Card;
