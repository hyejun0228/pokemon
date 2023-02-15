import * as S from './Frontcard.styled';

function Frontcard({ pokemonDatas }) {
	return (
		<div>
			<S.FrontCardForm>
				<S.PokemonId># {pokemonDatas.id}</S.PokemonId>
				<S.CardTitle>{pokemonDatas.name}</S.CardTitle>
				<S.CardList>
					<div>Height : {pokemonDatas.height / 10}m</div>
					<div>Weight : {pokemonDatas.weight / 10}kg</div>
				</S.CardList>
				<S.PokemonPicture
					src={pokemonDatas.sprites.front_default}
					alt='Waiting for future updates...'
				></S.PokemonPicture>
				<S.PokemonTypes>
					{pokemonDatas.types.map((pokemonTypes, index) => (
						<S.PokemonType key={index}>{pokemonTypes.type.name}</S.PokemonType>
					))}
				</S.PokemonTypes>
			</S.FrontCardForm>
		</div>
	);
}

export default Frontcard;
