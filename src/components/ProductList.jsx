import React from 'react'
import PropTypes from 'prop-types'

function ProductList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                {/* <td>{props.brand}</td> */}
                <td>{props.model}</td>
                <td>{props.description}</td>
            </tr>
        </React.Fragment>
    )
}

ProductList.propTypes = {
    id: PropTypes.number,
    model: PropTypes.string,
    description: PropTypes.string
}

export default ProductList