import * as S from './Pokemon.styled';

function Frontcard({ pokemoninfo }) {
	return (
		<div>
			<S.CardForm>
				<S.PokemonId># {pokemoninfo.id}</S.PokemonId>
				<S.CardTitle>{pokemoninfo.name}</S.CardTitle>
				<h3>===============</h3>
				<S.CardList>
					<div>Height : {pokemoninfo.height / 10}m</div>
					<div>Weight : {pokemoninfo.weight / 10}kg</div>
				</S.CardList>
				<S.PokemonTypes>
					{pokemoninfo.types.map((pokemonTypes, index) => (
						<S.PokemonType key={index}>{pokemonTypes.type.name}</S.PokemonType>
					))}
				</S.PokemonTypes>
				<S.PokemonPicture
					src={pokemoninfo.sprites.front_default}
					alt='포켓몬 정면 사진'
				></S.PokemonPicture>
			</S.CardForm>
		</div>
	);
}

export default Frontcard;
