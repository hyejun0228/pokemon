import Backcard from './Backcard';
import Frontcard from './Frontcard';
import React, { useEffect, useState } from 'react';
import * as S from './Card.styled';
import axios from 'axios';

function Card({ pokemoninfo }) {
	const [isFront, setIsFront] = useState(true);
	const [pokemonDatas, setPokemonDatas] = useState(null);

	useEffect(() => {
		axios.get(`${pokemoninfo.url}`).then((res) => {
			//console.log(res);
			setPokemonDatas(res.data);
		});
	}, []);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	return (
		<S.WholeCard onClick={onClick}>
			{pokemonDatas &&
				(isFront ? (
					<Frontcard pokemonDatas={pokemonDatas} />
				) : (
					<Backcard pokemonDatas={pokemonDatas} />
				))}
		</S.WholeCard>
	);
}
export default Card;
