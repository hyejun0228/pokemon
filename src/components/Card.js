import Backcard from './Backcard';
import Frontcard from './Frontcard';
import React, { useState } from 'react';

function Card({ pokemoninfo }) {
	const [side, setSide] = useState(true);

	const onClick = () => {
		setSide((p) => !p);
	};

	return (
		<div onClick={onClick}>
			{side ? (
				<Frontcard pokemoninfo={pokemoninfo} />
			) : (
				<Backcard pokemoninfo={pokemoninfo} />
			)}
		</div>
	);
}
export default Card;
