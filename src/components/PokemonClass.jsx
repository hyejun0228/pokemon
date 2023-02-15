import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import * as S from './Pokemon.styled';
import { TypeContext } from './Pokemon';

function PokemonClass() {
	//const [type, setType] = useState(true);
	const { setType } = useContext(TypeContext);
	const Class = [
		'grass',
		'fire',
		'ice',
		'rock',
		'electric',
		'normal',
		'posion',
		'bug',
		'fairy',
		'ghost',
		'dragon',
		'psychic',
		'fighting',
		'flying',
		'ground',
		'steel',
		'dark',
	];

	const onClick = (e) => {
		console.log(e.target.innerText);
		setType(e.target.innerText);
	};

	// useEffect(() => {
	// 	console.log('타입이 바뀜! : ' + type);
	// }, [type]);

	return (
		<>
			<S.ClassList>
				{Class.map((res) => (
					// <Link to='/Grass'>
					<S.Class onClick={onClick} key={res}>
						{res}
					</S.Class>
					// </Link>
				))}
			</S.ClassList>
		</>
	);
}

export default PokemonClass;
