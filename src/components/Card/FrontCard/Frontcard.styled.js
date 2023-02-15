import styled from 'styled-components';

export const FrontCardForm = styled.div`
	border: double 5px;
	border-radius: 5px;
	background-color: white;
	margin: 10px;
	margin-right: 10px;
	width: 200px;
	height: 350px;
	:hover {
		box-shadow: 3px 3px 3px;
	}
`;

export const PokemonId = styled.h5`
	background-color: lightslategray;
	border-radius: 5px;
	width: 20%;
	margin: 5px;
	margin-top: 3px;
	border: double 5px black;
`;

export const CardTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: 'Pokemon X and Y', 'Courier New';
	font-size: 28px;
	margin-bottom: 30px;
`;

export const CardList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: 'Pokemon X and Y', 'Courier New';
	font-size: 17px;
	line-height: 25px;
`;

export const PokemonPicture = styled.img`
	margin: auto;
	margin-top: 20px;
	margin-bottom: 0%;
	display: block;
	border: double 5px black;
	border-radius: 7px;
`;

export const PokemonType = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Pokemon X and Y', 'Courier New';
	margin: 8px;
	font-size: 17px;
	margin-top: 20px;
`;

export const PokemonTypes = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 17px;
`;
