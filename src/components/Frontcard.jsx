import * as S from './Frontcard.styled';
//import HeartButton from './HeartButton';

function Frontcard({ pokemonDatas }) {
	//console.log('프론트' + pokemonDatas);
	return (
		<div>
			<S.FrontCardForm>
				<S.PokemonId># {pokemonDatas.id}</S.PokemonId>
				{/* <button type='checkbox'>담기</button> */}
				<S.CardTitle>{pokemonDatas.name}</S.CardTitle>

				<S.CardList>
					<div>Height : {pokemonDatas.height / 10}m</div>
					<div>Weight : {pokemonDatas.weight / 10}kg</div>
				</S.CardList>
				<S.PokemonPicture
					src={pokemonDatas.sprites.front_default}
					alt='포켓몬 정면 사진'
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
