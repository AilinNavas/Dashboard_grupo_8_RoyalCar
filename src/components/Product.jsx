//Trabajando con componentes de estado - Clases
//Apis  - Eventos
import React from 'react'

//Importar nuestro componente
import ProductList from './ProductList'

class Product extends React.Component {
    state = {
        products: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products')
        .then(res => res.json())
        .then(data => {
            this.setState({ products: data.data.products})
        })
        .catch(err => {
            console.log(err)
        })
    }
    // productByBrands: data.data.countByBrand
    render() {
        return (
            <>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">Todos los productos en base de datos</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        {/* <th>Marca</th> */}
                                        <th>Modelo</th>
                                        <th>Descripción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                         this.state.products && this.state.products.map((product, index) => {
                                        // this.state.products.map((product, index) => {
                                            return <ProductList  {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Product
