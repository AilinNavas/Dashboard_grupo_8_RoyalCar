import React from 'react'


class LastProductInDb extends React.Component {

state = {
    product : []
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
}

render(){
    return(
        <div className="col-lg-6 mb-4">
                 <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h5 className="m-0 font-weight-bold text-gray-800">Último producto en base de datos</h5>
                     </div>
                     <div className="card-body">
                         <div className="text-center">
                             <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ "width": "40rem" }} src={`http://localhost:3000/images/products/${this.state.product.image}`} alt=" Último auto " />
                         </div>
                         <h3>{this.state.product.model}</h3>
                         <p>{this.state.product.description}</p>
                        <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle</a>
                     </div>
                 </div>
             </div>
    )
}

}


export default React.memo(LastProductInDb)