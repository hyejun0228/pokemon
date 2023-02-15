import React, { useContext, useState } from 'react';
import { TypeContext } from './Pokemon';
import * as S from './TypekindButton.styled';

function TypeKindButtons({ pokemonDatas }) {
	const { setType, Type } = useContext(TypeContext);

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
		// pokemonDatas &&
		// 	pokemonDatas.types.forEach((element) => {
		// 		if (element.type.name !== Type) {
		// 			setIsShow(false);
		// 		} else {
		// 			setIsShow(true);
		// 		}
		// 	});
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
