import Card from "./Card"

export default function ItemsList({ items = [], title }) {

    return (
        <>
            <h1>{title}</h1>
            <ul>{
                items.map((item) =>
                    <li key={item.id}>
                        <Card item={item} />
                    </li>)}
            </ul>
        </>
    )
}