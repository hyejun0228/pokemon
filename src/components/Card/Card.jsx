import React, { useState, useContext } from 'react';
import { TypeContext } from '../Pokemon';
import Frontcard from './FrontCard/Frontcard';
import Backcard from './BackCard/Backcard';

function Card({ pokemonDatas }) {
	const { Type } = useContext(TypeContext);
	const [isFront, setIsFront] = useState(true);

	const onClick = () => {
		setIsFront((p) => !p);
	};
	console.log(pokemonDatas.name);

	return (
		<div>
			{pokemonDatas?.types?.map((element, index) =>
				element.type.name === Type ? (
					<div onClick={onClick} key={index}>
						{isFront ? (
							<Frontcard pokemonDatas={pokemonDatas} />
						) : (
							<Backcard pokemonDatas={pokemonDatas} />
						)}
					</div>
				) : null
			)}
			{Type === '' ? (
				<div onClick={onClick}>
					{isFront ? (
						<Frontcard pokemonDatas={pokemonDatas} />
					) : (
						<Backcard pokemonDatas={pokemonDatas} />
					)}
				</div>
			) : null}
		</div>
	);
}
export default Card;
