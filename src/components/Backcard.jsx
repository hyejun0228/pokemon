import axios from 'axios';
import { useEffect, useState } from 'react';
import * as S from './Pokemon.styled';

function Backcard({ pokemoninfo }) {
	const [species, setSpecies] = useState([]);
	useEffect(() => {
		axios.get(pokemoninfo.species.url).then((response) => {
			setSpecies(response.data.flavor_text_entries[1].flavor_text);
		});
	}, [species]);

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
				<S.PokemonPicture
					src={pokemoninfo.sprites.back_default}
					alt='포켓몬 사진'
				></S.PokemonPicture>
				<S.PokemonSpecies>[ Characteristic ]</S.PokemonSpecies>
				<S.PokemonSpecies>{species}</S.PokemonSpecies>
			</S.BackCardForm>
		</div>
	);
}

export default Backcard;
