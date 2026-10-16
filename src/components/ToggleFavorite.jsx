import { useFavorite } from "../context/FavoritesContext"

function FavoriteToggle({ id }) {
    const { favUsers, toggleFavorite } = useFavorite()
    const isFavorite = favUsers.includes(id)

    return (
        <button onClick={() => toggleFavorite(id)}>
            {isFavorite ? "★" : "☆"}
        </button>
    )
}
export default FavoriteToggle