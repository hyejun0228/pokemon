import React, { useContext } from 'react';
import { TypeContext } from './Pokemon';
import * as S from './TypekindButton.styled';

function TypeKindButtons() {
	const { setType } = useContext(TypeContext);
	const typesName = [
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
		setType(e.target.innerText);
	};

	// useEffect(() => {
	// 	console.log('타입이 바뀜! : ' + type);
	// }, [type]);

	return (
		<>
			<S.TypesNameList>
				{typesName.map((res) => (
					<S.TypesNameButton onClick={onClick} key={res}>
						{res}
					</S.TypesNameButton>
				))}
			</S.TypesNameList>
		</>
	);
}

export default TypeKindButtons;
