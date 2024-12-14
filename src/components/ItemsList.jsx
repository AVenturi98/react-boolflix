import Card from "./Card"

export default function ItemsList({ items = [], title }) {

    return (
        <>
            <ul>{
                items.map((item) =>
                    <li key={item.id}>
                        <h1>{title}</h1>
                        <Card item={item} />

                    </li>)}
            </ul>
        </>
    )
}