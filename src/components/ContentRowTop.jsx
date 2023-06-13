import React from 'react'

import ContentRowProducts from './ContentRowProducts'
import BrandsInDb from './BrandsInDb'
import LastProductInDb from './LastProductInDb'

function ContentRowTop() {
    return (
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard - Royal Car</h1>
            </div>

            {/* <!-- Content Row Movies--> */}
            <ContentRowProducts />
            {/* <!-- End movies in Data Base --> */}


            {/* <!-- Content Row Last Movie in Data Base --> */}
            <div className="row">
                {/* <!-- Last Movie in DB --> */}
                <LastProductInDb />
                {/* <!-- End content row last movie in Data Base --> */}

                {/* <!-- Genres in DB --> */}
                <BrandsInDb />
            </div>
        </div>
    )
}

export default React.memo(ContentRowTop)
