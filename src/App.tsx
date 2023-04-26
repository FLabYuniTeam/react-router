import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';

import Main from './pages/Main';
import Coordinates from './pages/Coordinates';
import Drag from './pages/Drag';
import Network from './pages/Network';
import This from './pages/This';
import URI from './pages/URI';
import NotFound from './pages/NotFound';
import Header from './pages/Header';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/coordinates" element={<Coordinates />} />
					<Route path="/drag" element={<Drag />} />
					<Route path="/network" element={<Network />} />
					<Route path="/this" element={<This />} />
					<Route path="/uri" element={<URI />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
