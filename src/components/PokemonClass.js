import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Pokemon.styled';

function PokemonClass() {
	return (
		<div>
			<S.ClassList>
				<S.ClassCover>
					<S.Class>grass</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>fire</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>ice</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>rock</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>electric</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>normal</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>grass</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>poison</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>bug</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>fairy</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>ghost</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>dragon</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>psychic</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>fighting</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>flying</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>ground</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>steel</S.Class>
				</S.ClassCover>
				<S.ClassCover>
					<S.Class>dark</S.Class>
				</S.ClassCover>
			</S.ClassList>
		</div>
	);
}

export default PokemonClass;
