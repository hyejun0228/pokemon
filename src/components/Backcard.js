import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Pokemon.styled';

function Backcard({ pokemoninfo }) {
	const [abilityInfo, setAbilityInfo] = useState({});

	useEffect(() => {
		pokemoninfo.abilities.forEach((info) => {
			axios.get(info.ability.url).then((res) => {
				setAbilityInfo(res);
			});
		});
	}, []);

	return (
		<div>
			<S.CardForm>
				<S.PokemonId># {pokemoninfo.id}</S.PokemonId>

				{pokemoninfo.abilities.map((PokemonAbilities, index) => (
					<div key={index}>{PokemonAbilities.ability.name}</div>
				))}
				{abilityInfo.data.effect_entries.map((PokemonAbilityInfo, index) => (
					<S.AbilitiesInfo key={index}>
						{PokemonAbilityInfo.effect}
					</S.AbilitiesInfo>
				))}
				<S.PokemonPicture
					src={pokemoninfo.sprites.back_default}
					alt='포켓몬 사진'
				></S.PokemonPicture>
			</S.CardForm>
		</div>
	);
}

export default Backcard;
