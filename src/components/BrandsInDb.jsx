import React from 'react'

class BrandsInDb extends React.Component {
    state = {
        productByBrands: [],
        overTitle: false
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(data => {
                 this.setState({ productByBrands: data.data.countByBrand})
            })
            .catch(err => {
                console.log(err)
            })
    }

    onTitleOver = () => {
        this.setState({ overTitle: !this.state.overTitle })
    }

    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800" onMouseLeave={this.onTitleOver}>Productos por marcas</h5>
                    </div>
                    <div className={`card-body ${this.state.overTitle ? 'bg-secondary' : ''}`}>
                        <div className="row">
                            {this.state.productByBrands.map((product, index) =>
                                <div className="col-lg-6 mb-4" key={index}>
                                    <div className="card bg-dark text-white shadow">
                                        <div className="card-body">
                                            {product}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrandsInDb