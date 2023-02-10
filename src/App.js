import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './sections/home/Home'

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Header />
				<div className="app-sections container">
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
