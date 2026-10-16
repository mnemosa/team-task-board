import { createContext, useContext, useState } from "react"

const FavoritesContext = createContext(null)

export function FavoriteProvider({ children }) {
    const [favUsers, setFavUsers] = useState([])

    function toggleFavorite(id) {
        setFavUsers((prev) =>
            prev.includes(id)
                ? prev.filter((favId) => favId !== id)
                : [...prev, id]
        )
    }

    return (
        <FavoritesContext.Provider value={{ favUsers, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavorite() {
    return useContext(FavoritesContext)
}