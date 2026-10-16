import { Outlet } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useFavorite } from "../context/FavoritesContext"

function Layout() {
    const { favUsers } = useFavorite()

    return (
        <>
            <header>
                <ThemeToggle />
                <p>Favorite users: {favUsers.length}</p>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Layout