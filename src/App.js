import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './components/Pokemon';
import Grass from './components/classify/Grass';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Pokemon />} />
					<Route path='/grass' element={<Grass />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
