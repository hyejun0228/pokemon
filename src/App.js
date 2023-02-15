import { Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
// import Grass from './components/Grass';

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Pokemon />} />
			</Routes>
		</div>
	);
}

export default App;
