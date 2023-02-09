import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
function Grass({ pokemoninfo }) {
	const [pokemon, setPokemon] = useState([]);
	const [GrassType, setGrassType] = useState([]);

	useEffect(() => {
		for (let i = 1; i < 1009; i++) {
			axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
				setPokemon((p) => [...p, res.data]);
			});
		}
		console.log(pokemon);
		let Grass = pokemon.types.filter((data) => data.type.name === 'grass');
		setGrassType(Grass);
	}, []);
	//console.log(res.data.types[0].type.name);
	//console.log(res.data.types[1].type.name);
	// console.log(res.data.types[2].type.name);

	// if (res.data.types[0].type.name === 'grass') {
	// 	setGrassType((p) => [...p, res.data]);
	// } else {
	// 	return false;
	// }
	// if (res.data.types[1].type.name === 'grass') {
	// 	setGrassType((p) => [...p, res.data]);
	// } else {
	// 	return false;
	// }
	// if (res.data.types[2].type.name === 'grass') {
	// 	setGrassType((p) => [...p, res.data]);
	// } else {
	// 	return false;
	// }

	//

	//console.log(GrassType);

	return (
		<div>
			<div>안뇽안뇽</div>
		</div>
	);
}

export default Grass;
//
// });
//여기다가 포켓몬 정보가지고와서 분류하는거 만들고
// 분류한 useState의 value를 가지고 가서 카드를 만들게 할 꺼임
