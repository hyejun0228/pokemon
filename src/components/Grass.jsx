import React, { useEffect, useState } from 'react';

function Grass({ pokemoninfo }) {
	const [GrassType, setGrassType] = useState([]);
	useEffect(() => {
		console.log(pokemoninfo);
	}, []);
	return (
		<div>
			<div>안뇽안뇽</div>
		</div>
	);
}

export default Grass;

// 	if (s
// 		res.data.types[0].typse.name ||
// 		res.data.types[1].type.name ||
// 		res.data.types[2].type.name === 'grass'
// 	) {
// 		setGrassPokemon((p) => [...p, res.data]);
// 	}
// });
//여기다가 포켓몬 정보가지고와서 분류하는거 만들고
// 분류한 useState의 value를 가지고 가서 카드를 만들게 할 꺼임
