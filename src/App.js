import './App.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Private from "./pages/Private";
import {createContext, useEffect, useState} from "react";
import Send from "./pages/Send";
import Footer from "./components/Footer/Footer";
import Search from "./pages/Search";

export const AppContext = createContext(null)

function App() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('orders')) {
            localStorage.setItem('orders', JSON.stringify([]))
        }

    }, [])

    return (
        <AppContext.Provider value={{isAuth, setIsAuth}}>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/menu/:id" element={<Menu/>}/>
                    <Route path="/Private" element={<Private/>}/>
                    <Route path="/Search" element={<Search/>}/>
                    <Route path="/send/:menuId" element={<Send/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </main>
            <Footer/>

        </AppContext.Provider>
    );
}

export default App;
