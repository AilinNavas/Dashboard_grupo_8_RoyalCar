import SmallCard from './SmallCard'

const cards = [
    {
        title: 'Productos en base de datos',
        color: 'primary',
        quantity: 21,
        icon: 'fa-duotone fa-car'
    },
    {
        title: 'Nuestras marcas',
        color: 'success',
        quantity: 79,
        icon: 'fa-crown'
    },
    {
        title: 'Cantidad de usuarios registrados',
        color: 'warning',
        quantity: 49,
        icon: 'fa-duotone fa-users'
    }
]

function ContentRowMovies() {
    return (
        <div className="row">
            {cards.map((card, key) =>
                <SmallCard key={key} color={card.color} title={card.title} quantity={card.quantity} icon={card.icon} />
            )}
        </div>
    )
}

export default ContentRowMovies