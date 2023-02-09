import { useState } from 'react';
import * as S from './Frontcard.styled';
//import HeartButton from './HeartButton';

function Frontcard({ pokemoninfo }) {
	return (
		<div>
			<S.FrontCardForm>
				<S.PokemonId># {pokemoninfo.id}</S.PokemonId>
				<S.CardTitle>{pokemoninfo.name}</S.CardTitle>

				<S.CardList>
					<div>Height : {pokemoninfo.height / 10}m</div>
					<div>Weight : {pokemoninfo.weight / 10}kg</div>
				</S.CardList>
				<S.PokemonPicture
					src={pokemoninfo.sprites.front_default}
					alt='포켓몬 정면 사진'
				></S.PokemonPicture>
				<S.PokemonTypes>
					{pokemoninfo.types.map((pokemonTypes, index) => (
						<S.PokemonType key={index}>{pokemonTypes.type.name}</S.PokemonType>
					))}
				</S.PokemonTypes>
			</S.FrontCardForm>
		</div>
	);
}

export default Frontcard;
