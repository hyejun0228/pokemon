import styled from 'styled-components';

export const Title = styled.img`
	margin-top: 50px;
	margin-left: 100px;
	display: block;
`;

export const ClassList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const ClassCover = styled.div`
	width: 90px;
	overflow: hidden;
	border-radius: 0 10px 0 0;
	flex-wrap: wrap;
`;

export const Class = styled.div`
	background-color: white;
	width: 90px;
	height: 30px;
	border-radius: 10px 0 0 0;
	background-color: white;
	transform: skew(-20deg) translate(30px, 0px);
	flex-wrap: wrap;
	font-style: normal;
`;

export const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	//	flex-direction: column;이건 위에서 아래로 정렬임
	margin-top: 75px;
	margin-left: 20px;
	margin-right: 20px;
	background-color: #b2b2b2;
	border-radius: 5px;
	border: inset 7px;
	width: auto;
	height: auto;
	flex-wrap: wrap; //페이지키우면 키우는대로 조절되는 기능~굿굿
`;

export const CardForm = styled.div`
	border: outset 5px;
	border-radius: 5px;
	background-color: white;
	margin: 10px;
	width: 200px;
	margin-right: auto;
	height: 400px;
`;

export const CardTitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const CardList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const PokemonType = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	margin: 4px;
`;

export const PokemonTypes = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const PokemonPicture = styled.img`
	margin: auto;
	display: block;
`;

export const PokemonId = styled.h5`
	background-color: lightslategray;
	border-radius: 5px;
	width: 20%;
	margin: 5px;
	margin-top: 3px;
`;

export const AbilitiesInfo = styled.div`
	font-size: 3px;
`;
