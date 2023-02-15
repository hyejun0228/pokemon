import styled from 'styled-components';

export const TypesNameList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	width: 80vw;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const TypesNameButton = styled.div`
	background-color: white;
	border: double 5px black;
	border-radius: 7px;
	width: 85px;
	height: 29px;
	margin: 7px;
	margin-bottom: 10px;
	font-family: 'Pokemon X and Y', 'Courier New';
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 24px;

	:hover {
		background-color: black;
		color: white;
		border: double 5px white;
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;
