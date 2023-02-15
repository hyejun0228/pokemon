import styled from 'styled-components';
//import PokmonBallcursor from './PokmonBallcursor';

export const Title = styled.img`
	position: relative;
	width: 700px; //1024px
	left: 50%;
	margin-left: -352px;
	margin-top: 40px;
	margin-bottom: 50px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
	background-size: 30px;
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

//=======표시할 포켓몬의 수 적는곳 ========
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
//=========흰색=====
export const PokemonCardsViewer = styled.div`
	//display: flex;
	flex-direction: column;
	background-color: white;
	border-radius: 10px;
	border: inset 7px;
	margin: 75px 20px 20px 20px;
`;

export const Cards = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap; //페이지키우면 키우는대로 조절되는 기능~굿굿
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
//=============
export const NumberButton = styled.button`
	margin-left: 5px;
	border: double;
	border-radius: 5px;
	font-family: 'Pokemon X and Y', 'Courier New';
	margin-top: 20px;
	margin-bottom: 20px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
		background-color: black;
		color: white;
		border: double white;
	}
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;
