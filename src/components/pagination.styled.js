import styled from 'styled-components';

export const Button = styled.button`
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
