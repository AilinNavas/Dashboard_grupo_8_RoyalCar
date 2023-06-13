import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ContentWrapper from './components/ContentWrapper'
import BrandsInDb from './components/BrandsInDb'
import ContentRowProducts from './components/ContentRowProducts'
import LastProductInDb from './components/LastProductInDb'

import './App.css'
import Product from './components/Product'

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
				<Route path="/products" element={<Product/>} />
				<Route path="/last-product" element={<LastProductInDb />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
			{/* <!-- End of Content Wrapper --> */}

		</div>
	)
}

export default App
