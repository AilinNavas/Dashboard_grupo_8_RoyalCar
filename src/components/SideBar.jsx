import React from 'react'

import { Link } from 'react-router-dom'

function SideBar() {
	return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="http://localhost:3000/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/assets/images/logo-royal-car.jpeg" alt="Royal Car" />
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/">
				<i class="fas fa-tachometer-alt-fast"></i>
					<span>Dashboard - Royal Car</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Acciones</div>

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/">
				<i class="far fa-tachometer-alt-fastest"></i>
					<span>Dashboard - Royal Car</span>
				</Link>
			</li>


			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<Link className="nav-link collapsed" to="/brands">
				<i className="fas fa-sitemap"></i>
					<span>Productos por marcas</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/products">
				<i className="fas fa-list"></i>
					<span>Todos los productos</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/last-product">
					<i className="fas fa-fw fa-table"></i>
					<span>Último Producto</span>
				</Link>
			</li>

			{/* <li className="nav-item">
				<Link className="nav-link" to="/search">
					<i className="fas fa-search"></i>
					<span>Buscar</span>
				</Link>
			</li> */}

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)
}

export default React.memo(SideBar)
