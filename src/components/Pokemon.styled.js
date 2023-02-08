import styled from 'styled-components';
//import PokmonBallcursor from './PokmonBallcursor';

export const Title = styled.img`
	position: relative;
	width: 700px; //1024px
	left: 50%;
	margin-left: -352px;
	margin-top: 40px;
	margin-bottom: 50px;
	/* max-width: 90%;
	height: auto;
	
	margin-left: 100px;
	margin-right: 100px;
	display: block;
	 */
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
	background-size: 30px;
`;

export const Cover = styled.div`
	width: 0px;
	margin: auto;
`;

export const Select = styled.select`
	border: 0;
	border-radius: 5px;
`;
export const Screen = styled.div`
	background-color: #73777b;
	border-radius: 15px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;
export const ClassList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const Class = styled.div`
	background-color: white;
	border: double 5px black;
	border-radius: 7px;
	width: 55px;
	height: 25px;
	margin: 7px;
	margin-bottom: 10px;
	font-family: 'Pokemon X and Y', 'Courier New';
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		background-color: black;
		color: white;
		border: double 5px white;
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;

export const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	//	flex-direction: column;이건 위에서 아래로 정렬임
	margin-top: 75px;
	margin-left: 20px;
	margin-right: 20px;
	background-color: white;
	border-radius: 10px;
	border: inset 7px;
	width: auto;
	height: auto;
	flex-wrap: wrap; //페이지키우면 키우는대로 조절되는 기능~굿굿
	:hover {
		cursor: url(PokemonBallCursor3.png), auto;
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

export const Page = styled.p`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 5px;
	font-family: 'Pokemon X and Y', 'Courier New';
	background-color: white;
	font-size: 15px;
	:hover {
		cursor: url(PokemonBallCursor2.png), auto;
	}
`;
