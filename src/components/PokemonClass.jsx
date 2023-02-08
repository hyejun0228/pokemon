import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import Grass from './Grass';
import * as S from './Pokemon.styled';

function PokemonClass() {
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

	return (
		<S.ClassList>
			{Class.map((res, index) => (
				<Link to='/Grass'>
					<S.Class key={index}>{res}</S.Class>
				</Link>
			))}
		</S.ClassList>
	);
}

export default PokemonClass;
