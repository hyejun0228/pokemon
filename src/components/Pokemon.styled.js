import styled from 'styled-components';

export const Title = styled.img`
	margin-top: 50px;
	margin-left: 100px;
	display: block;
	margin-bottom: 50px;
`;

export const Screen = styled.div`
	background-color: #73777b;
	border-radius: 15px;
`;
export const ClassList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
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
`;

export const FrontCardForm = styled.div`
	border: double 5px;
	border-radius: 5px;
	background-color: white;
	margin: 10px;
	margin-right: 10px;
	width: 200px;
	height: 350px;
`;

export const BackCardForm = styled.div`
	border: double 5px;
	border-radius: 5px;
	background-color: white;
	margin: 10px;
	width: 200px;
	margin-right: 10px;
	margin-right: 10px;
	height: 350px;
`;

export const WholeCard = styled.div``;

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

export const PokemonPicture = styled.img`
	margin: auto;
	margin-top: 20px;
	margin-bottom: 0%;
	display: block;
	border: double 5px black;
	border-radius: 7px;
`;

export const PokemonId = styled.h5`
	background-color: lightslategray;
	border-radius: 5px;
	width: 20%;
	margin: 5px;
	margin-top: 3px;
	border: double 5px black;
`;

export const AbilitiesInfo = styled.div`
	font-size: 3px;
`;
//=========backCard======
export const PokemonSkill = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Pokemon X and Y', 'Courier New';
	margin: 8px;
	font-size: 15px;
	margin-top: 10px;
`;

export const PokemonSpecies = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Pokemon X and Y', 'Courier New';
	margin: 8px;
	font-size: 13px;
	margin-top: 10px;
	text-align: center;
`;
//=======표시할 포켓몬의 수 적는곳 ========
export const Label = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 5px;
	border: double;
	border-radius: 5px;
	font-family: 'Pokemon X and Y', 'Courier New';
	background-color: white;
	font-size: 17px;
`;
