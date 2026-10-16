import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/Layout"
import Users from "./pages/Users"
import User from "./pages/User"
import UserTasksPage from "./pages/UserTasksPage"
import UserInfoPage from "./pages/UserInfoPage"
import NotFound from "./pages/NotFound"
import { ThemeProvider } from "./context/ThemeContext"
import { FavoriteProvider } from "./context/FavoritesContext"
function App(){
    

    return (
        <>
        <ThemeProvider>
            <FavoriteProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Users />} />
                            <Route path="/users/:id" element={<User />}>
                                <Route path="tasks" element={<UserTasksPage />} />
                                <Route path="info" element={<UserInfoPage />} />
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Route>

                    </Routes>
                </BrowserRouter>
           </FavoriteProvider>
        </ThemeProvider>
        </>
    )
}
export default App