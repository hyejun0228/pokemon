import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Pokemon.styled';

function Backcard({ pokemoninfo }) {
	const [abilityInfo, setAbilityInfo] = useState({});
	const [species, setSpecies] = useState({});
	useEffect(() => {
		pokemoninfo.abilities.forEach((info) => {
			axios.get(info.ability.url).then((res) => {
				setAbilityInfo(res);
			});
		});
	// 	axios.get(pokemoninfo.species.url).then((res) => {
	// 		setSpecies((p) => [...p, res.data]);
	// 	});
	// }, []);=>여기서 포켓몬의 특성을 끌어오고 싶었음
	console.log(species);

	return (
		<div>
			<S.BackCardForm>
				<S.PokemonId># {pokemoninfo.id}</S.PokemonId>
				<S.PokemonSkill>[ Skills List ]</S.PokemonSkill>
				{pokemoninfo.abilities.map((PokemonAbilities, index) => (
					<S.PokemonSkill key={index}>
						- {PokemonAbilities.ability.name}
					</S.PokemonSkill>
				))}
				{/* {abilityInfo.data.effect_entries.map((PokemonAbilityInfo, index) => (
					<S.AbilitiesInfo key={index}>
						{PokemonAbilityInfo.effect}
					</S.AbilitiesInfo>
				))} */}
				<S.PokemonPicture
					src={pokemoninfo.sprites.back_default}
					alt='포켓몬 사진'
				></S.PokemonPicture>
			</S.BackCardForm>
		</div>
	);
}

export default Backcard;
