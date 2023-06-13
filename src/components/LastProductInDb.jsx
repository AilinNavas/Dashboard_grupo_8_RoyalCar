import React from 'react'
import { Link } from 'react-router-dom'


class LastProductInDb extends React.Component {

state = {
    product : [],
    overTitle: false
}


componentDidMount() {
    fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
        this.setState({ product: data.data.products.pop()})
    })
    .catch(err => {
        console.log(err)
    })
};
onTitleOver = () => {
    this.setState({ overTitle: !this.state.overTitle })
}


render(){
    return(
        <div className="col-lg-6 mb-4">
                 <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h5 className="m-0 font-weight-bold text-gray-800" onMouseLeave={this.onTitleOver}>Último producto en base de datos</h5>
                     </div>
                     <div className={`card-body ${this.state.overTitle ? 'bg-secondary' : ''}`}>
                         <div className="text-center">
                             <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3000/images/products/${this.state.product.image}`} alt=" Último auto " />
                         </div>
                         <h3>{this.state.product.model}</h3>
                         <p>{this.state.product.description}</p>
                        <Link className="btn btn-danger" rel="nofollow" to="/last-product">Ver detalle</Link>
                     </div>
                 </div>
             </div>
    )
}

}


export default React.memo(LastProductInDb)