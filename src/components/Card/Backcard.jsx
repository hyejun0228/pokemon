import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Backcard.styled';

function Backcard({ pokemonDatas }) {
	const [species, setSpecies] = useState([]);
	useEffect(() => {
		axios.get(pokemonDatas.species.url).then((response) => {
			setSpecies(response.data.flavor_text_entries[1].flavor_text);
		});
	}, [species]);

	return (
		<div>
			<S.BackCardForm>
				<S.PokemonId># {pokemonDatas.id}</S.PokemonId>
				<S.PokemonSkill>[ Skills List ]</S.PokemonSkill>
				{pokemonDatas.abilities.map((PokemonAbilities, index) => (
					<S.PokemonSkill key={index}>
						- {PokemonAbilities.ability.name}
					</S.PokemonSkill>
				))}
				<S.PokemonPicture
					src={pokemonDatas.sprites.back_default}
					alt='Waiting for future updates...'
				></S.PokemonPicture>
				<S.PokemonSpecies>[ Characteristic ]</S.PokemonSpecies>
				<S.PokemonSpecies>{species}</S.PokemonSpecies>
			</S.BackCardForm>
		</div>
	);
}

export default Backcard;
