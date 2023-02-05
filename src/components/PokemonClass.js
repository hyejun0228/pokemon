import React from 'react';
import { Link } from 'react-router-dom';
import Grass from './Grass';
import * as S from './Pokemon.styled';

function PokemonClass() {
	return (
		<div>
			<S.ClassList>
				<Link to='/grass'>
					<S.Class> grass </S.Class>
				</Link>

				<S.Class>fire</S.Class>

				<S.Class>ice</S.Class>

				<S.Class>rock</S.Class>

				<S.Class>electric</S.Class>

				<S.Class>normal</S.Class>

				<S.Class>poison</S.Class>

				<S.Class>bug</S.Class>

				<S.Class>fairy</S.Class>

				<S.Class>ghost</S.Class>

				<S.Class>dragon</S.Class>

				<S.Class>psychic</S.Class>

				<S.Class>fighting</S.Class>

				<S.Class>flying</S.Class>

				<S.Class>ground</S.Class>

				<S.Class>steel</S.Class>

				<S.Class>dark</S.Class>
			</S.ClassList>
		</div>
	);
}

export default PokemonClass;
