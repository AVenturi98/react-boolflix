export default function Card({ title, original_title, original_language, vote_average }) {

    return (
        <>
            <div>{title}</div>
            <div>{original_title}</div>
            <div>{original_language}</div>
            <div>{vote_average}</div>
        </>
    )
}