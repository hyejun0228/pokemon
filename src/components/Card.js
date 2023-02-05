import Backcard from './Backcard';
import Frontcard from './Frontcard';
import React, { useState } from 'react';
import * as S from './Pokemon.styled';

function Card({ pokemoninfo }) {
	const [side, setSide] = useState(true);

	const onClick = () => {
		setSide((p) => !p);
	};

	return (
		<S.WholeCard onClick={onClick}>
			{side ? (
				<Frontcard pokemoninfo={pokemoninfo} />
			) : (
				<Backcard pokemoninfo={pokemoninfo} />
			)}
		</S.WholeCard>
	);
}
export default Card;
