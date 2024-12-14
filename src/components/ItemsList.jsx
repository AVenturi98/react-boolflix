import Card from '../components/card/Card'

export default function ItemsList({ items = [], title }) {

    return (
        <>
            <h1>{title}</h1>
            <ul className='listItems'>
                {
                    items.map((item) =>
                        <li key={item.id} className="item">
                            <Card item={item} />
                        </li>)}
            </ul>
        </>
    )
}