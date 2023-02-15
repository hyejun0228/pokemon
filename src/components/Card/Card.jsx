import React, { useEffect, useState, useContext } from 'react';
import { TypeContext } from '../Pokemon';
import Frontcard from './FrontCard/Frontcard';
import Backcard from './BackCard/Backcard';

function Card({ pokemonDatas }) {
	const { Type } = useContext(TypeContext);
	const [isFront, setIsFront] = useState(true);

	const onClick = () => {
		setIsFront((p) => !p);
	};

	return (
		<>
			{pokemonDatas?.types?.forEach((element) => {
				if (element.type.name === Type) {
					// console.log(pokemonDatas);
					<div onClick={onClick} key={element.id}>
						{isFront ? (
							<Frontcard pokemonDatas={pokemonDatas} />
						) : (
							<Backcard pokemonDatas={pokemonDatas} />
						)}
					</div>;
				}
			})}
		</>
	);
}
export default Card;
