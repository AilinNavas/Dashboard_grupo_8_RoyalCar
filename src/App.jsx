import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import BrandsInDb from './components/BrandsInDb'
import ContentRowProducts from './components/ContentRowProducts'
import LastProductInDb from './components/LastProductInDb'
import SearchMovies from './components/SearchMovies'

import './App.css'

function App() {
	return (
		<div id="wrapper">

			{/* <!-- Sidebar --> */}
			<Sidebar />
			{/* <!-- End of Sidebar --> */}

			{/* <!-- Content Wrapper --> */}
			<Routes>
				<Route path="/" element={<ContentWrapper />} />
				<Route path="/brands" element={<BrandsInDb />} />
				<Route path="/products" element={<ContentRowProducts />} />
				<Route path="/last-product" element={<LastProductInDb />} />
				<Route path="/search" element={<SearchMovies prueba="esta es una propiedad de prueba" />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}

		</div>
	)
}

export default App
