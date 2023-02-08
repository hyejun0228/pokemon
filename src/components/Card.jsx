import Backcard from './Backcard';
import Frontcard from './Frontcard';
import React, { useState } from 'react';
import * as S from './Card.styled';

function Card({ pokemoninfo }) {
	const [isFront, setIsFront] = useState(true);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	return (
		<S.WholeCard onClick={onClick}>
			{isFront ? (
				<Frontcard pokemoninfo={pokemoninfo} />
			) : (
				<Backcard pokemoninfo={pokemoninfo} />
			)}
		</S.WholeCard>
	);
}
export default Card;
