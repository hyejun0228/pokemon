import styled from 'styled-components';

export const Title = styled.img`
	position: relative;
	width: 700px;
	left: 50%;
	margin: 40px auto 50px -352px;
	background-size: 30px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const GrayScreen = styled.div`
	background-color: #73777b;
	border-radius: 15px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const AbilitiesInfo = styled.div`
	font-size: 3px;
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 20px;
	margin-right: 20px;
	border: double 6px;
	border-radius: 5px;
	font-family: 'Pokemon X and Y', 'Courier New';
	background-color: white;
	font-size: 17px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const PokemonCardsViewer = styled.div`
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	border: inset 7px;
	margin: 75px 20px 20px 20px;
`;

export const Cards = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap; //페이지키우면 키우는대로 조절되는 기능~
	:hover {
		cursor: url(PokemonBallCursor3.png), auto;
	}
`;

export const PageController = styled.div`
	flex-direction: row;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
`;

export const CountPage = styled.button`
	font-family: 'Pokemon X and Y', 'Courier New';
	font-size: 15px;
	margin-left: 5px;
	border: double;
	border-radius: 5px;
	background-color: white;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const ControlButton = styled.button`
	margin-left: 5px;
	border: double;
	border-radius: 5px;
	font-family: 'Pokemon X and Y', 'Courier New';
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
		background-color: black;
		color: white;
		border: double white;
	}
`;
