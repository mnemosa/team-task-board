import { Link } from "react-router-dom"

function NotFound() {
    return (
        <>
            <h1>404: сторінку не знайдено</h1>
            <Link to="/">На головну</Link>
        </>
    )
}
export default NotFound