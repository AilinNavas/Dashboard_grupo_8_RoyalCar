import React, { useState, useEffect } from "react";
import SmallCard from './SmallCard'

function ContentRowProducts() {
    
  const [productTotal, setProductTotal] = useState(0);
  const [brandsTotal, setBrandsTotal] = useState(0);
  const [usersTotal, setUsersTotal] = useState(0);
    
  useEffect(() => {
    fetch('http://localhost:3000/api/products')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
       
        setProductTotal(data.data.countProducts);
        setBrandsTotal(data.data.brandsCount);
    
      })
      .catch((error) => console.log(error));
  }, []);
    
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setUsersTotal(data.data.count);
        
      })
      .catch((error) => console.log(error));
  }, []);
    
   
    return (
        <div className="row">
            {/* {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )} */}
             <SmallCard
          color="primary"
          title="Total Productos"
          icon="fa-car"
          quantity={productTotal}
        />
        <SmallCard
          color="warning"
          title="Total de marcas disponibles"
          icon="fa-crown"
          quantity={brandsTotal}
        />
        <SmallCard
          color="success"
          title="Total de usuarios registrados"
          icon="fa-users"
          quantity={usersTotal}
        />
      </div>
    )
}

export default ContentRowProducts